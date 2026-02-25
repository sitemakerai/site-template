import { cn } from '@/lib/utils';

export default function Badge({ children, variant = 'default', className, ...props }) {
  const variants = {
    default: 'bg-neutral-100 text-neutral-900',
    primary: 'bg-primary-100 text-primary-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
