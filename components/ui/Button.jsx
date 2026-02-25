import { cn } from '@/lib/utils';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-600',
    secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-neutral-500',
    outline: 'border-2 border-neutral-300 bg-transparent hover:bg-neutral-50 focus-visible:ring-neutral-500',
    ghost: 'hover:bg-neutral-100 focus-visible:ring-neutral-500',
  };
  
  const sizes = {
    sm: 'h-9 px-4 text-sm rounded-md',
    md: 'h-11 px-6 text-base rounded-lg',
    lg: 'h-14 px-8 text-lg rounded-lg',
  };
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
