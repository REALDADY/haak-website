import SectionHeading from '@/components/ui/SectionHeading'
import Spotlight from '@/components/motion/Spotlight'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'

const systemParts = [
  {
    title: 'APIs and integrations',
    copy: 'Connect forms, stores, content, operations and reporting paths where the project requires it.',
    icon: 'M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5',
  },
  {
    title: 'Secure authentication',
    copy: 'Plan access, roles and account journeys for platforms that need user or admin control.',
    icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
  },
  {
    title: 'Admin platforms',
    copy: 'Create practical interfaces for teams managing products, requests, content or customer data.',
    icon: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z',
  },
  {
    title: 'Mobile experiences',
    copy: 'Design responsive and mobile-first journeys that fit the way customers actually interact.',
    icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
  },
  {
    title: 'Business automation',
    copy: 'Reduce repeated manual work by mapping clearer flows between people, tools and data.',
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
  },
  {
    title: 'Scalable infrastructure',
    copy: 'Prepare hosting, deployment, support and technical operations around realistic business needs.',
    icon: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z',
  },
]

// Asymmetric bento rhythm on large screens.
const spans = ['lg:col-span-2', '', '', '', '', 'lg:col-span-2']

export default function WhyHaak() {
  return (
    <section className="theme-dark noise section relative overflow-hidden">
      <div className="hairline-top" aria-hidden="true" />
      <div aria-hidden="true" className="glow-orb glow-cyan -right-40 top-0 h-[36rem] w-[36rem] opacity-50" />
      <div className="container-x relative z-[1]">
        <SectionHeading
          align="split"
          eyebrow="Technology and integrations"
          title="Beyond pages: the systems behind modern digital products."
          intro="HAAK can support the software layer behind public websites, customer journeys and internal business operations."
        />

        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-gradient-to-r from-[#0077b6]/25 via-[#00b4d8]/5 to-transparent p-7 sm:p-9">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="t-label">HAAK software layer</p>
                <p className="mt-3 font-display text-[clamp(1.5rem,3vw,2.4rem)] font-bold leading-tight tracking-[-0.03em] text-white">
                  Plan, design, build, connect and improve.
                </p>
              </div>
              <ol className="flex flex-wrap gap-2" aria-hidden="true">
                {['Plan', 'Design', 'Build', 'Connect', 'Improve'].map((step) => (
                  <li key={step} className="chip border-white/15 text-white/80">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        <RevealGroup className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {systemParts.map((part, index) => (
            <RevealItem key={part.title} className={spans[index]}>
              <Spotlight className="card card-interactive h-full p-7">
                <article className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <span className="icon-tile">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d={part.icon} />
                      </svg>
                    </span>
                    <span className="index-num">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="t-h3 mt-8">{part.title}</h3>
                  <p className="t-body mt-3 max-w-md">{part.copy}</p>
                </article>
              </Spotlight>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
