import { cn } from '@/lib/utils';

export default function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }) {
  return (
    <h3 className={cn('text-xl font-semibold text-neutral-900', className)} {...props}>
      {children}
    </h3>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={cn('text-neutral-600', className)} {...props}>
      {children}
    </div>
  );
}
