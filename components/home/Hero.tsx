'use client'

import Image from 'next/image'
import { useRef, type PointerEvent } from 'react'
import {
  m,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import MotionLink from '@/components/MotionLink'
import SplitText from '@/components/motion/SplitText'
import { ArrowRightIcon } from '@/components/icons'
import { hasFinePointer, springConfig } from '@/lib/motion'

const systemNodes = [
  { label: 'Strategy', detail: 'Business logic', position: 'left-0 top-[6%] sm:left-[2%] sm:top-[10%]', depth: 26, delay: 520 },
  { label: 'Product UX', detail: 'User journeys', position: 'right-0 top-[14%] sm:right-0 sm:top-[16%]', depth: -34, delay: 600, accent: 'cyan' },
  { label: 'Platforms', detail: 'Web and mobile', position: 'left-0 bottom-[14%] sm:left-0 sm:bottom-[24%]', depth: -22, delay: 680, accent: 'yellow' },
  { label: 'Integrations', detail: 'APIs and automation', position: 'right-0 bottom-[6%] sm:right-[4%] sm:bottom-[14%]', depth: 30, delay: 760 },
]

const signalLines = [
  { className: 'left-1/2 top-1/2 w-[46%] rotate-[-148deg]', delay: '0s' },
  { className: 'left-1/2 top-1/2 w-[44%] rotate-[-32deg]', delay: '0.8s' },
  { className: 'left-1/2 top-1/2 w-[44%] rotate-[150deg]', delay: '1.6s' },
  { className: 'left-1/2 top-1/2 w-[46%] rotate-[38deg]', delay: '2.4s' },
]

const proofPoints = ['Strategy', 'Design systems', 'Software delivery', 'Growth foundations']

const headlineDesktop = [
  { text: 'Software built around how your business' },
  { text: 'actually works.', className: 't-gradient' },
]

const headlineMobile = [{ text: 'Software built around' }, { text: 'your business.', className: 't-gradient' }]

function useDepth(source: MotionValue<number>, depth: number) {
  return useTransform(source, (value) => value * depth)
}

function HeroNode({
  node,
  px,
  py,
}: {
  node: (typeof systemNodes)[number]
  px: MotionValue<number>
  py: MotionValue<number>
}) {
  const x = useDepth(px, node.depth)
  const y = useDepth(py, node.depth * 0.7)
  const border =
    node.accent === 'cyan'
      ? 'border-t-2 border-t-[var(--brand-primary)]'
      : node.accent === 'yellow'
        ? 'border-t-2 border-t-[var(--brand-accent)]'
        : ''

  return (
    <m.div className={`absolute z-[3] ${node.position}`} style={{ x, y }}>
      <div
        className={`hero-node enter-fade w-[9.5rem] px-3.5 py-3 sm:w-[12.5rem] sm:px-4 sm:py-3.5 ${border}`}
        style={{ '--d': `${node.delay}ms` } as React.CSSProperties}
      >
        <span className="block text-[0.64rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-logo-cyan)] sm:text-[0.68rem]">
          {node.label}
        </span>
        <strong className="mt-1 block font-display text-[0.92rem] font-semibold leading-tight tracking-[-0.01em] text-white sm:text-[1.02rem]">
          {node.detail}
        </strong>
      </div>
    </m.div>
  )
}

function HeroSystemVisual({ px, py }: { px: MotionValue<number>; py: MotionValue<number> }) {
  const coreX = useDepth(px, -14)
  const coreY = useDepth(py, -10)
  const ringsX = useDepth(px, 8)
  const ringsY = useDepth(py, 6)

  return (
    <div
      role="img"
      aria-label="HAAK delivery system: strategy, product UX, platforms and integrations connected around the HAAK core"
      className="relative mx-auto aspect-square w-full max-w-[560px]"
    >
      <m.div aria-hidden="true" className="absolute inset-0" style={{ x: ringsX, y: ringsY }}>
        <span className="hero-orbit-ring h-[96%] w-[96%]" />
        <span className="hero-orbit-ring is-dashed h-[74%] w-[74%]">
          <i className="orbit-dot" />
        </span>
        <span className="hero-orbit-ring is-dashed is-reverse h-[52%] w-[52%]">
          <i className="orbit-dot is-cyan" />
        </span>
        {signalLines.map((line) => (
          <span
            key={line.className}
            className={`signal-line ${line.className}`}
            style={{ '--d': line.delay } as React.CSSProperties}
          />
        ))}
      </m.div>

      <div aria-hidden="true" className="absolute inset-0 z-[2] flex items-center justify-center">
        <m.div className="w-[34%]" style={{ x: coreX, y: coreY }}>
          <div className="enter-fade relative" style={{ '--d': '360ms' } as React.CSSProperties}>
            <div className="absolute inset-[-40%] rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.45),transparent_62%)]" />
            <div className="logo-tile relative aspect-square w-full rounded-[28%] shadow-[0_30px_80px_-10px_rgba(0,180,216,0.45)]">
              <Image
                src="/logo3.png"
                alt=""
                width={200}
                height={200}
                priority
                className="h-[72%] w-[72%] object-contain"
                sizes="(max-width: 640px) 90px, 140px"
              />
            </div>
          </div>
        </m.div>
      </div>

      {systemNodes.map((node) => (
        <HeroNode key={node.label} node={node} px={px} py={py} />
      ))}
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  // Pointer field: normalised -0.5..0.5, smoothed with the shared soft spring.
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const px = useSpring(rawX, springConfig.soft)
  const py = useSpring(rawY, springConfig.soft)
  const glowX = useTransform(px, (value) => value * 520)
  const glowY = useTransform(py, (value) => value * 360)

  // Scroll choreography: copy drifts up and fades, visual sinks for depth.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 110])
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])

  const handlePointer = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse' || !hasFinePointer()) return
    const rect = event.currentTarget.getBoundingClientRect()
    rawX.set((event.clientX - rect.left) / rect.width - 0.5)
    rawY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const resetPointer = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <section
      ref={sectionRef}
      className="home-hero theme-dark noise"
      onPointerMove={handlePointer}
      onPointerLeave={resetPointer}
      aria-labelledby="home-hero-title"
    >
      <div className="grid-lines" aria-hidden="true" />
      <m.div
        aria-hidden="true"
        className="glow-orb glow-cyan left-[55%] top-[18%] ml-[-22rem] h-[44rem] w-[44rem]"
        style={reduceMotion ? undefined : { x: glowX, y: glowY }}
      />
      <div aria-hidden="true" className="glow-orb glow-yellow -left-40 bottom-[-12rem] h-[30rem] w-[30rem]" />

      <div className="container-x relative z-[1] grid min-h-[100svh] items-center gap-10 pb-16 pt-[calc(var(--nav-offset)+2.5rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-24">
        <m.div style={reduceMotion ? undefined : { y: copyY, opacity: copyOpacity }} className="min-w-0">
          <p
            className="enter-fade inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 text-[0.8rem] font-semibold text-white/80"
            style={{ '--d': '0ms' } as React.CSSProperties}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[var(--brand-primary)] opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-[var(--brand-primary)]" />
            </span>
            Dubai software and digital product company
          </p>

          <h1 id="home-hero-title" className="t-display mt-7 text-white sm:max-w-[14ch]">
            <span className="sr-only">Software built around how your business actually works.</span>
            <span aria-hidden="true" className="sm:hidden">
              <SplitText segments={headlineMobile} />
            </span>
            <span aria-hidden="true" className="hidden sm:inline">
              <SplitText segments={headlineDesktop} />
            </span>
          </h1>

          <p className="t-lead enter-fade mt-7 max-w-xl text-white/70" style={{ '--d': '520ms' } as React.CSSProperties}>
            HAAK designs and develops digital products, business platforms and connected software experiences from strategy through launch.
          </p>

          <div className="enter-fade mt-10 flex flex-col gap-3 sm:flex-row" style={{ '--d': '640ms' } as React.CSSProperties}>
            <MotionLink href="/contact" className="btn-primary btn-lg w-full sm:w-auto" magnetic wrapperClassName="flex sm:inline-flex">
              Start a Project
              <ArrowRightIcon />
            </MotionLink>
            <MotionLink href="#capabilities" className="btn-secondary btn-lg w-full sm:w-auto" magnetic wrapperClassName="flex sm:inline-flex">
              Explore Capabilities
            </MotionLink>
          </div>

          <ul
            className="enter-fade mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm font-medium text-white/70"
            style={{ '--d': '780ms' } as React.CSSProperties}
            aria-label="HAAK delivery focus"
          >
            {proofPoints.map((point) => (
              <li key={point} className="flex items-center gap-2.5">
                <span className="h-1 w-1 rounded-full bg-[var(--brand-accent)]" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </m.div>

        <m.div className="relative min-w-0" style={reduceMotion ? undefined : { y: visualY, scale: visualScale }}>
          <div className="enter-fade" style={{ '--d': '200ms' } as React.CSSProperties}>
            <HeroSystemVisual px={px} py={py} />
          </div>
        </m.div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-[1] hidden justify-center lg:flex" aria-hidden="true">
        <div className="enter-fade flex flex-col items-center gap-3" style={{ '--d': '1100ms' } as React.CSSProperties}>
          <span className="scroll-cue" />
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/60">Scroll</span>
        </div>
      </div>
    </section>
  )
}
