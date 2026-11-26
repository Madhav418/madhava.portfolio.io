import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { ContactForm } from '@/components/sections/ContactForm'
import { siteConfig } from '@/data/site'

export function Contact() {
  const [copyStatus, setCopyStatus] = useState('')

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      setCopyStatus('Email copied')
    } catch {
      setCopyStatus('Select the email address to copy it, or use the email link.')
    }
  }

  return (
    <section id="contact" className="contact-studio" aria-labelledby="contact-heading">
      <div className="contact-topline"><span>05 / A conversation starts here</span><a href="#home">Back to top</a></div>
      <div className="contact-invitation">
        <h2 id="contact-heading">Good things<br />start with <em>hello.</em></h2>
        <a className="contact-orbit" href={`mailto:${siteConfig.email}`} aria-label="Email Madhava"><span>LET’S TALK</span></a>
      </div>
      <div className="contact-body">
        <div className="contact-details">
          <div className="contact-person"><img src="/madhava-editorial.png" width={64} height={64} alt="" loading="lazy" /><div><strong>{siteConfig.name}</strong><span>AI &amp; Generative AI Engineer</span></div></div>
          <p className="contact-note">An idea to explore, a problem to solve,<br />or a team to build. I’d love to hear it.</p>
          <div className="contact-email"><span className="contact-label">Reach me directly</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><button type="button" onClick={copyEmail} aria-label="Copy email address">{copyStatus === 'Email copied' ? <Check size={14} /> : <Copy size={14} />} {copyStatus === 'Email copied' ? 'Copied' : 'Copy email'}</button><span className="contact-copy-status" role="status">{copyStatus}</span></div>
          <div className="contact-direct-links"><a href="tel:+918688570476"><span>Call</span>{siteConfig.phone}</a><a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer"><span>Connect</span>Find me on LinkedIn</a></div>
        </div>
        <div className="contact-form-wrap"><div className="contact-form-heading"><span>Tell me what you have in mind</span></div><ContactForm /></div>
      </div>
      <div className="contact-signoff"><span>Thoughtful engineering. Meaningful collaboration.</span><span>YOUR NEXT IDEA</span></div>
    </section>
  )
}
