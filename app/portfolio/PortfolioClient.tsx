'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, LayoutGroup, m } from 'framer-motion'
import PageHero from '@/components/ui/PageHero'
import CtaBand from '@/components/ui/CtaBand'
import { ArrowRightIcon, ArrowUpRightIcon } from '@/components/icons'
import { duration, ease, spring } from '@/lib/motion'
import { projects } from '@/lib/site-data'

const baseFilters = ['All']

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState('All')

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
      <PageHero
        eyebrow="Work"
        title="Websites, storefronts and digital interfaces from HAAK project work."
        highlightLast={4}
        intro={
          <p>
            Browse real project names, screenshots, service categories, and delivery notes. Outcomes focus on visible scope and delivered systems.
          </p>
        }
        aside={
          <div className="card p-6 sm:p-8">
            <p className="t-label">Project library</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-white/70">
              The current portfolio includes available screenshots for landscaping/e-commerce, water ordering, and consumer-brand web presentation.
            </p>
            <ul className="mt-6 grid gap-2 border-t border-white/10 pt-6">
              {projects.map((project, index) => (
                <li key={project.slug} className="flex items-baseline justify-between gap-4 text-sm">
                  <span className="flex items-baseline gap-3 font-semibold text-white">
                    <span className="index-num">{String(index + 1).padStart(2, '0')}</span>
                    {project.client}
                  </span>
                  <span className="text-right text-white/60">{project.industry}</span>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <section className="section surface-soft !pt-12 sm:!pt-16" aria-label="Projects">
        <div className="container-x">
          <LayoutGroup>
            <div
              role="group"
              aria-label="Filter projects by service"
              className="flex flex-wrap items-center gap-2 rounded-full sm:inline-flex sm:border sm:border-[var(--line)] sm:bg-white sm:p-1.5 sm:shadow-[var(--shadow-sm)]"
            >
              {filters.map((filter) => {
                const selected = activeFilter === filter
                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveFilter(filter)}
                    className={`relative z-0 min-h-11 rounded-full border px-5 text-sm font-bold transition-colors duration-300 sm:border-transparent ${
                      selected
                        ? 'border-[var(--brand-secondary)] text-white'
                        : 'border-[var(--line)] bg-white text-[var(--text-soft)] hover:text-[var(--text-primary)] sm:bg-transparent'
                    }`}
                  >
                    {selected && (
                      <m.span
                        layoutId="portfolio-filter-pill"
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 rounded-full bg-[var(--brand-secondary)]"
                        transition={spring.snappy}
                      />
                    )}
                    {filter}
                  </button>
                )
              })}
            </div>
          </LayoutGroup>
          <p className="sr-only" aria-live="polite">
            {`${filteredProjects.length} ${filteredProjects.length === 1 ? 'project' : 'projects'} shown`}
          </p>

          <m.ul layout className="mt-10 grid gap-6">
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredProjects.map((project, index) => (
                <m.li
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, transition: { duration: duration.fast } }}
                  transition={{ duration: duration.slow, ease: ease.out, delay: index * 0.04 }}
                >
                  <article className="card card-interactive group overflow-hidden bg-white shadow-[var(--shadow-sm)]">
                    <div className={`grid lg:grid-cols-[1.15fr_1fr] ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                      <Link
                        href={project.href}
                        tabIndex={-1}
                        className="relative block overflow-hidden bg-[var(--bg-soft)] p-4 sm:p-6 lg:p-8"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,180,216,0.16),transparent_60%)]" />
                        <div className="browser-frame relative">
                          <div className="browser-bar">
                            <i />
                            <i />
                            <i />
                          </div>
                          <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.imageAlt}
                              fill
                              quality={90}
                              priority={index === 0}
                              className="object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                              sizes="(max-width: 1024px) 100vw, 680px"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,8,20,0)] transition-colors duration-500 group-hover:bg-[rgba(0,8,20,0.3)]">
                              <span aria-hidden="true" className="flex translate-y-3 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--brand-secondary)] opacity-0 shadow-lg transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                                View case study
                                <ArrowUpRightIcon className="h-4 w-4" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>

                      <div className="flex flex-col p-7 sm:p-10">
                        <div className="flex items-center justify-between gap-4">
                          <p className="t-label">{project.industry}</p>
                          <span className="index-num text-[var(--text-faint)]">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <h2 className="mt-3 font-display text-[clamp(1.9rem,3.2vw,2.75rem)] font-bold leading-[1.05] tracking-[-0.035em] text-[var(--text-primary)]">
                          {project.client}
                        </h2>
                        <p className="t-body mt-4">{project.summary}</p>

                        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-2xl bg-[var(--bg-soft)] p-5">
                            <dt className="t-label">Challenge</dt>
                            <dd className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">{project.challenge}</dd>
                          </div>
                          <div className="rounded-2xl border border-[var(--line)] p-5">
                            <dt className="t-label">HAAK role</dt>
                            <dd className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">{project.role}</dd>
                          </div>
                        </dl>

                        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Services">
                          {project.services.map((service) => (
                            <li key={service} className="chip">
                              {service}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
                          <Link href={project.href} className="btn-primary">
                            View project
                            <span className="sr-only">: {project.client}</span>
                            <ArrowRightIcon />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </m.li>
              ))}
            </AnimatePresence>
          </m.ul>

          {filteredProjects.length === 0 && (
            <div className="card mt-10 p-10 text-center">
              <p className="text-[var(--text-soft)]">No projects match that filter.</p>
            </div>
          )}
        </div>
      </section>

      <CtaBand
        className="bg-white"
        eyebrow="Build the next project"
        title="Need a website, application, storefront or platform with a clearer user journey?"
        copy="Share the current product or website challenge and HAAK can help define the practical next step."
        primary={{ href: '/contact', label: 'Start a Project' }}
        secondary={{ href: '/services', label: 'Explore Services' }}
      />
    </>
  )
}
