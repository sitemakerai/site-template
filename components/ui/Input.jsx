import { cn } from '@/lib/utils';

export default function Input({ className, type = 'text', ...props }) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-base transition-colors',
        'placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-0',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'flex min-h-[120px] w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-base transition-colors',
        'placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-0',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}

export function Label({ className, ...props }) {
  return (
    <label
      className={cn('text-sm font-medium text-neutral-700', className)}
      {...props}
    />
  );
}
