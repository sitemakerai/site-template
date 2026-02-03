'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

interface AnnotationData {
  id: string;
  selector: string;
  classNames: string[];
  tagName: string;
  textContent?: string;
  boundingRect: { x: number; y: number; width: number; height: number };
  note: string;
  selectedText?: string;
  timestamp: number;
  route: string;
}

/**
 * EditorBridge - Enables click-to-annotate when the site is loaded in the Site Editor iframe.
 * Only activates on preview.qwertz.me domains when embedded in a parent window.
 */
export function EditorBridge() {
  const [isEditorContext, setIsEditorContext] = useState(false);
  const [isAnnotationMode, setIsAnnotationMode] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
  const [annotationInput, setAnnotationInput] = useState<{
    element: HTMLElement;
    rect: DOMRect;
  } | null>(null);
  const [noteText, setNoteText] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Check if we're in the editor context
  useEffect(() => {
    const hostname = window.location.hostname;
    const isPreview = hostname.includes('preview.qwertz.me');
    const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
    const hasEditorParent = window.parent !== window;
    
    // Allow preview domain, localhost, OR any iframe context (for testing)
    const shouldActivate = hasEditorParent && (isPreview || isLocalhost || true); // Always activate in iframe for now
    
    console.log('[EditorBridge] Context check:', { 
      hostname, 
      isPreview, 
      isLocalhost, 
      hasEditorParent, 
      shouldActivate 
    });
    
    setIsEditorContext(shouldActivate);
  }, []);

  // Listen for control messages from parent
  useEffect(() => {
    if (!isEditorContext) {
      console.log('[EditorBridge] Not in editor context, skipping message listener');
      return;
    }

    console.log('[EditorBridge] Setting up message listener');

    const handleMessage = (event: MessageEvent) => {
      // Log all messages for debugging
      if (event.data?.type?.startsWith('SITE_EDITOR')) {
        console.log('[EditorBridge] Received message:', event.data);
      }
      
      if (event.data?.type === 'SITE_EDITOR_CONTROL') {
        switch (event.data.action) {
          case 'ACTIVATE':
            console.log('[EditorBridge] ACTIVATE received');
            setIsAnnotationMode(true);
            break;
          case 'DEACTIVATE':
            console.log('[EditorBridge] DEACTIVATE received');
            setIsAnnotationMode(false);
            setAnnotationInput(null);
            setHoveredElement(null);
            break;
          case 'GET_PAGE_INFO':
            window.parent.postMessage({
              type: 'SITE_EDITOR_PAGE_INFO',
              payload: {
                route: window.location.pathname,
                title: document.title,
              },
            }, '*');
            break;
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [isEditorContext]);

  // Generate a CSS selector for an element
  const getSelector = useCallback((element: HTMLElement): string => {
    // Try ID first
    if (element.id) {
      return `#${element.id}`;
    }

    // Build path with classes
    const parts: string[] = [];
    let current: HTMLElement | null = element;
    let depth = 0;

    while (current && current !== document.body && depth < 4) {
      let selector = current.tagName.toLowerCase();
      
      // Add meaningful classes (skip utility classes like p-4, text-sm, etc.)
      const meaningfulClasses = Array.from(current.classList)
        .filter(c => !c.match(/^(p|m|w|h|text|bg|flex|grid|border|rounded|shadow|hover|focus|active|sm|md|lg|xl)-/))
        .slice(0, 2);
      
      if (meaningfulClasses.length > 0) {
        selector += '.' + meaningfulClasses.join('.');
      }
      
      parts.unshift(selector);
      current = current.parentElement;
      depth++;
    }

    return parts.join(' > ');
  }, []);

  // Handle mouse move for hover highlighting
  useEffect(() => {
    if (!isAnnotationMode || annotationInput) return;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Skip the overlay elements
      if (target.closest('[data-editor-bridge]')) {
        setHoveredElement(null);
        return;
      }
      
      setHoveredElement(target);
    };

    const handleMouseLeave = () => {
      setHoveredElement(null);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isAnnotationMode, annotationInput]);

  // Handle click to annotate
  useEffect(() => {
    if (!isAnnotationMode || annotationInput) {
      console.log('[EditorBridge] Click handler not registered:', { isAnnotationMode, hasAnnotationInput: !!annotationInput });
      return;
    }

    console.log('[EditorBridge] Registering click handler');

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      console.log('[EditorBridge] Click detected on:', target.tagName, target.className);
      
      // Skip the overlay elements
      if (target.closest('[data-editor-bridge]')) {
        console.log('[EditorBridge] Click on overlay, skipping');
        return;
      }
      
      e.preventDefault();
      e.stopPropagation();
      
      const rect = target.getBoundingClientRect();
      console.log('[EditorBridge] Setting annotation input for element:', target);
      setAnnotationInput({ element: target, rect });
      setNoteText('');
      
      // Focus input after render
      setTimeout(() => inputRef.current?.focus(), 50);
    };

    document.addEventListener('click', handleClick, true);
    return () => {
      console.log('[EditorBridge] Removing click handler');
      document.removeEventListener('click', handleClick, true);
    };
  }, [isAnnotationMode, annotationInput]);

  // Submit annotation
  const submitAnnotation = useCallback(() => {
    if (!annotationInput || !noteText.trim()) {
      console.log('[EditorBridge] Cannot submit annotation:', { hasInput: !!annotationInput, noteText });
      return;
    }

    const { element, rect } = annotationInput;
    
    const annotation: AnnotationData = {
      id: `annotation-${Date.now()}`,
      selector: getSelector(element),
      classNames: Array.from(element.classList),
      tagName: element.tagName.toLowerCase(),
      textContent: element.textContent?.slice(0, 100),
      boundingRect: {
        x: Math.round(rect.x),
        y: Math.round(rect.y),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      },
      note: noteText.trim(),
      timestamp: Date.now(),
      route: window.location.pathname,
    };

    console.log('[EditorBridge] Submitting annotation:', annotation);

    // Send to parent
    window.parent.postMessage({
      type: 'SITE_EDITOR_ANNOTATION',
      payload: annotation,
    }, '*');

    console.log('[EditorBridge] Annotation sent to parent');

    // Reset
    setAnnotationInput(null);
    setNoteText('');
    setHoveredElement(null);
  }, [annotationInput, noteText, getSelector]);

  // Cancel annotation
  const cancelAnnotation = useCallback(() => {
    setAnnotationInput(null);
    setNoteText('');
  }, []);

  // Handle keyboard
  useEffect(() => {
    if (!annotationInput) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        cancelAnnotation();
      } else if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        submitAnnotation();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [annotationInput, submitAnnotation, cancelAnnotation]);

  if (!isEditorContext || !isAnnotationMode) return null;

  return (
    <>
      {/* Hover highlight overlay */}
      {hoveredElement && !annotationInput && (
        <div
          data-editor-bridge
          style={{
            position: 'fixed',
            top: hoveredElement.getBoundingClientRect().top,
            left: hoveredElement.getBoundingClientRect().left,
            width: hoveredElement.getBoundingClientRect().width,
            height: hoveredElement.getBoundingClientRect().height,
            border: '2px solid #8b5cf6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            pointerEvents: 'none',
            zIndex: 99998,
            borderRadius: '4px',
          }}
        />
      )}

      {/* Selector tooltip */}
      {hoveredElement && !annotationInput && (
        <div
          data-editor-bridge
          style={{
            position: 'fixed',
            top: Math.max(8, hoveredElement.getBoundingClientRect().bottom + 8),
            left: hoveredElement.getBoundingClientRect().left,
            backgroundColor: '#1f2937',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '11px',
            fontFamily: 'monospace',
            pointerEvents: 'none',
            zIndex: 99999,
            maxWidth: '300px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {getSelector(hoveredElement)}
        </div>
      )}

      {/* Annotation input popover */}
      {annotationInput && (
        <>
          {/* Selection highlight */}
          <div
            data-editor-bridge
            style={{
              position: 'fixed',
              top: annotationInput.rect.top,
              left: annotationInput.rect.left,
              width: annotationInput.rect.width,
              height: annotationInput.rect.height,
              border: '2px solid #8b5cf6',
              backgroundColor: 'rgba(139, 92, 246, 0.2)',
              pointerEvents: 'none',
              zIndex: 99998,
              borderRadius: '4px',
            }}
          />

          {/* Input popover */}
          <div
            data-editor-bridge
            style={{
              position: 'fixed',
              top: Math.min(
                annotationInput.rect.bottom + 12,
                window.innerHeight - 160
              ),
              left: Math.max(
                16,
                Math.min(
                  annotationInput.rect.left,
                  window.innerWidth - 296
                )
              ),
              width: '280px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              zIndex: 99999,
              padding: '12px',
            }}
          >
            <div style={{ marginBottom: '8px', fontSize: '13px', fontWeight: 500, color: '#374151' }}>
              What would you like to change?
            </div>
            <textarea
              ref={inputRef}
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="e.g., Make this larger, change color to blue..."
              style={{
                width: '100%',
                minHeight: '60px',
                padding: '8px 12px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                resize: 'none',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#8b5cf6';
                e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e7eb';
                e.target.style.boxShadow = 'none';
              }}
            />
            <div style={{ display: 'flex', gap: '8px', marginTop: '8px', justifyContent: 'flex-end' }}>
              <button
                onClick={cancelAnnotation}
                style={{
                  padding: '6px 12px',
                  fontSize: '13px',
                  color: '#6b7280',
                  background: 'none',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={submitAnnotation}
                disabled={!noteText.trim()}
                style={{
                  padding: '6px 12px',
                  fontSize: '13px',
                  color: '#fff',
                  backgroundColor: noteText.trim() ? '#8b5cf6' : '#d1d5db',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: noteText.trim() ? 'pointer' : 'not-allowed',
                }}
              >
                Add ✓
              </button>
            </div>
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#9ca3af' }}>
              Enter to submit • Esc to cancel
            </div>
          </div>
        </>
      )}

      {/* Mode indicator */}
      <div
        data-editor-bridge
        style={{
          position: 'fixed',
          top: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#8b5cf6',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '13px',
          fontWeight: 500,
          zIndex: 99999,
          boxShadow: '0 2px 10px rgba(139, 92, 246, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ fontSize: '16px' }}>🎯</span>
        Click any element to annotate
      </div>
    </>
  );
}
