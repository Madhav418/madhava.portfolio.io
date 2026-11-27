import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { LinkButton } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectArtwork } from '@/components/sections/Projects'
import { ProjectPreview } from '@/components/ui/ProjectPreview'
import { getProjectBySlug, projects } from '@/data/projects'
import { geoDemoPlaces } from '@/data/geoDemo'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined
  const [animateMap, setAnimateMap] = useState(true)
  const [selectedCity, setSelectedCity] = useState(geoDemoPlaces[0].city)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [slug])

  if (!project) return <Navigate to="/404" replace />

  const index = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const geoDiscover = project.slug === 'geodiscover'
  const selectedPlace = geoDemoPlaces.find((place) => place.city === selectedCity) ?? geoDemoPlaces[0]

  return (
    <article className="project-detail-page mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        to="/#projects"
        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to projects
      </Link>

      <Reveal>
        <div className="mt-8">
          {project.slug === 'aeromind' || project.slug === 'geodiscover'
            ? <ProjectArtwork geo={geoDiscover} animated={geoDiscover && animateMap} selection={geoDiscover ? { selectedCity, onSelectCity: setSelectedCity } : undefined} />
            : <ProjectPreview slug={project.slug} title={project.title} />}
          {geoDiscover && (
            <section className="mt-3" aria-labelledby="geo-demo-heading">
              <div className="flex flex-wrap items-center justify-between gap-x-4">
                <h2 id="geo-demo-heading" className="font-heading text-lg font-semibold">Explore sample places</h2>
                <div className="work-motion-control !m-0">
                  <button type="button" onClick={() => setAnimateMap((value) => !value)}>
                    {animateMap ? 'Pause map animation' : 'Play map animation'}
                  </button>
                </div>
              </div>
              <p className="mt-1 text-base leading-relaxed text-muted-foreground">Select a marker or city to see how a fictional place was matched and verified.</p>
              <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Sample cities">
                {geoDemoPlaces.map(({ city }) => (
                  <button
                    key={city}
                    type="button"
                    aria-pressed={selectedCity === city}
                    onClick={() => setSelectedCity(city)}
                    className="cursor-pointer rounded-full border border-border px-3 min-h-11 text-sm hover:bg-surface aria-pressed:bg-accent aria-pressed:text-background"
                  >
                    {city}
                  </button>
                ))}
              </div>
              <div aria-live="polite" aria-atomic="true" className="mt-4 rounded-xl border border-border bg-surface p-4 sm:p-5">
                <h3 className="font-heading font-semibold">{selectedPlace.name} · {selectedPlace.city}</h3>
                <dl className="mt-3 grid gap-4 text-base leading-relaxed sm:grid-cols-2">
                  <div><dt className="font-semibold">Why it matched</dt><dd className="mt-1 text-muted-foreground">{selectedPlace.match}</dd></div>
                  <div><dt className="font-semibold">Verification evidence</dt><dd className="mt-1 text-muted-foreground">{selectedPlace.evidence}</dd></div>
                </dl>
              </div>
            </section>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {project.role}{project.year && ` · ${project.year}`}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <LinkButton href={project.liveUrl} target="_blank" rel="noreferrer" variant="primary">
                Live site
                <ExternalLink size={15} aria-hidden="true" />
              </LinkButton>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 space-y-4 text-base leading-relaxed text-muted-foreground">
        {project.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </Reveal>

      {project.workflow && (
        <section aria-labelledby="project-workflow" className="mt-10">
          <h2 id="project-workflow" className="font-heading text-2xl font-semibold">{geoDiscover ? 'How GeoDiscover works' : 'Inspection workflow'}</h2>
          <ol className="mt-4 list-decimal space-y-4 pl-7 marker:font-semibold marker:text-accent">
            {project.workflow.map((step) => (
              <li key={step.title} className="border-t border-border py-3 pl-2">
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-1 max-w-[75ch] leading-relaxed text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <Reveal delay={0.15}>
          <GlassCard className="h-full p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground">The challenge</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{project.challenge}</p>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.2}>
          <GlassCard className="h-full p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground">The solution</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{project.solution}</p>
          </GlassCard>
        </Reveal>
      </div>

      <Reveal delay={0.25} className="mt-6">
        <GlassCard className="p-6">
          <h2 className="font-heading text-lg font-semibold text-foreground">Results</h2>
          <ul className="mt-3 space-y-2">
            {project.results.map((result) => (
              <li
                key={result}
                className="flex gap-2 text-base leading-relaxed text-muted-foreground before:mt-2.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent-2"
              >
                {result}
              </li>
            ))}
          </ul>
        </GlassCard>
      </Reveal>

      <nav
        aria-label="More projects"
        className="mt-12 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
      >
        <Link
          to={`/projects/${prev.slug}`}
          className="glass group flex items-center gap-3 rounded-2xl p-4 transition-colors hover:border-accent/30"
        >
          <ArrowLeft
            size={18}
            aria-hidden="true"
            className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-1"
          />
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Previous</p>
            <p className="wrap-anywhere font-medium text-foreground">{prev.title}</p>
          </div>
        </Link>
        <Link
          to={`/projects/${next.slug}`}
          className="glass group flex items-center justify-end gap-3 rounded-2xl p-4 text-right transition-colors hover:border-accent/30"
        >
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Next</p>
            <p className="wrap-anywhere font-medium text-foreground">{next.title}</p>
          </div>
          <ArrowRight
            size={18}
            aria-hidden="true"
            className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1"
          />
        </Link>
      </nav>
    </article>
  )
}
