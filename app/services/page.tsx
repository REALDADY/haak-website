import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import {
  companyInfo,
  includedWithEveryProject,
  servicePillars,
  services,
} from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Services - Software, Web, UI/UX, SEO, Marketing and IT Dubai',
  description:
    'Explore HAAK Solutions services across web and software development, mobile apps, UI/UX, SEO, digital marketing, growth strategy, and IT solutions.',
  alternates: { canonical: `${companyInfo.siteUrl}/services` },
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  )
}

export default function ServicesPage() {
  return (
    <>
      <section className="section-shell bg-[var(--bg-soft)] pb-14 pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-end">
            <AnimateIn>
              <div>
                <span className="section-label">Services</span>
                <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                  Software, product design, digital growth and IT services in one delivery system.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
                  HAAK supports businesses that need clearer digital products, stronger websites, better customer journeys, and practical technology support.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="button-primary">
                    Start a Project
                    <ArrowIcon />
                  </Link>
                  <Link href="/portfolio" className="button-secondary">
                    View Work
                  </Link>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.08}>
              <div className="surface-panel rounded-[28px] p-6 text-white sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-logo-cyan)]">
                  Service groups
                </p>
                <div className="mt-5 grid gap-4">
                  {servicePillars.map((pillar) => (
                    <div key={pillar.title} className="rounded-2xl border border-white/12 bg-white/[0.04] p-5">
                      <h2 className="font-display text-2xl font-extrabold text-white">
                        {pillar.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-white/70">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-7xl">
          <AnimateIn>
            <div className="mb-12 max-w-3xl">
              <span className="section-label">Capabilities</span>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-5xl">
                Choose a focused service or combine the capabilities into one joined-up project.
              </h2>
            </div>
          </AnimateIn>

          <div className="grid gap-5 xl:grid-cols-2">
            {services.map((service, index) => (
              <AnimateIn key={service.slug} delay={index * 0.04}>
                <article id={service.slug} className="surface-card flex h-full flex-col rounded-[26px] p-6 sm:p-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--brand-primary-hover)]">
                        {service.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-faint)]">
                          {service.pillar}
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-extrabold text-[var(--text-primary)]">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <Link href={service.href} className="button-secondary shrink-0">
                      View service
                      <ArrowIcon />
                    </Link>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-primary-hover)]">
                        Problem solved
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                        {service.problem}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[var(--line)] bg-white p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-primary-hover)]">
                        What HAAK delivers
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                        {service.delivers}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.highlights.map((item) => (
                      <span key={item} className="rounded-full border border-[var(--line)] bg-[var(--bg-soft)] px-3 py-1.5 text-xs font-bold text-[var(--text-soft)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--bg-soft)]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimateIn>
            <div>
              <span className="section-label">Delivery standards</span>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-5xl">
                Every service should still feel structured, visible and ready for handover.
              </h2>
            </div>
          </AnimateIn>

          <div className="grid gap-3 sm:grid-cols-2">
            {includedWithEveryProject.map((item, index) => (
              <AnimateIn key={item} delay={index * 0.04}>
                <div className="surface-card rounded-2xl p-5 text-sm font-bold leading-relaxed text-[var(--text-primary)]">
                  {item}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-5xl rounded-[30px] bg-[var(--surface-dark)] px-6 py-10 text-center text-white sm:px-10 sm:py-14">
          <span className="section-label">Not sure where to start?</span>
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Share the problem. HAAK can help define the right service mix.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/72">
            If the need is unclear, describe what is not working today. The first step is to map the digital problem before expanding the scope.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Start a Project
              <ArrowIcon />
            </Link>
            <Link href="/portfolio" className="button-secondary">
              Review Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
