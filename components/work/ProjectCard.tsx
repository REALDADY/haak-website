'use client'

import Image from 'next/image'
import Link from 'next/link'
import { m, useMotionValue, useSpring } from 'framer-motion'
import type { PointerEvent } from 'react'
import type { Project } from '@/lib/site-data'
import { ArrowRightIcon, ArrowUpRightIcon } from '@/components/icons'
import { springConfig } from '@/lib/motion'

interface ProjectCardProps {
  project: Project
  variant?: 'feature' | 'standard'
  priority?: boolean
  headingLevel?: 'h2' | 'h3'
}

/**
 * Case-study card: sharp next/image screenshot in a browser frame, hover zoom and a
 * cursor-following label on precise pointers. The whole card is one link target.
 */
export default function ProjectCard({ project, variant = 'standard', priority = false, headingLevel = 'h3' }: ProjectCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const cursorX = useSpring(x, springConfig.magnetic)
  const cursorY = useSpring(y, springConfig.magnetic)
  const Heading = headingLevel
  const feature = variant === 'feature'

  const handleMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  return (
    <article
      className={`card card-interactive group h-full overflow-hidden bg-white ${
        feature ? 'grid lg:grid-cols-[1.35fr_1fr]' : 'flex flex-col'
      }`}
      onPointerMove={handleMove}
    >
      <m.span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-[3] hidden [@media(hover:hover)]:block"
        style={{ x: cursorX, y: cursorY }}
      >
        <span className="flex -translate-x-1/2 -translate-y-1/2 scale-50 items-center gap-2 whitespace-nowrap rounded-full bg-[var(--brand-secondary)] px-4 py-2.5 text-xs font-bold text-white opacity-0 shadow-[0_12px_30px_rgba(0,8,20,0.35)] transition-[opacity,transform] duration-300 ease-out group-hover:scale-100 group-hover:opacity-100">
          View case study
          <ArrowUpRightIcon className="h-3.5 w-3.5 text-[var(--brand-primary)]" />
        </span>
      </m.span>
      <div className={`relative overflow-hidden bg-[var(--bg-soft)] ${feature ? 'p-4 sm:p-6 lg:p-8' : 'p-4 sm:p-5'}`}>
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,180,216,0.14),transparent_60%)]" />
        <div className="browser-frame relative">
          <div className="browser-bar" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority={priority}
              quality={90}
              sizes={feature ? '(max-width: 1024px) 100vw, 720px' : '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px'}
              className="object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${feature ? 'p-7 sm:p-10 lg:justify-center' : 'p-6 sm:p-7'}`}>
        <p className="t-label">{project.industry}</p>
        <Heading
          className={`mt-3 font-display font-bold tracking-[-0.03em] text-[var(--text-primary)] ${
            feature ? 'text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.05]' : 'text-[1.6rem] leading-tight'
          }`}
        >
          {project.client}
        </Heading>
        <p className="t-body mt-3">{feature ? project.summary : project.outcome}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Services">
          {project.services.map((service) => (
            <li key={service} className="chip">
              {service}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-7">
          <Link href={project.href} className="stretched-link link-underline text-sm text-[var(--brand-primary-hover)]">
            View case study
            <span className="sr-only">: {project.client}</span>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}
