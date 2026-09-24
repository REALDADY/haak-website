import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CtaBand from '@/components/ui/CtaBand'
import ContactForm from '@/components/ContactForm'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { ArrowUpRightIcon, CheckIcon, MailIcon, WhatsAppIcon } from '@/components/icons'
import { companyInfo, contactPromises, whatsappLinks } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact HAAK Solutions - Start a Project',
  description:
    'Contact HAAK Solutions in Dubai to discuss a website, software, mobile app, UI/UX, SEO, digital marketing, or IT solutions project.',
  alternates: { canonical: `${companyInfo.siteUrl}/contact` },
}

const responseSteps = [
  'HAAK reviews the project context, current digital assets, and the business problem.',
  'The team recommends the strongest next step or service mix for the situation.',
  'You receive a practical scope direction, timeline discussion, and next actions.',
]

const channels = [
  {
    label: 'Email',
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    note: 'Best for detailed requirements, reference links, and scope notes.',
    icon: <MailIcon />,
    external: false,
  },
  {
    label: 'WhatsApp',
    value: companyInfo.whatsappDisplay,
    href: whatsappLinks.project,
    note: 'Best for a quick first conversation.',
    icon: <WhatsAppIcon />,
    external: true,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Start a project"
        title="Tell HAAK what you want to build, improve, or clarify."
        highlightLast={3}
        intro={
          <p>
            Use the form for websites, applications, mobile apps, UI/UX, SEO, marketing, growth strategy, or IT support enquiries.
          </p>
        }
      >
        <ul className="grid gap-3 sm:grid-cols-3 lg:max-w-4xl">
          {contactPromises.map((promise) => (
            <li key={promise} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-white/80">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)] text-[var(--brand-secondary)]">
                <CheckIcon className="h-3 w-3" />
              </span>
              {promise}
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="section surface-soft !pt-12 sm:!pt-16">
        <div className="container-x grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="grid content-start gap-4">
            {channels.map((channel, index) => (
              <Reveal key={channel.label} delay={index * 0.06}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="card card-interactive card-elevated group flex items-start gap-5 p-6 sm:p-7"
                >
                  <span className="icon-tile">{channel.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="t-label block">{channel.label}</span>
                    <span className="mt-2 block break-words font-display text-lg font-bold tracking-[-0.02em] text-[var(--text-primary)] sm:text-xl">
                      {channel.value}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-[var(--text-soft)]">{channel.note}</span>
                  </span>
                  <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-[var(--text-faint)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--brand-primary-hover)]" />
                  {channel.external && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.12} className="card p-6 sm:p-7">
              <p className="t-label">Location</p>
              <p className="mt-2 font-display text-lg font-bold tracking-[-0.02em] text-[var(--text-primary)]">{companyInfo.location}</p>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <div className="card relative overflow-hidden p-6 shadow-[var(--shadow-lg)] sm:p-10">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-logo-cyan)] to-[var(--brand-accent)]" />
              <div className="mb-8">
                <p className="eyebrow">Project enquiry</p>
                <h2 className="mt-4 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.03em] text-[var(--text-primary)]">
                  Share the project details
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                  If the form service is not configured, the submission opens a prepared email draft using HAAK&apos;s contact email.
                </p>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            align="split"
            eyebrow="What happens next"
            title="The first step is designed to make the problem clearer."
            intro="HAAK starts by understanding the goal and current constraints before recommending a build, redesign, or growth path."
          />
          <RevealGroup as="ol" className="mt-14 grid gap-4 md:grid-cols-3">
            {responseSteps.map((step, index) => (
              <RevealItem as="li" key={step} className="card card-elevated relative overflow-hidden p-7">
                <span className="font-display text-5xl font-bold tracking-[-0.05em] text-[var(--line-strong)]">
                  {`0${index + 1}`}
                </span>
                <p className="t-body mt-6 text-[var(--text-primary)]">{step}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand
        className="surface-soft"
        eyebrow="Browse first"
        title="Explore HAAK's services and project examples before reaching out."
        copy="The services and work pages show how HAAK structures product, web, growth, and technology support projects."
        primary={{ href: '/services', label: 'View Services' }}
        secondary={{ href: '/portfolio', label: 'View Work' }}
      />
    </>
  )
}
