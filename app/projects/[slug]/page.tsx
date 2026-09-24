import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CtaBand from '@/components/ui/CtaBand'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from '@/components/icons'
import { companyInfo, projects } from '@/lib/site-data'

type ProjectPageProps = {
  params: { slug: string }
}

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug)
  if (!project) return {}

  return {
    title: `${project.client} - ${project.industry} Case Study`,
    description: project.summary,
    alternates: { canonical: `${companyInfo.siteUrl}${project.href}` },
    openGraph: {
      title: `${project.client} | HAAK Solutions`,
      description: project.summary,
      url: `${companyInfo.siteUrl}${project.href}`,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug)
  if (!project) notFound()

  const index = projects.findIndex((item) => item.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  const story = [
    { label: 'Challenge', copy: project.challenge },
    { label: 'HAAK role', copy: project.role },
    { label: 'Solution', copy: project.solution },
  ]

  return (
    <>
      <PageHero
        before={
          <nav aria-label="Breadcrumb">
            <Link href="/portfolio" className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white">
              <ArrowLeftIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              All work
            </Link>
          </nav>
        }
        eyebrow={project.industry}
        title={project.client}
        highlightLast={1}
        intro={<p>{project.summary}</p>}
      >
        <dl className="grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:max-w-3xl">
          <div>
            <dt className="t-label">Services</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span key={service} className="chip text-white/80">
                  {service}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="t-label">Technologies</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="chip text-white/80">
                  {technology}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </PageHero>

      <section className="relative bg-white pb-4 pt-12 sm:pt-16">
        <div className="container-x">
          <Reveal>
            <div className="browser-frame">
              <div className="browser-bar" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="relative aspect-[16/9] bg-[var(--bg-soft)]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <RevealGroup className="grid gap-4 lg:grid-cols-3">
            {story.map((item, position) => (
              <RevealItem key={item.label} className="card card-elevated h-full p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <p className="t-label">{item.label}</p>
                  <span className="index-num text-[var(--text-faint)]">{String(position + 1).padStart(2, '0')}</span>
                </div>
                <p className="mt-5 text-[1.02rem] leading-relaxed text-[var(--text-primary)]">{item.copy}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section surface-soft">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading eyebrow="Scope delivered" title="What the project covered." className="lg:sticky lg:top-32 lg:self-start" />
          <div>
            <RevealGroup as="ul" className="grid gap-3 sm:grid-cols-2" gap={0.05}>
              {project.features.map((feature) => (
                <RevealItem as="li" key={feature} className="card card-elevated flex items-start gap-4 p-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)] text-[var(--brand-secondary)]">
                    <CheckIcon />
                  </span>
                  <span className="pt-1 text-[0.95rem] font-semibold leading-snug text-[var(--text-primary)]">{feature}</span>
                </RevealItem>
              ))}
            </RevealGroup>
            <Reveal className="theme-dark noise relative mt-4 overflow-hidden rounded-[var(--radius-lg)] p-8 sm:p-10">
              <div aria-hidden="true" className="glow-orb glow-cyan -right-20 -top-20 h-72 w-72" />
              <p className="t-label relative">Outcome</p>
              <p className="relative mt-4 font-display text-[clamp(1.35rem,2.4vw,1.85rem)] font-semibold leading-snug tracking-[-0.02em] text-white">
                {project.outcome}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {next && next.slug !== project.slug && (
        <section className="bg-white">
          <div className="container-x py-12">
            <Link
              href={next.href}
              className="group flex flex-col gap-4 border-y border-[var(--line)] py-10 sm:flex-row sm:items-center sm:justify-between"
            >
              <span>
                <span className="t-label block">Next project</span>
                <span className="mt-3 block font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-none tracking-[-0.04em] text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--brand-primary-hover)]">
                  {next.client}
                </span>
              </span>
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--line-strong)] text-[var(--text-primary)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-[var(--brand-secondary)]">
                <ArrowRightIcon className="h-6 w-6 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </section>
      )}

      <CtaBand
        className="bg-white !pt-0"
        eyebrow="Build the next project"
        title="Need a website, application, storefront or platform with a clearer user journey?"
        copy="Share the current product or website challenge and HAAK can help define the practical next step."
        primary={{ href: '/contact', label: 'Start a Project' }}
        secondary={{ href: '/portfolio', label: 'View Work' }}
      />
    </>
  )
}
