import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About', hash: 'about' },
  { label: 'Skills', hash: 'skills' },
  { label: 'Experience', hash: 'experience' },
  { label: 'Projects', hash: 'projects' },
  { label: 'Contact', hash: 'contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function goToSection(hash: string, e: React.MouseEvent) {
    e.preventDefault()
    setOpen(false)
    if (location.pathname === '/') {
      document.getElementById(hash)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    } else {
      navigate(`/#${hash}`)
    }
  }

  return (
    <header className="site-header sticky top-0 z-50 w-full px-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between py-5">
        <Link
          to="/"
          className="font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name.split(' ')[0]}
          <span className="text-gradient">.</span>
        </Link>

        <div className="desktop-nav hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={`/#${link.hash}`}
              onClick={(e) => goToSection(link.hash, e)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a href={siteConfig.resumeUrl} download className="nav-resume inline-flex min-h-11 items-center whitespace-nowrap text-sm font-semibold">
            Download résumé
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls={open ? 'mobile-navigation' : undefined}
            className="glass flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-foreground md:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mobile-nav flex flex-col gap-1 rounded-2xl border border-border p-3 shadow-lg md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={`/#${link.hash}`}
                onClick={(e) => goToSection(link.hash, e)}
                className={cn(
                  'rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-glass-strong hover:text-foreground',
                )}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
