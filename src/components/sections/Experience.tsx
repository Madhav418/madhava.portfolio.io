import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <div className="relative mt-10 space-y-6 before:absolute before:bottom-0 before:left-[15px] before:top-2 before:w-px before:bg-border sm:before:left-[19px]">
        {experience.map((item, i) => (
          <Reveal key={item.company + item.role} delay={i * 0.08} className="relative pl-10 sm:pl-12">
            <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background sm:h-10 sm:w-10">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-accent to-accent-2" />
            </span>

            <GlassCard className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.role} · {item.company}
                </h3>
                <span className="text-sm font-medium text-accent">{item.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <details open={i === 0} className="experience-details mt-2">
                <summary className="flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-sm text-sm font-semibold text-accent">
                  Highlights
                  <ChevronDown size={16} aria-hidden="true" />
                </summary>
                <ul className="space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-sm text-muted-foreground before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent-2"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </details>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
import { ChevronDown } from 'lucide-react'
