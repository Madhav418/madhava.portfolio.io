import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/ui/BrandIcons'
import { GlassCard } from '@/components/ui/GlassCard'
import { LinkButton } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectArtwork } from '@/components/sections/Projects'
import { ProjectPreview } from '@/components/ui/ProjectPreview'
import { getProjectBySlug, projects } from '@/data/projects'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [slug])

  if (!project) return <Navigate to="/404" replace />

  const index = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

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
            ? <ProjectArtwork geo={project.slug === 'geodiscover'} />
            : <ProjectPreview slug={project.slug} title={project.title} />}
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
            {project.githubUrl && (
              <LinkButton href={project.githubUrl} target="_blank" rel="noreferrer" variant="glass">
                <GithubIcon size={15} aria-hidden="true" />
                Code
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

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <Reveal delay={0.15}>
          <GlassCard className="h-full p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground">The challenge</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.challenge}</p>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.2}>
          <GlassCard className="h-full p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground">The solution</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
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
                className="flex gap-2 text-sm text-muted-foreground before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent-2"
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
