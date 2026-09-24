'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import AnimateIn from '@/components/AnimateIn'
import { projects } from '@/lib/site-data'

const baseFilters = ['All']

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  )
}

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState('All')
  const reduceMotion = useReducedMotion()

  const filters = useMemo(() => {
    const unique = new Set<string>()
    projects.forEach((project) => {
      project.services.forEach((service) => unique.add(service))
    })
    return [...baseFilters, ...Array.from(unique)]
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.services.includes(activeFilter))
  }, [activeFilter])

  return (
    <>
      <section className="section-shell bg-[var(--bg-soft)] pb-14 pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.88fr] lg:items-end">
            <AnimateIn>
              <div>
                <span className="section-label">Work</span>
                <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                  Websites, storefronts and digital interfaces from HAAK project work.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
                  Browse real project names, screenshots, service categories, and delivery notes. Outcomes focus on visible scope and delivered systems.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.08}>
              <div className="surface-card rounded-[28px] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-primary-hover)]">
                  Project library
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                  The current portfolio includes available screenshots for landscaping/e-commerce, water ordering, and consumer-brand web presentation.
                </p>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                    activeFilter === filter
                      ? 'border-[var(--brand-primary-hover)] bg-[var(--brand-primary-hover)] text-white'
                      : 'border-[var(--line)] bg-white text-[var(--text-soft)] hover:border-[var(--line-strong)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-7xl">
          {filteredProjects.length === 0 ? (
            <div className="surface-card rounded-[28px] p-10 text-center">
              <p className="text-[var(--text-soft)]">No projects match that filter.</p>
            </div>
          ) : (
            <motion.div layout className="space-y-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.article
                    key={project.client}
                    layout
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.28, delay: index * 0.03 }}
                    className="surface-card project-story overflow-hidden rounded-[30px]"
                  >
                    <div className="grid gap-0 xl:grid-cols-[1.05fr_0.95fr]">
                      <Link
                        href={project.href}
                        aria-label={`View ${project.client} project`}
                        className="project-media-mask relative min-h-[320px] overflow-hidden bg-[var(--bg-soft)] sm:min-h-[430px] xl:min-h-full"
                      >
                        <motion.div whileHover={reduceMotion ? undefined : { scale: 1.025 }} transition={{ duration: 0.45 }} className="absolute inset-0">
                          <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1279px) 100vw, 52vw"
                          />
                        </motion.div>
                      </Link>

                      <div className="p-6 sm:p-8 lg:p-10">
                        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand-primary-hover)]">
                          {project.industry}
                        </p>
                        <h2 className="mt-3 font-display text-3xl font-extrabold text-[var(--text-primary)]">
                          {project.client}
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-[var(--text-soft)]">
                          {project.summary}
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                          <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] p-5">
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-primary-hover)]">
                              Challenge
                            </p>
                            <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                              {project.challenge}
                            </p>
                          </div>
                          <div className="rounded-2xl border border-[var(--line)] bg-white p-5">
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-primary-hover)]">
                              HAAK role
                            </p>
                            <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                              {project.role}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.services.map((service) => (
                            <span key={service} className="rounded-full border border-[var(--line)] bg-[var(--bg-soft)] px-3 py-1.5 text-xs font-bold text-[var(--text-soft)]">
                              {service}
                            </span>
                          ))}
                        </div>

                        <Link href={project.href} className="button-primary mt-8">
                          View project
                          <ArrowIcon />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      <section className="section-shell bg-[var(--bg-soft)]">
        <div className="mx-auto max-w-5xl rounded-[30px] bg-[var(--surface-dark)] px-6 py-10 text-center text-white sm:px-10 sm:py-14">
          <span className="section-label">Build the next project</span>
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Need a website, application, storefront or platform with a clearer user journey?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/72">
            Share the current product or website challenge and HAAK can help define the practical next step.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Start a Project
              <ArrowIcon />
            </Link>
            <Link href="/services" className="button-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
