import CountUp from '@/components/motion/CountUp'
import ScrollWords from '@/components/motion/ScrollWords'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { servicePillars, services, workflow } from '@/lib/site-data'

const principles = [
  {
    title: 'Model the business first',
    copy: 'The project starts with how enquiries, operations, teams and customers actually move through the business.',
  },
  {
    title: 'Design the system, not only screens',
    copy: 'UX, content, interface states and technical handoff are treated as one product layer.',
  },
  {
    title: 'Build for launch and after launch',
    copy: 'Responsive implementation, search foundations, QA and support planning are included in the delivery conversation.',
  },
]

// Counts derived from existing site content so they never drift from the real offer.
const facts = [
  { value: services.length, label: 'Service disciplines under one delivery team' },
  { value: servicePillars.length, label: 'Pillars: products, growth and operations' },
  { value: workflow.length, label: 'Stages from discovery to improvement' },
]

export default function CapabilityScene() {
  return (
    <section id="solutions" className="theme-dark noise section relative overflow-hidden">
      <div className="hairline-top" aria-hidden="true" />
      <div aria-hidden="true" className="glow-orb glow-cyan -left-60 top-1/3 h-[40rem] w-[40rem] opacity-60" />

      <div className="container-x relative z-[1]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">Solutions</p>
            <h2 className="t-h2 mt-5 max-w-[14ch] text-balance">
              HAAK turns business requirements into useful digital systems.
            </h2>
          </Reveal>

          <div>
            <ScrollWords
              className="font-display text-[clamp(1.45rem,2.5vw,2.2rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-white"
              text="A stronger website or application is rarely just a visual layer. It needs the right structure, journeys, content, engineering decisions and support path."
            />
            <Reveal delay={0.05}>
              <p className="t-lead mt-8 max-w-2xl">
                HAAK’s role is to connect those decisions so the result can be used by real customers, teams and operators.
              </p>
            </Reveal>

            <RevealGroup as="ol" className="mt-14 border-t border-white/10">
              {principles.map((principle, index) => (
                <RevealItem
                  as="li"
                  key={principle.title}
                  className="group grid gap-3 border-b border-white/10 py-7 sm:grid-cols-[4rem_1fr] sm:gap-6"
                >
                  <span className="index-num pt-1.5">{String(index + 1).padStart(2, '0')}</span>
                  <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
                    <h3 className="t-h3 transition-colors duration-300 group-hover:text-[var(--brand-logo-cyan)]">
                      {principle.title}
                    </h3>
                    <p className="t-body">{principle.copy}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>

        <RevealGroup as="dl" className="mt-20 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-white/10 sm:grid-cols-3">
          {facts.map((fact) => (
            <RevealItem key={fact.label} className="bg-[var(--surface-dark)] p-7 sm:p-8">
              <dt className="sr-only">{fact.label}</dt>
              <dd className="font-display text-[clamp(3rem,6vw,4.75rem)] font-bold leading-none tracking-[-0.05em] text-white">
                <CountUp value={fact.value} />
              </dd>
              <dd className="mt-3 max-w-[16rem] text-sm leading-relaxed text-white/70">{fact.label}</dd>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
