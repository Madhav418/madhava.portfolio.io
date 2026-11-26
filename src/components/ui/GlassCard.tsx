import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  hoverLift?: boolean
}

export function GlassCard({ className, hoverLift = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass rounded-2xl',
        hoverLift &&
          'transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_8px_30px_-8px_rgba(139,92,246,0.35)]',
        className,
      )}
      {...props}
    />
  )
}
