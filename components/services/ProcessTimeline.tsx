'use client'

import { m, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { springConfig } from '@/lib/motion'

type Step = { step: string; title: string; description: string }

/** Process steps joined by a connector that draws in as the list scrolls through view. */
export default function ProcessTimeline({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] })
  const smooth = useSpring(scrollYProgress, springConfig.progress)
  const progress = reduceMotion ? scrollYProgress : smooth

  return (
    <div ref={ref} className="relative mt-14">
      {/* Horizontal connector (desktop) */}
      <div aria-hidden="true" className="absolute left-0 right-0 top-[1.1rem] hidden h-px bg-white/10 xl:block">
        <m.span
          className="absolute inset-0 origin-left bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]"
          style={{ scaleX: progress }}
        />
      </div>
      {/* Vertical connector (mobile to lg) */}
      <div aria-hidden="true" className="absolute bottom-0 left-[1.1rem] top-0 w-px bg-white/10 xl:hidden">
        <m.span
          className="absolute inset-0 origin-top bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-accent)]"
          style={{ scaleY: progress }}
        />
      </div>

      <RevealGroup as="ol" className="relative grid gap-8 xl:grid-cols-4 xl:gap-6">
        {steps.map((item) => (
          <RevealItem as="li" key={item.step} className="grid grid-cols-[2.25rem_1fr] gap-5 xl:grid-cols-1 xl:gap-8">
            <span className="relative z-[1] flex h-9 w-9 items-center justify-center rounded-full border border-[var(--brand-primary)] bg-[var(--surface-dark)] text-[0.72rem] font-bold tabular-nums text-[var(--brand-logo-cyan)] shadow-[0_0_0_6px_var(--surface-dark)]">
              {item.step}
            </span>
            <div className="card card-interactive h-full p-6 sm:p-7">
              <p className="index-num">Step {item.step}</p>
              <h3 className="t-h3 mt-3">{item.title}</h3>
              <p className="t-body mt-3">{item.description}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  )
}
