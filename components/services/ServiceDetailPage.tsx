import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CtaBand from '@/components/ui/CtaBand'
import Spotlight from '@/components/motion/Spotlight'
import ProjectCard from '@/components/work/ProjectCard'
import ProcessTimeline from '@/components/services/ProcessTimeline'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from '@/components/icons'
import { projects, services } from '@/lib/site-data'
import type { ServiceDetail } from '@/lib/service-details'

export default function ServiceDetailPage({ detail }: { detail: ServiceDetail }) {
  const service = services.find((item) => item.slug === detail.slug)
  const relatedProjects = projects.filter((project) =>
    service ? project.services.some((item) => service.title.includes(item) || item.includes(service.shortTitle.split(' ')[0])) : false
  )

  if (!service) {
    return null
  }

  const otherServices = services.filter((item) => item.slug !== service.slug)

  return (
    <>
      <PageHero
        before={
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/services" className="group inline-flex min-h-11 items-center gap-2 font-semibold text-white/80 transition-colors hover:text-white">
                  <ArrowLeftIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  All services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/60">
                {service.shortTitle}
              </li>
            </ol>
          </nav>
        }
        eyebrow={detail.eyebrow}
        title={detail.headline}
        highlightLast={2}
        intro={<p>{detail.intro}</p>}
        actions={
          <>
            <Link href="/contact" className="btn-primary btn-lg">
              {detail.primaryCta}
              <ArrowRightIcon />
            </Link>
            <Link href="/portfolio" className="btn-secondary btn-lg">
              View relevant work
            </Link>
          </>
        }
        aside={
          <div className="card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="icon-tile">{service.icon}</span>
              <div>
                <p className="t-label !text-white/60">{service.pillar}</p>
                <h2 className="mt-1.5 font-display text-xl font-bold leading-tight tracking-[-0.02em] text-white">{service.title}</h2>
              </div>
            </div>
            <dl className="mt-7 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <dt className="t-label">Business problem</dt>
                <dd className="mt-2 text-sm leading-relaxed text-white/70">{service.problem}</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <dt className="t-label">Delivery focus</dt>
                <dd className="mt-2 text-sm leading-relaxed text-white/70">{service.delivers}</dd>
              </div>
            </dl>
          </div>
        }
      >
        <p className="max-w-xl text-sm leading-relaxed text-white/70">{detail.bestFor}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Focus areas">
          {detail.heroTags.map((tag) => (
            <li key={tag} className="chip text-white/80">
              {tag}
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              eyebrow={detail.capabilitiesTitle}
              title="What HAAK focuses on when this service leads the project."
              intro={detail.capabilitiesIntro}
              className="lg:sticky lg:top-32 lg:self-start"
            />

            <RevealGroup className="grid gap-4 sm:grid-cols-2">
              {detail.capabilities.map((item, index) => (
                <RevealItem key={item.title}>
                  <Spotlight className="card card-interactive card-elevated h-full p-7">
                    <span className="index-num">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="t-h3 mt-6">{item.title}</h3>
                    <p className="t-body mt-3">{item.description}</p>
                  </Spotlight>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="theme-dark noise section relative overflow-hidden">
        <div className="hairline-top" aria-hidden="true" />
        <div aria-hidden="true" className="glow-orb glow-cyan -left-40 -top-20 h-[32rem] w-[32rem] opacity-60" />
        <div className="container-x relative z-[1]">
          <SectionHeading eyebrow={detail.processTitle} title="A delivery process built for clarity and QA." />
          <ProcessTimeline steps={detail.process} />
        </div>
      </section>

      <section className="section surface-soft">
        <div className="container-x grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="card card-elevated p-7 sm:p-10">
            <p className="eyebrow">{detail.deliverablesTitle}</p>
            <h2 className="mt-5 max-w-[18ch] font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-[-0.03em] text-[var(--text-primary)]">
              Typical deliverables for this kind of engagement.
            </h2>
            <RevealGroup as="ul" className="mt-8 grid gap-x-6 sm:grid-cols-2" gap={0.04}>
              {detail.deliverables.map((item) => (
                <RevealItem as="li" key={item} className="flex items-start gap-3 border-t border-[var(--line)] py-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)] text-[var(--brand-secondary)]">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[0.95rem] font-semibold leading-snug text-[var(--text-primary)]">{item}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>

          <div className="grid content-start gap-4">
            <Reveal className="px-1 pb-2 pt-4 lg:pt-10">
              <p className="eyebrow">{detail.audienceTitle}</p>
              <h2 className="mt-5 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-[-0.03em] text-[var(--text-primary)]">
                Where this service has the most leverage.
              </h2>
            </Reveal>
            <RevealGroup as="ul" className="grid gap-4">
              {detail.audiences.map((audience) => (
                <RevealItem as="li" key={audience.title}>
                  <div className="card card-interactive card-elevated p-7">
                    <h3 className="t-h3">{audience.title}</h3>
                    <p className="t-body mt-2">{audience.description}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section bg-white">
          <div className="container-x">
            <SectionHeading align="split" eyebrow="Related work" title="Project examples connected to this service." />
            <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {relatedProjects.slice(0, 3).map((project) => (
                <RevealItem key={project.slug}>
                  <ProjectCard project={project} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <CtaBand
        className={relatedProjects.length > 0 ? 'surface-soft' : 'bg-white'}
        eyebrow="Next step"
        title={detail.closingHeadline}
        copy={detail.closingCopy}
        primary={{ href: '/contact', label: detail.closingPrimaryCta }}
        secondary={{ href: '/services', label: 'Compare services' }}
      />

      <nav aria-label="Other services" className="border-t border-[var(--line)] bg-white">
        <div className="container-x py-10">
          <p className="t-label">Other services</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {otherServices.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.href}
                  className="chip min-h-10 transition-colors hover:border-[var(--line-strong)] hover:text-[var(--text-primary)]"
                >
                  {item.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
