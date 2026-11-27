import { useRef, useState, type PointerEvent } from 'react'
import { useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Pause, Play } from 'lucide-react'
import { projects } from '@/data/projects'
import { GeoMapArtwork, TowerAssetArtwork, type GeoMapSelection } from '@/components/ui/TechnicalArtwork'

export function ProjectArtwork({ geo, animated = false, selection }: { geo: boolean; animated?: boolean; selection?: GeoMapSelection }) {
  const artworkRef = useRef<HTMLDivElement>(null)
  const inView = useInView(artworkRef, { amount: 0.15 })
  return (
    <div ref={artworkRef} className={`work-artwork ${geo ? 'artwork-geo' : 'artwork-tower'}`} data-animated={animated && inView} aria-hidden={selection ? undefined : true}>
      {!geo && <div className="artwork-label"><span>MULTIMODAL INSPECTION</span><span>CONCEPT STUDY</span></div>}
      <svg viewBox={geo ? '0 0 720 360' : '0 0 720 400'} fill="none">
        {geo ? <GeoMapArtwork selection={selection} /> : <TowerAssetArtwork />}
      </svg>
      {!geo && <div className="artwork-bottom"><span>YOLO × Qwen3-VL × COLMAP</span><span>AeroMind</span></div>}
    </div>
  )
}

export function Projects() {
  const [animated, setAnimated] = useState(true)

  function tiltArtwork(event: PointerEvent<HTMLAnchorElement>) {
    if (!animated || event.pointerType !== 'mouse') return

    const card = event.currentTarget
    const bounds = card.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5

    card.style.setProperty('--artwork-tilt-x', `${-y * 12}deg`)
    card.style.setProperty('--artwork-tilt-y', `${x * 12}deg`)
  }

  function resetArtworkTilt(event: PointerEvent<HTMLAnchorElement>) {
    event.currentTarget.style.removeProperty('--artwork-tilt-x')
    event.currentTarget.style.removeProperty('--artwork-tilt-y')
  }

  return (
    <section id="projects" aria-labelledby="projects-heading" className="studio-work">
      <header className="studio-section-heading"><span className="studio-kicker">01 / Selected work</span><h2 id="projects-heading">Intelligence,<br /><em>in practice.</em></h2><p>A closer look at the systems I build.<br />From first principles to working products.</p></header>
      <div className="work-motion-control"><span>Two systems. A closer look.</span><button type="button" onClick={() => setAnimated(value => !value)} aria-pressed={!animated}>{animated ? <Pause size={13} aria-hidden="true" /> : <Play size={13} aria-hidden="true" />}{animated ? 'Pause animation' : 'Play animation'}</button></div>
      {projects.slice(0, 2).map((project, i) => <article key={project.slug} className={`featured-work featured-work-${i}`}>
        <Link
          to={`/projects/${project.slug}`}
          className="featured-visual"
          aria-label={`Explore ${project.title}`}
          data-tilt={animated && i === 0}
          onPointerMove={tiltArtwork}
          onPointerLeave={resetArtworkTilt}
          onPointerCancel={resetArtworkTilt}
        >
          <ProjectArtwork geo={i === 1} animated={animated} />
        </Link>
        <div className="featured-description"><div><span className="studio-kicker">0{i+1} / {project.role}</span><h3><Link to={`/projects/${project.slug}`}>{project.title.split(': ')[0]}</Link></h3></div><div><p>{project.summary}</p><ul className="work-stack">{project.stack.slice(0,4).map(tech=><li key={tech}>{tech}</li>)}</ul><div className="work-links"><Link to={`/projects/${project.slug}`}>Explore the case study</Link></div></div></div>
      </article>)}
      <div className="archive-heading"><span className="studio-kicker">More explorations</span><span>03 to 06 / Project archive</span></div>
      <div className="studio-archive">{projects.slice(2).map((project,i)=><article key={project.slug}><span className="archive-number">{String(i+3).padStart(2,'0')}</span><div><h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p></div><span className="archive-role">{project.role}</span></article>)}</div>
    </section>
  )
}

