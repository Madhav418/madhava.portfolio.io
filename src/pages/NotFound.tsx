import { Link } from 'react-router-dom'
import { buttonClasses } from '@/lib/button'

export function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        404
      </p>
      <h1 className="mt-4 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link to="/" className={buttonClasses('primary', 'mt-8')}>
        Back to home
      </Link>
    </section>
  )
}
