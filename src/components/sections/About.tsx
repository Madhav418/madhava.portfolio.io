import { GraduationCap, Award } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/data/site'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="About" title="A little about me" />

      <div className="about-story mt-10">
        <figure className="about-portrait">
          <img src="/madhava-editorial.png" alt="Stylized editorial portrait of Madhava in navy, mint, and teal" width={1254} height={1254} loading="lazy" decoding="async" />
          <figcaption><span>The person behind the projects</span><strong>{siteConfig.name}</strong></figcaption>
        </figure>
        <GlassCard className="p-8">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            {siteConfig.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap size={20} aria-hidden="true" className="shrink-0 text-accent" />
            <div><p className="font-medium text-foreground">{siteConfig.education.degree}</p><p className="mt-1">{siteConfig.education.institution}</p><p className="mt-1 text-xs">{siteConfig.education.period} · {siteConfig.education.result}</p></div>
          </div>
        </GlassCard>
      </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {siteConfig.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <GlassCard hoverLift className="flex items-center justify-between p-6">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <span className="font-heading text-2xl font-semibold text-gradient">
                  {stat.value}
                </span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {siteConfig.certifications.map((certification) => (
          <GlassCard key={certification.code} className="flex items-start gap-3 p-5">
            <Award size={22} className="shrink-0 text-accent" aria-hidden="true" />
            <div><p className="text-xs font-semibold text-accent">{certification.code}</p><h3 className="mt-1 text-sm font-medium">{certification.name}</h3></div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
