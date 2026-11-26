import { ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '@/data/site'

const currentYear = new Date().getFullYear()

export function Footer() {
  function backToTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-identity">
            <Link to="/" className="footer-name" aria-label={`${siteConfig.name} home`}>Madhava Rao Dummu<span aria-hidden="true">.</span></Link>
            <p>AI &amp; Generative AI Engineer</p>
          </div>
          <nav className="footer-links" aria-label="Footer links">
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">LinkedIn <span className="sr-only"> (opens in a new tab)</span></a>
            <a href={`mailto:${siteConfig.email}`}>Email</a>
            <a href={siteConfig.resumeUrl} download>Résumé</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <button type="button" onClick={backToTop}>Back to top <span><ArrowUp size={16} strokeWidth={1.5} aria-hidden="true" /></span></button>
        </div>
      </div>
    </footer>
  )
}
