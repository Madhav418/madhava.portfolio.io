import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type BadgeProps = {
  children: ReactNode
  dotColor?: string
  className?: string
}

export function Badge({ children, dotColor = 'bg-success', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground',
        className,
      )}
    >
      <span className={cn('h-2 w-2 shrink-0 rounded-full', dotColor)} aria-hidden="true" />
      {children}
    </span>
  )
}
