import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CtaBand from '@/components/ui/CtaBand'
import Spotlight from '@/components/motion/Spotlight'
import { RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { ArrowRightIcon, CheckIcon } from '@/components/icons'
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

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Software, product design, digital growth and IT services in one delivery system."
        highlightLast={3}
        intro={
          <p>
            HAAK supports businesses that need clearer digital products, stronger websites, better customer journeys, and practical technology support.
          </p>
        }
        actions={
          <>
            <Link href="/contact" className="btn-primary btn-lg">
              Start a Project
              <ArrowRightIcon />
            </Link>
            <Link href="/portfolio" className="btn-secondary btn-lg">
              View Work
            </Link>
          </>
        }
        aside={
          <div className="card p-6 sm:p-8">
            <p className="t-label">Service groups</p>
            <ul className="mt-6 grid gap-5">
              {servicePillars.map((pillar, index) => (
                <li key={pillar.title} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-3">
                    <span className="index-num">{String(index + 1).padStart(2, '0')}</span>
                    <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-white">{pillar.title}</h2>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{pillar.description}</p>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <section className="section bg-white" aria-labelledby="capabilities-title">
        <div className="container-x">
          <SectionHeading
            eyebrow="Capabilities"
            title={<span id="capabilities-title">Choose a focused service or combine the capabilities into one joined-up project.</span>}
          />

          <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-2" gap={0.06}>
            {services.map((service, index) => (
              <RevealItem key={service.slug}>
                <Spotlight className="card card-interactive card-elevated group h-full">
                  <article id={service.slug} className="flex h-full flex-col p-7 sm:p-9">
                    <div className="flex items-start justify-between gap-6">
                      <span className="icon-tile">{service.icon}</span>
                      <span className="index-num">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="t-label mt-8 !text-[var(--text-faint)]">{service.pillar}</p>
                    <h3 className="mt-2 font-display text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.03em] text-[var(--text-primary)]">
                      {service.title}
                    </h3>
                    <p className="t-body mt-3">{service.description}</p>

                    <dl className="mt-7 grid gap-3 md:grid-cols-2">
                      <div className="rounded-2xl bg-[var(--bg-soft)] p-5">
                        <dt className="t-label">Problem solved</dt>
                        <dd className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">{service.problem}</dd>
                      </div>
                      <div className="rounded-2xl border border-[var(--line)] p-5">
                        <dt className="t-label">What HAAK delivers</dt>
                        <dd className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">{service.delivers}</dd>
                      </div>
                    </dl>

                    <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${service.shortTitle} highlights`}>
                      {service.highlights.map((item) => (
                        <li key={item} className="chip">
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-8">
                      <Link href={service.href} className="stretched-link link-underline text-sm text-[var(--brand-primary-hover)]">
                        View service
                        <span className="sr-only">: {service.title}</span>
                        <ArrowRightIcon />
                      </Link>
                    </div>
                  </article>
                </Spotlight>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section surface-soft">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeading
              eyebrow="Delivery standards"
              title="Every service should still feel structured, visible and ready for handover."
              className="lg:sticky lg:top-32 lg:self-start"
            />

            <RevealGroup as="ul" className="grid gap-3 sm:grid-cols-2" gap={0.05}>
              {includedWithEveryProject.map((item) => (
                <RevealItem as="li" key={item} className="card card-elevated flex items-start gap-4 p-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)] text-[var(--brand-secondary)]">
                    <CheckIcon />
                  </span>
                  <span className="pt-1 text-[0.95rem] font-semibold leading-snug text-[var(--text-primary)]">{item}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <CtaBand
        className="bg-white"
        eyebrow="Not sure where to start?"
        title="Share the problem. HAAK can help define the right service mix."
        copy="If the need is unclear, describe what is not working today. The first step is to map the digital problem before expanding the scope."
        primary={{ href: '/contact', label: 'Start a Project' }}
        secondary={{ href: '/portfolio', label: 'Review Work' }}
      />
    </>
  )
}
