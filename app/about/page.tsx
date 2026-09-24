import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CtaBand from '@/components/ui/CtaBand'
import Spotlight from '@/components/motion/Spotlight'
import { RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { ArrowRightIcon } from '@/components/icons'
import {
  aboutNarrative,
  clientFit,
  companyInfo,
  differentiators,
  disciplineLeads,
} from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About HAAK Solutions - Dubai Software and Digital Technology Company',
  description:
    'Learn how HAAK Solutions helps businesses plan, design, build, and improve websites, software interfaces, apps, SEO foundations, and digital technology systems.',
  alternates: { canonical: `${companyInfo.siteUrl}/about` },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About HAAK"
        title="A Dubai-based digital technology partner for clearer products, websites and growth systems."
        highlightLast={3}
        intro={
          <p>
            HAAK Solutions helps businesses translate ideas, services, and operational needs into digital experiences people can understand, use, and trust.
          </p>
        }
        actions={
          <>
            <Link href="/contact" className="btn-primary btn-lg">
              Talk to HAAK
              <ArrowRightIcon />
            </Link>
            <Link href="/services" className="btn-secondary btn-lg">
              Explore services
            </Link>
          </>
        }
        aside={
          <div className="card p-6 backdrop-blur-sm sm:p-8">
            <p className="t-label">Working approach</p>
            <ol className="mt-6 grid gap-6">
              {aboutNarrative.map((item, index) => (
                <li key={item.title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-white/10 pt-6 first:border-t-0 first:pt-0">
                  <span className="index-num pt-1">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-white">{item.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        }
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              eyebrow="What HAAK brings together"
              title="Strategy, design, engineering, growth and technical support connected in one delivery conversation."
              intro="Digital work gets stronger when the business goal, user experience, content structure, technical implementation, and support path stay aligned."
              className="lg:sticky lg:top-32 lg:self-start"
            />

            <RevealGroup className="grid gap-4 sm:grid-cols-2">
              {disciplineLeads.map((item, index) => (
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
        <div aria-hidden="true" className="glow-orb glow-cyan -right-40 top-10 h-[34rem] w-[34rem] opacity-60" />
        <div className="container-x relative z-[1]">
          <SectionHeading
            eyebrow="Why HAAK"
            title="Built for teams that need clear recommendations and practical delivery."
          />
          <RevealGroup className="mt-14 grid gap-4 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <RevealItem key={item.title}>
                <Spotlight className="card card-interactive h-full p-8">
                  <span className="font-display text-5xl font-bold tracking-[-0.05em] text-white/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="t-h3 mt-8">{item.title}</h3>
                  <p className="t-body mt-3">{item.description}</p>
                </Spotlight>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section surface-soft">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              eyebrow="Best fit"
              title="HAAK is a strong fit when the digital layer needs to catch up with the business."
              className="lg:sticky lg:top-32 lg:self-start"
            />

            <RevealGroup as="ul" className="grid gap-4">
              {clientFit.map((item) => (
                <RevealItem as="li" key={item.title}>
                  <div className="card card-interactive card-elevated flex gap-5 p-7">
                    <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--brand-accent)] shadow-[0_0_0_5px_rgba(255,214,10,0.18)]" />
                    <div>
                      <h3 className="t-h3">{item.title}</h3>
                      <p className="t-body mt-2">{item.description}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <CtaBand
        className="bg-white"
        eyebrow="Discuss the next build"
        title="If the business is ready for a better digital system, start with a conversation."
        copy="Share the current challenge, the service or product you need to improve, and what the next version should help people do."
        primary={{ href: '/contact', label: 'Start a Project' }}
        secondary={{ href: '/portfolio', label: 'View Work' }}
      />
    </>
  )
}
