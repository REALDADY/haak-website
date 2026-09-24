import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/site-data'

function ArrowIcon() {
  return (
    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  )
}

export default function FeaturedProjects() {
  return (
    <section id="selected-work" className="selected-proof bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24" aria-label="Selected proof">
      <div className="mx-auto max-w-7xl">
        <div className="section-kicker">Selected proof</div>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <h2 className="max-w-3xl font-display text-[clamp(2.5rem,5vw,4.8rem)] font-extrabold leading-[0.96] text-[var(--text-primary)]">
            A few real examples of HAAK delivery.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
            Project proof is intentionally limited here. Each item uses genuine available project information and screenshots.
          </p>
        </div>

        <div className="proof-grid mt-12">
          {projects.slice(0, 3).map((project) => (
            <article key={project.slug} className="proof-card">
              <div className="proof-media">
                <Image src={project.image} alt={project.imageAlt} fill loading="eager" className="object-cover" sizes="(max-width: 1024px) 100vw, 390px" />
              </div>
              <div className="proof-copy">
                <span>{project.industry}</span>
                <h3>{project.client}</h3>
                <p>{project.outcome}</p>
                <Link href={project.href} className="proof-link group">
                  View case study
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
