'use client'

import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'

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

function ArrowIcon() {
  return (
    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  )
}

export default function InteractiveServices() {
  const reduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const active = capabilities[activeIndex]

  return (
    <section id="capabilities" className="capability-system bg-[var(--bg)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="section-kicker">Capabilities</div>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="max-w-4xl font-display text-[clamp(2.35rem,4.4vw,4.8rem)] font-extrabold leading-[0.98] text-[var(--text-primary)]">
            Software capability across product, platform and operations.
          </h2>
          <p className="max-w-2xl text-xl leading-relaxed text-[var(--text-soft)]">
            HAAK combines strategy, interface design, engineering and support so digital work can become a usable system, not a disconnected set of pages.
          </p>
        </div>

        <div className="capability-layout mt-14">
          <div className="capability-index" role="tablist" aria-label="HAAK capabilities">
            {capabilities.map((capability, index) => {
              const selected = activeIndex === index
              return (
                <button
                  key={capability.name}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="capability-panel"
                  onPointerEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`capability-index-item ${selected ? 'is-active' : ''}`}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{capability.name}</strong>
                </button>
              )
            })}
          </div>

          <div id="capability-panel" className="capability-detail" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
              >
                <span className="capability-detail-label">Active capability</span>
                <h3>{active.name}</h3>
                <p>{active.summary}</p>
                <div className="capability-layers">
                  {active.layers.map((layer) => (
                    <span key={layer}>{layer}</span>
                  ))}
                </div>
                <Link href={active.href} className="button-primary group mt-8 w-fit">
                  Explore service
                  <ArrowIcon />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
