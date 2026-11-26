import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Pause, Play } from 'lucide-react'
import { projects } from '@/data/projects'
import { GeoMapArtwork, TowerAssetArtwork } from '@/components/ui/TechnicalArtwork'

export function ProjectArtwork({ geo, animated = false }: { geo: boolean; animated?: boolean }) {
  const artworkRef = useRef<HTMLDivElement>(null)
  const inView = useInView(artworkRef, { amount: 0.15 })
  return (
    <div ref={artworkRef} className={`work-artwork ${geo ? 'artwork-geo' : 'artwork-tower'}`} data-animated={animated && inView} aria-hidden="true">
      <div className="artwork-label"><span>{geo ? 'SPATIAL INTELLIGENCE' : 'MULTIMODAL INSPECTION'}</span><span>CONCEPT STUDY</span></div>
      <svg viewBox="0 0 720 400" fill="none">
        {geo ? <GeoMapArtwork /> : <TowerAssetArtwork />}
      </svg>
      <div className="artwork-bottom"><span>{geo ? '01 Discover / 02 Match / 03 Verify' : 'YOLO × Qwen3-VL × COLMAP'}</span><span>{geo ? 'GeoDiscover' : 'AeroMind'}</span></div>
    </div>
  )
}

export function Projects() {
  const [animated, setAnimated] = useState(true)
  return (
    <section id="projects" aria-labelledby="projects-heading" className="studio-work">
      <header className="studio-section-heading"><span className="studio-kicker">01 / Selected work</span><h2 id="projects-heading">Intelligence,<br /><em>in practice.</em></h2><p>A closer look at the systems I build.<br />From first principles to working products.</p></header>
      <div className="work-motion-control"><span>Two systems. A closer look.</span><button type="button" onClick={() => setAnimated(value => !value)} aria-pressed={!animated}>{animated ? <Pause size={13} aria-hidden="true" /> : <Play size={13} aria-hidden="true" />}{animated ? 'Pause animation' : 'Play animation'}</button></div>
      {projects.slice(0, 2).map((project, i) => <article key={project.slug} className={`featured-work featured-work-${i}`}>
        <Link to={`/projects/${project.slug}`} className="featured-visual" aria-label={`Explore ${project.title}`}><ProjectArtwork geo={i===1} animated={animated} /></Link>
        <div className="featured-description"><div><span className="studio-kicker">0{i+1} / {project.role}</span><h3><Link to={`/projects/${project.slug}`}>{project.title.split(': ')[0]}</Link></h3></div><div><p>{project.summary}</p><ul className="work-stack">{project.stack.slice(0,4).map(tech=><li key={tech}>{tech}</li>)}</ul><div className="work-links"><Link to={`/projects/${project.slug}`}>Explore the case study</Link>{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>}</div></div></div>
      </article>)}
      <div className="archive-heading"><span className="studio-kicker">More explorations</span><span>03 to 06 / Project archive</span></div>
      <div className="studio-archive">{projects.slice(2).map((project,i)=><article key={project.slug}><span className="archive-number">{String(i+3).padStart(2,'0')}</span><div><h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p></div><span className="archive-role">{project.role}</span></article>)}</div>
    </section>
  )
}

