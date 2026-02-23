# Architecture Rules — DO NOT VIOLATE

These rules MUST be followed when editing this website. They ensure consistency, maintainability, and professional quality.

## File Structure

### Pages
- All pages go in `app/(pages)/[name]/page.tsx`
- Homepage is `app/page.tsx`
- Use route groups for organization: `app/(pages)/`, `app/(marketing)/`, etc.

### Components
- **Shared UI components** → `components/ui/` (Button, Card, Input, etc.)
- **Page-specific components** → `components/[page-name]/`
- **Section components** → `components/sections/` (Hero, Features, CTA, etc.)
- **Layout components** → `components/layout/` (Header, Footer, Nav)

### Assets
- All images → `public/images/`
- Organize by category: `public/images/hero/`, `public/images/team/`, etc.

## Component Rules

### File Organization
- **One component per file**
- **Max 150 lines per file** — if larger, split into smaller components
- Export as **named export**: `export function ComponentName() {}`

### Component Structure
```tsx
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

// Props interface always defined above component
export interface ComponentNameProps {
  variant?: "default" | "primary";
  children: React.ReactNode;
}

// Component implementation
export function ComponentName({ variant = "default", children }: ComponentNameProps) {
  return (
    <div className={cn("base-styles", { "variant-styles": variant === "primary" })}>
      {children}
    </div>
  );
}
```

### Props
- Always define a TypeScript interface for props
- Use optional props with defaults when appropriate
- Extend native HTML props when relevant: `extends ButtonHTMLAttributes<HTMLButtonElement>`

### Naming
- Components: PascalCase (`Button`, `HeroSection`)
- Files: PascalCase to match component name (`Button.tsx`, `HeroSection.tsx`)
- Props interfaces: `[ComponentName]Props`

## Styling Rules

### Tailwind Only
- **Use Tailwind utility classes exclusively**
- **No CSS modules** (`*.module.css`)
- **No inline styles** (`style={{}}`)
- **No styled-components or emotion**

### Responsive Design (Mobile-First)
```tsx
// Base styles = mobile
// md: = tablet (768px+)
// lg: = desktop (1024px+)
<div className="text-sm md:text-base lg:text-lg">
```

### Spacing Scale
Use consistent spacing from Tailwind's scale:
- **4, 8, 12, 16, 24, 32, 48, 64** (in px equivalents)
- Avoid arbitrary values unless absolutely necessary

### Layout
- Use `max-w-*` containers, never fixed widths
- Use the `Container` component for page-level containers
- Spacing: `py-24` for sections, `py-12` for subsections

### Colors
- Use theme colors from `tailwind.config.ts`
- Primary: `primary-{shade}` (brand color)
- Secondary: `secondary-{shade}` (grays)
- Don't use arbitrary color values

### Utility Helper
```tsx
import { cn } from "@/lib/utils";

// Combine classes conditionally
className={cn(
  "base-classes",
  {
    "conditional-classes": condition,
  },
  customClassName // from props
)}
```

## Images

### Usage
```tsx
import Image from "next/image";

<Image
  src="/images/hero/main.jpg"
  alt="Descriptive alt text"
  width={1200}
  height={600}
  priority // for above-fold images
/>
```

### Rules
- Always use `next/image` component
- Always set `width`, `height`, and `alt`
- Use `priority` for above-the-fold images
- Optimize images before adding to repo

## State & Interactivity

### Client Components
- Add `"use client"` directive at the top when using:
  - `useState`, `useEffect`, etc.
  - Event handlers (`onClick`, etc.)
  - Browser APIs (`window`, `document`)

### Safe Browser Access
```tsx
// Check for browser environment
if (typeof window !== "undefined") {
  // Safe to use window/document
}
```

## Dependencies

### Locked Dependencies
These are pre-installed and **CANNOT be changed**:
- next
- react, react-dom
- tailwindcss, @tailwindcss/typography
- lucide-react (icons)
- framer-motion (animations)
- clsx, tailwind-merge

### Forbidden Actions
- ❌ `npm install` / adding new packages
- ❌ Modifying `package.json`
- ❌ Removing existing dependencies

### Use What's Available
- **Icons** → `lucide-react` (search: https://lucide.dev)
- **Animations** → `framer-motion`
- **Styling** → Tailwind utilities
- **Utilities** → Built-in React/Next.js APIs

## Forbidden Patterns

### ❌ API Routes
```tsx
// NO: app/api/contact/route.ts
export async function POST() { ... }
```
This is a static site template. No server-side logic.

### ❌ Server Actions
```tsx
// NO:
"use server"
export async function submitForm() { ... }
```

### ❌ External Scripts/Styles
```tsx
// NO:
<script src="https://cdn.example.com/script.js" />
<link rel="stylesheet" href="https://cdn.example.com/styles.css" />
```

### ❌ Direct DOM Manipulation
```tsx
// NO:
document.getElementById("thing").style.color = "red";
```
Use React state and Tailwind classes instead.

### ❌ Inline Script Tags
```tsx
// NO:
<script dangerouslySetInnerHTML={{ __html: "alert('hi')" }} />
```

## Locked Files

These files **CANNOT be modified**:
- `package.json` — dependencies are locked
- `tsconfig.json` — TypeScript config is locked
- `next.config.ts` — Next.js config is locked
- `app/globals.css` — base Tailwind directives are locked (you can add custom styles below the base)

## What You CAN Edit

### ✅ Theme Customization
- `tailwind.config.ts` — change colors, fonts, spacing
- Add custom Tailwind utilities

### ✅ Content & Components
- All page files
- All component files
- Create new pages and components
- Edit text, images, layout

### ✅ Styling
- Any Tailwind classes
- Custom animations with Framer Motion
- Responsive breakpoints

## Animations

Use Framer Motion for animations:

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

Common patterns:
- **Fade in on scroll**: `whileInView={{ opacity: 1 }}` + `viewport={{ once: true }}`
- **Stagger children**: Use `variants` and `staggerChildren`
- **Hover effects**: `whileHover={{ scale: 1.05 }}`

## Performance

- Use `next/image` for all images (automatic optimization)
- Add `priority` to above-the-fold images
- Lazy load sections below the fold
- Keep components small and focused
- Avoid unnecessary re-renders (use React.memo if needed)

## Accessibility

- Always provide `alt` text for images
- Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Ensure sufficient color contrast
- Make interactive elements keyboard-accessible
- Use ARIA labels when necessary

## Quality Checklist

Before committing changes, verify:
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] No ESLint errors: `npm run lint`
- [ ] Responsive on mobile, tablet, desktop
- [ ] Images have alt text
- [ ] No hardcoded values that should be in theme
- [ ] Components are under 150 lines
- [ ] Follows naming conventions
- [ ] Uses existing UI components where possible

## Summary

**DO:**
- Follow file structure conventions
- Use Tailwind exclusively for styling
- Keep components small and focused
- Use existing UI components
- Optimize images
- Write semantic, accessible HTML
- Add animations with Framer Motion

**DON'T:**
- Add dependencies or modify package.json
- Create API routes or server actions
- Use CSS modules or inline styles
- Exceed 150 lines per component
- Use arbitrary values without good reason
- Modify locked configuration files

---

These rules exist to maintain consistency and quality. Follow them strictly.
