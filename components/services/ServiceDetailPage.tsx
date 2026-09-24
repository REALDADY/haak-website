import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import { projects, services } from '@/lib/site-data'
import type { ServiceDetail } from '@/lib/service-details'

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  )
}

export default function ServiceDetailPage({ detail }: { detail: ServiceDetail }) {
  const service = services.find((item) => item.slug === detail.slug)
  const relatedProjects = projects.filter((project) =>
    service ? project.services.some((item) => service.title.includes(item) || item.includes(service.shortTitle.split(' ')[0])) : false
  )

  if (!service) {
    return null
  }

  return (
    <>
      <section className="section-shell bg-[var(--bg-soft)] pb-14 pt-20">
        <div className="mx-auto max-w-7xl">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-primary-hover)]">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All services
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <AnimateIn>
              <div>
                <span className="section-label">{detail.eyebrow}</span>
                <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                  {detail.headline}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
                  {detail.intro}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="button-primary">
                    {detail.primaryCta}
                    <ArrowIcon />
                  </Link>
                  <Link href="/portfolio" className="button-secondary">
                    View relevant work
                  </Link>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.08}>
              <div className="surface-card rounded-[28px] p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--brand-primary-hover)]">
                    {service.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-faint)]">
                      {service.pillar}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-extrabold text-[var(--text-primary)]">
                      {service.title}
                    </h2>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-primary-hover)]">
                    Business problem
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                    {service.problem}
                  </p>
                </div>
                <div className="mt-4 rounded-2xl border border-[var(--line)] bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-primary-hover)]">
                    Delivery focus
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                    {service.delivers}
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <AnimateIn>
            <div>
              <span className="section-label">{detail.capabilitiesTitle}</span>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-5xl">
                What HAAK focuses on when this service leads the project.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--text-soft)]">
                {detail.capabilitiesIntro}
              </p>
            </div>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {detail.capabilities.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 0.05}>
                <div className="surface-card h-full rounded-[22px] p-6">
                  <h3 className="font-display text-2xl font-extrabold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                    {item.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--surface-dark)] text-white">
        <div className="mx-auto max-w-7xl">
          <AnimateIn>
            <div className="mb-10 max-w-3xl">
              <span className="section-label">{detail.processTitle}</span>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                A delivery process built for clarity and QA.
              </h2>
            </div>
          </AnimateIn>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {detail.process.map((item, index) => (
              <AnimateIn key={item.step} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-white/12 bg-white/[0.04] p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-logo-cyan)]">
                    Step {item.step}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/68">
                    {item.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.06fr_0.94fr]">
          <AnimateIn>
            <div className="surface-card rounded-[28px] p-7 sm:p-8">
              <span className="section-label">{detail.deliverablesTitle}</span>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-4xl">
                Typical deliverables for this kind of engagement.
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {detail.deliverables.map((item) => (
                  <div key={item} className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-4 text-sm font-bold text-[var(--text-primary)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          <div className="grid gap-4">
            <AnimateIn>
              <div className="surface-card rounded-[28px] p-7">
                <span className="section-label">{detail.audienceTitle}</span>
                <h2 className="font-display text-3xl font-extrabold leading-tight text-[var(--text-primary)]">
                  Where this service has the most leverage.
                </h2>
              </div>
            </AnimateIn>
            {detail.audiences.map((audience, index) => (
              <AnimateIn key={audience.title} delay={index * 0.05}>
                <div className="surface-card rounded-[22px] p-6">
                  <h3 className="font-display text-2xl font-extrabold text-[var(--text-primary)]">
                    {audience.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                    {audience.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section-shell bg-[var(--bg-soft)]">
          <div className="mx-auto max-w-7xl">
            <AnimateIn>
              <div className="mb-10 max-w-3xl">
                <span className="section-label">Related work</span>
                <h2 className="font-display text-3xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-4xl">
                  Project examples connected to this service.
                </h2>
              </div>
            </AnimateIn>
            <div className="grid gap-4 lg:grid-cols-3">
              {relatedProjects.slice(0, 3).map((project) => (
                <Link key={project.slug} href={project.href} className="surface-card rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-primary-hover)]">
                    {project.industry}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-extrabold text-[var(--text-primary)]">
                    {project.client}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                    {project.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-shell">
        <div className="mx-auto max-w-5xl rounded-[30px] bg-[var(--surface-dark)] px-6 py-10 text-center text-white sm:px-10 sm:py-14">
          <span className="section-label">Next step</span>
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            {detail.closingHeadline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/72">
            {detail.closingCopy}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="button-primary">
              {detail.closingPrimaryCta}
              <ArrowIcon />
            </Link>
            <Link href="/services" className="button-secondary">
              Compare services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
