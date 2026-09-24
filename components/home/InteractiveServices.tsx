'use client'

import Link from 'next/link'
import { AnimatePresence, m } from 'framer-motion'
import { useId, useRef, useState, type KeyboardEvent } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/motion/Reveal'
import { ArrowRightIcon } from '@/components/icons'
import { duration, ease, hasFinePointer, spring, stagger } from '@/lib/motion'

const capabilities = [
  {
    name: 'Web Platforms',
    href: '/services/web-development',
    summary: 'Responsive websites, portals and web applications built for clarity, speed and maintainability.',
    layers: ['Information architecture', 'Responsive front end', 'Launch support'],
  },
  {
    name: 'Mobile Applications',
    href: '/services/mobile-app',
    summary: 'Mobile product planning and app interfaces for useful first releases and clear user journeys.',
    layers: ['MVP scope', 'App UX', 'Release path'],
  },
  {
    name: 'Business Systems',
    href: '/services/web-development',
    summary: 'Internal tools, workflows and dashboards that help teams operate with less manual friction.',
    layers: ['Role-based flows', 'Admin views', 'Operational logic'],
  },
  {
    name: 'Product Design',
    href: '/services/ui-ux',
    summary: 'UX, UI systems and interface hierarchy for software that people can understand quickly.',
    layers: ['User journeys', 'Interface system', 'Responsive states'],
  },
  {
    name: 'Automation and Integrations',
    href: '/services/business-growth',
    summary: 'Connected processes, handoffs and data flows that reduce disconnected digital work.',
    layers: ['APIs', 'Workflow mapping', 'Measurement'],
  },
  {
    name: 'Cloud and Deployment',
    href: '/services/it-solutions',
    summary: 'Infrastructure and support planning for secure, dependable digital operations.',
    layers: ['Hosting readiness', 'Access control', 'Support structure'],
  },
]

export default function InteractiveServices() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const baseId = useId()
  const active = capabilities[activeIndex]

  const focusTab = (index: number) => {
    const next = (index + capabilities.length) % capabilities.length
    setActiveIndex(next)
    tabRefs.current[next]?.focus()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys: Record<string, () => void> = {
      ArrowDown: () => focusTab(index + 1),
      ArrowRight: () => focusTab(index + 1),
      ArrowUp: () => focusTab(index - 1),
      ArrowLeft: () => focusTab(index - 1),
      Home: () => focusTab(0),
      End: () => focusTab(capabilities.length - 1),
    }
    const action = keys[event.key]
    if (action) {
      event.preventDefault()
      action()
    }
  }

  return (
    <section id="capabilities" className="section surface-soft overflow-hidden">
      <div className="grid-lines-light" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          align="split"
          eyebrow="Capabilities"
          title="Software capability across product, platform and operations."
          intro="HAAK combines strategy, interface design, engineering and support so digital work can become a usable system, not a disconnected set of pages."
        />

        <Reveal className="mt-14 grid overflow-hidden rounded-[var(--radius-xl)] border border-[var(--line)] bg-white shadow-[var(--shadow-md)] lg:grid-cols-[0.85fr_1.15fr]">
          <div
            role="tablist"
            aria-label="HAAK capabilities"
            aria-orientation="vertical"
            className="flex gap-2 overflow-x-auto border-b border-[var(--line)] p-3 [scrollbar-width:none] lg:flex-col lg:gap-0 lg:overflow-visible lg:border-b-0 lg:border-r lg:p-4 [&::-webkit-scrollbar]:hidden"
          >
            {capabilities.map((capability, index) => {
              const selected = activeIndex === index
              return (
                <button
                  key={capability.name}
                  ref={(node) => {
                    tabRefs.current[index] = node
                  }}
                  id={`${baseId}-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onPointerEnter={() => hasFinePointer() && setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`relative z-0 flex min-h-12 shrink-0 items-center gap-4 rounded-2xl px-4 py-3 text-left transition-colors duration-300 lg:min-h-[4.25rem] lg:px-5 ${
                    selected ? 'text-[var(--text-primary)]' : 'text-[var(--text-faint)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {selected && (
                    <m.span
                      layoutId={`${baseId}-capability-indicator`}
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-2xl border border-[color-mix(in_srgb,var(--brand-primary)_30%,transparent)] bg-[var(--surface-soft)]"
                      transition={spring.snappy}
                    >
                      <span className="absolute bottom-3 left-0 top-3 hidden w-[3px] rounded-full bg-[var(--brand-primary)] lg:block" />
                    </m.span>
                  )}
                  <span className="index-num hidden lg:inline">{String(index + 1).padStart(2, '0')}</span>
                  <span className="whitespace-nowrap font-display text-[0.95rem] font-semibold tracking-[-0.01em] lg:whitespace-normal lg:text-[1.2rem]">
                    {capability.name}
                  </span>
                </button>
              )
            })}
          </div>

          <div
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${activeIndex}`}
            className="relative min-h-[26rem] overflow-hidden p-7 sm:p-10 lg:p-14"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.14),transparent_65%)]"
            />
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={active.name}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: stagger.tight } },
                  exit: { opacity: 0, transition: { duration: duration.instant } },
                }}
                className="relative"
              >
                <m.p
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out } } }}
                  className="t-label"
                >
                  {String(activeIndex + 1).padStart(2, '0')} / {String(capabilities.length).padStart(2, '0')}
                </m.p>
                <m.h3
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: duration.slow, ease: ease.expo } } }}
                  className="mt-5 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.02] tracking-[-0.035em] text-[var(--text-primary)]"
                >
                  {active.name}
                </m.h3>
                <m.p
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: duration.slow, ease: ease.out } } }}
                  className="t-lead mt-5 max-w-xl"
                >
                  {active.summary}
                </m.p>
                <ul className="mt-8 grid gap-2.5 sm:grid-cols-3">
                  {active.layers.map((layer, index) => (
                    <m.li
                      key={layer}
                      variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out } } }}
                      className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-4"
                    >
                      <span className="index-num">{`L${index + 1}`}</span>
                      <span className="mt-2 block text-sm font-bold text-[var(--text-primary)]">{layer}</span>
                    </m.li>
                  ))}
                </ul>
                <m.div
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: duration.base } } }}
                  className="mt-10"
                >
                  <Link href={active.href} className="btn-primary">
                    Explore service
                    <span className="sr-only">: {active.name}</span>
                    <ArrowRightIcon />
                  </Link>
                </m.div>
              </m.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
