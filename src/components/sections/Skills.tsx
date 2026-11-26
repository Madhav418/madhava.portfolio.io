import { useState } from 'react'
import { AnimatePresence, useReducedMotion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillGroups } from '@/data/skills'

export function Skills() {
  const [search, setSearch] = useState('')
  const reduceMotion = useReducedMotion()
  const query = search.trim().toLowerCase()
  const visibleGroups = skillGroups
    .map((group) => ({
      ...group,
      items: group.category.toLowerCase().includes(query)
        ? group.items
        : group.items.filter((item) => item.toLowerCase().includes(query)),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Skills"
        title="Tools & technologies I work with"
        description="The tools I use most often, grouped by the problems they help me solve."
      />

      <div className="mt-8 max-w-md">
        <label htmlFor="skill-search" className="block text-sm font-semibold text-foreground">
          Search skills
        </label>
        <input
          id="skill-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Try Python, RAG, or Azure"
          className="mt-2 min-h-11 w-full rounded-lg border border-border bg-surface px-4 text-base text-foreground"
        />
      </div>

      <p role="status" className={query ? 'mt-3 text-sm text-muted-foreground' : 'sr-only'}>
        {visibleGroups.length === 0
          ? 'No matching skills. Try another technology or category.'
          : `${visibleGroups.length} skill ${visibleGroups.length === 1 ? 'category' : 'categories'} shown.`}
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false}>
          {visibleGroups.map((group, i) => (
            <Reveal
              key={group.category}
              layout={reduceMotion ? false : 'position'}
              delay={query ? 0 : i * 0.08}
              exit={{ opacity: 0, transition: { duration: reduceMotion ? 0 : 0.15 } }}
            >
              <GlassCard className="skill-card h-full p-5 sm:p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
