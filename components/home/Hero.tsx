'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import MotionLink from '@/components/MotionLink'

const systemNodes = [
  { label: 'Strategy', detail: 'Business logic', className: 'node-strategy' },
  { label: 'Product UX', detail: 'User journeys', className: 'node-product' },
  { label: 'Platforms', detail: 'Web and mobile', className: 'node-platforms' },
  { label: 'Integrations', detail: 'APIs and automation', className: 'node-integrations' },
]

function ArrowIcon() {
  return (
    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  )
}

function HeroSystemVisual() {
  const reduceMotion = useReducedMotion()
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  return (
    <div
      className="haak-system-visual"
      style={{ '--mx': pointer.x, '--my': pointer.y } as React.CSSProperties}
      onPointerMove={(event) => {
        if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return
        const rect = event.currentTarget.getBoundingClientRect()
        setPointer({
          x: (event.clientX - rect.left) / rect.width - 0.5,
          y: (event.clientY - rect.top) / rect.height - 0.5,
        })
      }}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
      aria-label="HAAK software delivery system"
    >
      <div className="system-grid" aria-hidden="true" />
      <div className="system-path system-path-a" aria-hidden="true" />
      <div className="system-path system-path-b" aria-hidden="true" />
      <div className="system-path system-path-c" aria-hidden="true" />

      <div className="system-logo-core">
        <Image
          src="/logo3.png"
          alt="HAAK Solutions logo"
          width={360}
          height={360}
          priority
          className="h-full w-full object-contain"
          sizes="(max-width: 1024px) 260px, 320px"
        />
      </div>

      {systemNodes.map((node) => (
        <div key={node.label} className={`system-node ${node.className}`}>
          <span>{node.label}</span>
          <strong>{node.detail}</strong>
        </div>
      ))}

      <div className="system-status">
        <span>HAAK output</span>
        <strong>Digital products that fit the way the business works.</strong>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="home-hero relative overflow-hidden px-4 pb-16 pt-14 text-white sm:px-6 lg:px-8 lg:pb-24">
      <div className="hero-technical-bg" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(100vh-78px)] max-w-[1500px] gap-12 lg:grid-cols-[minmax(620px,1.05fr)_minmax(470px,0.95fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 0.8, 0.28, 1] }}
          className="relative z-10"
        >
          <p className="text-sm font-extrabold text-[var(--brand-logo-cyan)]">
            Dubai software and digital product company
          </p>
          <h1 className="mt-5 max-w-[800px] font-display text-[clamp(3rem,4.8vw,5.2rem)] font-extrabold leading-[0.95] text-white">
            <span className="sm:hidden">Software built around your business.</span>
            <span className="hidden sm:inline">Software built around how your business actually works.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/72">
            HAAK designs and develops digital products, business platforms and connected software experiences from strategy through launch.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MotionLink href="/contact" className="button-primary group" magnetic>
              Start a Project
              <ArrowIcon />
            </MotionLink>
            <MotionLink href="#capabilities" className="button-secondary group" magnetic>
              Explore Capabilities
              <ArrowIcon />
            </MotionLink>
          </div>
          <div className="hero-proof-row" aria-label="HAAK delivery focus">
            <span>Strategy</span>
            <span>Design systems</span>
            <span>Software delivery</span>
            <span>Growth foundations</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 0.8, 0.28, 1] }}
          className="relative z-10"
        >
          <HeroSystemVisual />
        </motion.div>
      </div>
    </section>
  )
}
