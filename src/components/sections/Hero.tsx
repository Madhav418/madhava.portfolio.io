
import { siteConfig } from '@/data/site'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section id="home" className="studio-hero">
      <div className="studio-topline"><span>AI engineering · Selected work</span></div>
      <div className="studio-name-block">
        <h1 className="studio-name">
          <span className="studio-name-wide">Madhava <span className="studio-name-line">Rao Dummu<span className="name-period">.</span></span></span>
          <span className="studio-name-small">Madhavarao <span className="studio-name-line">Dummu<span className="name-period">.</span></span></span>
        </h1>
        <aside className="hero-focus" aria-label="Current work">
          <p className="hero-focus-label">Current focus</p>
          <p className="hero-focus-description">Teaching systems to see,<br />understand, and discover.</p>
          <div className="hero-focus-projects">
            <Link to="/projects/aeromind"><strong>AeroMind</strong><span>Telecom inspection · VLMs &amp; LLMs</span></Link>
            <Link to="/projects/geodiscover"><strong>GeoDiscover</strong><span>Geospatial &amp; places intelligence</span></Link>
          </div>
        </aside>
      </div>
      <div className="studio-hero-grid">
        <div className="studio-intro">
          <span className="studio-kicker">AI &amp; Generative AI Engineer</span>
          <h2>Turning complexity<br />into <em>possibility.</em></h2>
          <p>{siteConfig.tagline}</p>
          <a className="studio-round-link" href="#projects"><span>Explore<br /> my work</span></a>
        </div>
        <figure className="studio-portrait">
          <img src="/madhava-hero-illustration.png" alt="Illustrated portrait of Madhava Rao Dummu" width={1254} height={1254} fetchPriority="high" />
          <figcaption><span>Engineering with intention.</span><span>01 / Introduction</span></figcaption>
        </figure>
        <div className="studio-aside"><span className="studio-asterisk" aria-hidden="true">✳</span><p>Vision.<br />Language.<br />Real-world impact.</p></div>
      </div>
      <div className="studio-capabilities"><span>Computer vision</span><span>Multimodal AI</span><span>Intelligent systems</span></div>
    </section>
  )
}
