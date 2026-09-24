import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import ContactForm from '@/components/ContactForm'
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

export default function ContactPage() {
  return (
    <>
      <section className="section-shell bg-[var(--bg-soft)] pb-14 pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <AnimateIn>
              <div>
                <span className="section-label">Start a project</span>
                <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                  Tell HAAK what you want to build, improve, or clarify.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
                  Use the form for websites, applications, mobile apps, UI/UX, SEO, marketing, growth strategy, or IT support enquiries.
                </p>

                <div className="mt-8 grid gap-3">
                  {contactPromises.map((promise) => (
                    <div key={promise} className="surface-card flex items-center gap-3 rounded-2xl px-4 py-4 text-sm font-bold text-[var(--text-primary)]">
                      <span className="h-2 w-2 rounded-full bg-[var(--brand-primary)]" />
                      {promise}
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <a href={`mailto:${companyInfo.email}`} className="surface-card rounded-[22px] p-5 transition hover:-translate-y-1">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-primary-hover)]">Email</p>
                    <p className="mt-3 font-display text-xl font-extrabold text-[var(--text-primary)]">{companyInfo.email}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">
                      Best for detailed requirements, reference links, and scope notes.
                    </p>
                  </a>
                  <a href={whatsappLinks.project} target="_blank" rel="noopener noreferrer" className="surface-card rounded-[22px] p-5 transition hover:-translate-y-1">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-primary-hover)]">WhatsApp</p>
                    <p className="mt-3 font-display text-xl font-extrabold text-[var(--text-primary)]">{companyInfo.whatsappDisplay}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">
                      Best for a quick first conversation.
                    </p>
                  </a>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.08}>
              <div className="surface-card rounded-[28px] p-6 sm:p-8">
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-primary-hover)]">
                    Project enquiry
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-extrabold text-[var(--text-primary)] sm:text-3xl">
                    Share the project details
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                    If the form service is not configured, the submission opens a prepared email draft using HAAK&apos;s contact email.
                  </p>
                </div>
                <ContactForm />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimateIn>
            <div>
              <span className="section-label">What happens next</span>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-5xl">
                The first step is designed to make the problem clearer.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--text-soft)]">
                HAAK starts by understanding the goal and current constraints before recommending a build, redesign, or growth path.
              </p>
            </div>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-3">
            {responseSteps.map((step, index) => (
              <AnimateIn key={step} delay={index * 0.05}>
                <div className="surface-card h-full rounded-[22px] p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-primary-hover)]">
                    0{index + 1}
                  </span>
                  <p className="mt-5 text-sm leading-relaxed text-[var(--text-soft)]">{step}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--surface-dark)] text-white">
        <div className="mx-auto max-w-5xl text-center">
          <span className="section-label">Browse first</span>
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Explore HAAK&apos;s services and project examples before reaching out.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/72">
            The services and work pages show how HAAK structures product, web, growth, and technology support projects.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/services" className="button-primary">
              View Services
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
