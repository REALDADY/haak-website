import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
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

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  )
}

export default function AboutPage() {
  return (
    <>
      <section className="section-shell bg-[var(--bg-soft)] pb-14 pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <AnimateIn>
              <div>
                <span className="section-label">About HAAK</span>
                <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                  A Dubai-based digital technology partner for clearer products, websites and growth systems.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
                  HAAK Solutions helps businesses translate ideas, services, and operational needs into digital experiences people can understand, use, and trust.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="button-primary">
                    Talk to HAAK
                    <ArrowIcon />
                  </Link>
                  <Link href="/services" className="button-secondary">
                    Explore services
                  </Link>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.08}>
              <div className="surface-card rounded-[28px] p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-primary-hover)]">
                  Working approach
                </p>
                <div className="mt-5 grid gap-4">
                  {aboutNarrative.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] p-5">
                      <h2 className="font-display text-xl font-extrabold text-[var(--text-primary)]">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                        {item.description}
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
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <AnimateIn>
            <div>
              <span className="section-label">What HAAK brings together</span>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-5xl">
                Strategy, design, engineering, growth and technical support connected in one delivery conversation.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--text-soft)]">
                Digital work gets stronger when the business goal, user experience, content structure, technical implementation, and support path stay aligned.
              </p>
            </div>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {disciplineLeads.map((item, index) => (
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
              <span className="section-label">Why HAAK</span>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                Built for teams that need clear recommendations and practical delivery.
              </h2>
            </div>
          </AnimateIn>
          <div className="grid gap-4 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-white/12 bg-white/[0.04] p-6">
                  <h3 className="font-display text-2xl font-extrabold text-white">
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

      <section className="section-shell bg-[var(--bg-soft)]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <AnimateIn>
            <div>
              <span className="section-label">Best fit</span>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-5xl">
                HAAK is a strong fit when the digital layer needs to catch up with the business.
              </h2>
            </div>
          </AnimateIn>

          <div className="grid gap-4">
            {clientFit.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 0.05}>
                <div className="surface-card rounded-[22px] p-6">
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

      <section className="section-shell">
        <div className="mx-auto max-w-5xl rounded-[30px] bg-[var(--surface-dark)] px-6 py-10 text-center text-white sm:px-10 sm:py-14">
          <span className="section-label">Discuss the next build</span>
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            If the business is ready for a better digital system, start with a conversation.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/72">
            Share the current challenge, the service or product you need to improve, and what the next version should help people do.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Start a Project
              <ArrowIcon />
            </Link>
            <Link href="/portfolio" className="button-secondary">
              View Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
