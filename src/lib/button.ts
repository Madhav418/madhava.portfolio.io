import { cn } from '@/lib/utils'

const base =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 min-h-11 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50'

const variants = {
  primary:
    'bg-accent text-white shadow-sm hover:bg-accent-2 hover:-translate-y-0.5',
  glass: 'glass text-foreground hover:border-accent/40 hover:-translate-y-0.5',
  ghost: 'text-foreground hover:text-accent',
}

export type ButtonVariant = keyof typeof variants

export function buttonClasses(variant: ButtonVariant = 'primary', className?: string) {
  return cn(base, variants[variant], className)
}
