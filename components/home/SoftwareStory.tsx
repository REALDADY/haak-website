'use client'

import { AnimatePresence, m, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useId, useRef, useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import { workflow } from '@/lib/site-data'
import { duration, ease, springConfig } from '@/lib/motion'

export default function SoftwareStory() {
  const listRef = useRef<HTMLOListElement>(null)
  const baseId = useId()
  const reduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 0.65', 'end 0.65'] })
  const smoothProgress = useSpring(scrollYProgress, springConfig.progress)
  const railScale = reduceMotion ? scrollYProgress : smoothProgress

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const next = Math.min(workflow.length - 1, Math.max(0, Math.floor(latest * workflow.length)))
    setActiveIndex((current) => (current === next ? current : next))
  })

  const active = workflow[activeIndex]

  const scrollToStep = (index: number) => {
    document.getElementById(`${baseId}-step-${index}`)?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'center',
    })
  }

  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading
          align="split"
          eyebrow="How HAAK works"
          title="A product-development path with the business goal kept visible."
          intro="The process is structured enough to reduce confusion and flexible enough to match the real scope of the product."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Pinned panel (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="theme-dark noise relative overflow-hidden rounded-[var(--radius-xl)] p-10">
                <div className="grid-lines" aria-hidden="true" />
                <div aria-hidden="true" className="glow-orb glow-cyan -right-24 -top-24 h-80 w-80" />
                <div className="relative z-[1]">
                  <div className="flex items-center justify-between">
                    <p className="t-label">Stage</p>
                    <p className="text-sm font-semibold tabular-nums text-white/60">
                      {active.step} / {String(workflow.length).padStart(2, '0')}
                    </p>
                  </div>
                  <div className="relative mt-6 h-[7.5rem] overflow-hidden" aria-hidden="true">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <m.span
                        key={active.step}
                        className="absolute left-0 top-0 block font-display text-[7.5rem] font-bold leading-none tracking-[-0.06em] text-white"
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: '0%', opacity: 1 }}
                        exit={{ y: '-100%', opacity: 0 }}
                        transition={{ duration: duration.slow, ease: ease.expo }}
                      >
                        {active.step}
                      </m.span>
                    </AnimatePresence>
                  </div>
                  <p className="mt-6 font-display text-3xl font-bold tracking-[-0.03em] text-white">
                    {active.title}
                  </p>

                  <div className="mt-10 grid grid-cols-6 gap-2">
                    {workflow.map((stage, index) => (
                      <button
                        key={stage.step}
                        type="button"
                        onClick={() => scrollToStep(index)}
                        aria-label={`Go to stage ${stage.step}: ${stage.title}`}
                        className="group flex min-h-11 flex-col justify-end gap-2 rounded-lg text-left"
                      >
                        <span
                          className={`block h-1.5 w-full rounded-full transition-colors duration-500 ${
                            index <= activeIndex ? 'bg-[var(--brand-primary)]' : 'bg-white/15 group-hover:bg-white/30'
                          }`}
                        />
                        <span
                          className={`text-[0.7rem] font-semibold transition-colors ${
                            index === activeIndex ? 'text-white' : 'text-white/60'
                          }`}
                        >
                          {stage.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling steps with a scroll-linked progress rail */}
          <div className="relative">
            <div aria-hidden="true" className="absolute bottom-6 left-[1.1rem] top-6 w-px bg-[var(--line)]">
              <m.span
                className="absolute inset-0 origin-top bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-primary-hover)]"
                style={{ scaleY: railScale }}
              />
            </div>
            <ol ref={listRef} className="relative grid gap-4 lg:gap-6">
              {workflow.map((stage, index) => {
                const isActive = index === activeIndex
                return (
                  <li
                    key={stage.step}
                    id={`${baseId}-step-${index}`}
                    className="relative grid grid-cols-[2.25rem_1fr] gap-5 sm:gap-7 lg:min-h-[42vh] lg:items-center"
                  >
                    <span
                      aria-hidden="true"
                      className={`relative z-[1] mt-7 flex h-9 w-9 items-center justify-center rounded-full border text-[0.7rem] font-bold tabular-nums transition-all duration-500 lg:mt-0 ${
                        index <= activeIndex
                          ? 'border-[var(--brand-primary)] bg-[var(--brand-primary)] text-[var(--brand-secondary)]'
                          : 'border-[var(--line-strong)] bg-white text-[var(--text-faint)]'
                      } ${isActive ? 'scale-110 shadow-[0_0_0_6px_rgba(0,180,216,0.15)]' : ''}`}
                    >
                      {stage.step}
                    </span>
                    <article
                      className={`card p-7 transition-[border-color,box-shadow] duration-500 sm:p-8 ${
                        isActive ? 'border-[color-mix(in_srgb,var(--brand-primary)_45%,var(--line))] shadow-[var(--shadow-md)]' : ''
                      }`}
                    >
                      <p className="index-num">Stage {stage.step}</p>
                      <h3 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.3rem)] font-bold leading-tight tracking-[-0.03em] text-[var(--text-primary)]">
                        {stage.title}
                      </h3>
                      <p className="t-body mt-3 max-w-lg">{stage.description}</p>
                    </article>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
