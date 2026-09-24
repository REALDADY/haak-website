'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import {
  AnimatePresence,
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion'
import { companyInfo, services, whatsappLinks } from '@/lib/site-data'
import { duration, ease, hasFinePointer, spring, springConfig, stagger } from '@/lib/motion'
import { ArrowRightIcon, ArrowUpRightIcon, ChevronDownIcon } from '@/components/icons'
import Magnetic from '@/components/motion/Magnetic'

const navLinks = [
  { href: '/#solutions', label: 'Solutions' },
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const mobileLinks = [{ href: '/services', label: 'Services' }, ...navLinks]

function isLinkActive(pathname: string, href: string) {
  if (href.includes('#')) return false
  return pathname === href || pathname.startsWith(`${href}/`)
}

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function Navbar() {
  const pathname = usePathname() ?? '/'
  const reduceMotion = useReducedMotion()
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const servicesButtonRef = useRef<HTMLButtonElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)
  const hoverTimer = useRef<number>()
  const wasOpen = useRef(false)
  const megaId = useId()
  const sheetId = useId()

  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, springConfig.progress)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setScrolled(latest > 16)
    if (isOpen || servicesOpen) return
    if (latest > previous + 4 && latest > 280) setHidden(true)
    else if (latest < previous - 4 || latest < 280) setHidden(false)
  })

  // Close menus on route change.
  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
    setHidden(false)
  }, [pathname])

  // Mobile sheet: scroll lock, initial focus, focus return.
  useEffect(() => {
    const root = document.documentElement
    if (isOpen) {
      wasOpen.current = true
      root.style.overflow = 'hidden'
      const timer = window.setTimeout(() => {
        sheetRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus()
      }, 60)
      return () => {
        window.clearTimeout(timer)
        root.style.overflow = ''
      }
    }
    if (wasOpen.current) {
      wasOpen.current = false
      menuButtonRef.current?.focus()
    }
  }, [isOpen])

  const closeServices = useCallback((returnFocus = false) => {
    setServicesOpen(false)
    if (returnFocus) servicesButtonRef.current?.focus()
  }, [])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (servicesOpen) closeServices(true)
        if (isOpen) setIsOpen(false)
        return
      }

      // Keep keyboard focus inside the header while the mobile sheet is open.
      if (event.key === 'Tab' && isOpen && headerRef.current) {
        const focusables = Array.from(
          headerRef.current.querySelectorAll<HTMLElement>(focusableSelector)
        ).filter((element) => element.getClientRects().length > 0)
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    const handlePointer = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }

    window.addEventListener('keydown', handleKey)
    window.addEventListener('pointerdown', handlePointer)
    return () => {
      window.removeEventListener('keydown', handleKey)
      window.removeEventListener('pointerdown', handlePointer)
    }
  }, [closeServices, isOpen, servicesOpen])

  const openServicesWithIntent = () => {
    if (!hasFinePointer()) return
    window.clearTimeout(hoverTimer.current)
    hoverTimer.current = window.setTimeout(() => setServicesOpen(true), 70)
  }

  const closeServicesWithIntent = () => {
    if (!hasFinePointer()) return
    window.clearTimeout(hoverTimer.current)
    hoverTimer.current = window.setTimeout(() => setServicesOpen(false), 160)
  }

  const servicesActive = isLinkActive(pathname, '/services')

  return (
    <header
      ref={headerRef}
      className="pointer-events-none fixed inset-x-0 top-0 z-50"
      onFocusCapture={() => setHidden(false)}
    >
      <a
        href="#main"
        className="pointer-events-auto sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-[var(--brand-primary)] focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-[var(--brand-secondary)]"
      >
        Skip to content
      </a>

      <m.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]"
        style={{ scaleX: reduceMotion ? scrollYProgress : progress }}
      />

      <m.div
        className="relative z-20 px-3 pt-3 sm:px-5 sm:pt-4"
        animate={{ y: hidden && !isOpen ? '-130%' : '0%' }}
        transition={{ duration: duration.base, ease: ease.out }}
      >
        <nav
          aria-label="Primary"
          className={`nav-shell pointer-events-auto relative mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-3 rounded-full pl-2 pr-2 ${
            scrolled || isOpen ? 'is-scrolled' : ''
          }`}
        >
          <Link href="/" className="group flex min-w-0 items-center gap-3 rounded-full py-1 pl-1 pr-3" aria-label="HAAK Solutions home">
            <span className="logo-tile h-11 w-11 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[-8deg]">
              <Image src="/logo3.png" alt="" width={30} height={30} className="h-[30px] w-[30px] object-contain" priority />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block font-display text-[0.98rem] font-bold tracking-[-0.02em] text-white">{companyInfo.name}</span>
              <span className="hidden truncate text-[0.72rem] font-medium text-white/60 sm:block">
                Software, product, web and growth
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            <li
              className="relative"
              onPointerEnter={openServicesWithIntent}
              onPointerLeave={closeServicesWithIntent}
            >
              <button
                ref={servicesButtonRef}
                type="button"
                className="nav-link"
                aria-expanded={servicesOpen}
                aria-controls={megaId}
                onClick={() => setServicesOpen((open) => !open)}
              >
                {servicesActive && <ActivePill />}
                <span className="nav-link-label">Services</span>
                <m.span animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: duration.fast }}>
                  <ChevronDownIcon />
                </m.span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full z-30 w-[min(760px,calc(100vw-3rem))] -translate-x-1/2 pt-4">
                    <m.div
                      id={megaId}
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98, transition: { duration: duration.instant } }}
                      transition={{ duration: duration.fast, ease: ease.out }}
                      className="theme-dark origin-top overflow-hidden rounded-[26px] border border-white/10 !bg-[#030f1c]/95 p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl"
                    >
                      <div className="grid grid-cols-[1fr_1fr_0.9fr] gap-1">
                        <ul className="col-span-2 grid grid-cols-2 gap-1">
                          {services.map((service) => {
                            const active = isLinkActive(pathname, service.href)
                            return (
                              <li key={service.href}>
                                <Link
                                  href={service.href}
                                  aria-current={active ? 'page' : undefined}
                                  className={`group flex gap-3 rounded-2xl p-3 transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.06] ${
                                    active ? 'bg-white/[0.06]' : ''
                                  }`}
                                >
                                  <span className="icon-tile h-10 w-10 rounded-xl">{service.icon}</span>
                                  <span>
                                    <span className="block text-sm font-bold text-white">{service.shortTitle}</span>
                                    <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-white/60">
                                      {service.pillar}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0077b6]/30 via-transparent to-transparent p-5">
                          <div>
                            <p className="t-label">Services</p>
                            <p className="mt-3 text-sm leading-relaxed text-white/70">
                              Software, product design, digital growth and IT services in one delivery system.
                            </p>
                          </div>
                          <Link href="/services" className="link-underline mt-6 text-sm text-white">
                            View all services
                            <ArrowRightIcon />
                          </Link>
                        </div>
                      </div>
                    </m.div>
                  </div>
                )}
              </AnimatePresence>
            </li>

            {navLinks.map((link) => {
              const active = isLinkActive(pathname, link.href)
              return (
                <li key={link.href}>
                  <Link href={link.href} className="nav-link" aria-current={active ? 'page' : undefined}>
                    {active && <ActivePill />}
                    <span className="nav-link-label">{link.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Magnetic className="hidden sm:inline-flex">
              <Link href="/contact" className="btn-primary min-h-11 px-5 py-2.5 text-sm">
                Start a Project
                <ArrowRightIcon />
              </Link>
            </Magnetic>
            <button
              ref={menuButtonRef}
              type="button"
              className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-colors hover:bg-white/10 lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls={sheetId}
            >
              <span className="relative block h-3 w-5" aria-hidden="true">
                <m.span
                  className="absolute left-0 top-0 block h-[2px] w-5 rounded-full bg-current"
                  animate={isOpen ? { y: 5, rotate: 45 } : { y: 0, rotate: 0 }}
                  transition={spring.snappy}
                />
                <m.span
                  className="absolute bottom-0 left-0 block h-[2px] w-5 rounded-full bg-current"
                  animate={isOpen ? { y: -5, rotate: -45 } : { y: 0, rotate: 0 }}
                  transition={spring.snappy}
                />
              </span>
            </button>
          </div>
        </nav>
      </m.div>

      <AnimatePresence>
        {isOpen && (
          <m.div
            ref={sheetRef}
            id={sheetId}
            className="theme-dark pointer-events-auto fixed inset-0 z-10 overflow-y-auto lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: duration.fast, ease: ease.in } }}
            transition={{ duration: duration.base, ease: ease.out }}
          >
            <div className="grid-lines" aria-hidden="true" />
            <div aria-hidden="true" className="glow-orb glow-cyan -right-40 -top-40 h-[28rem] w-[28rem]" />
            <m.nav
              aria-label="Mobile"
              className="relative flex min-h-full flex-col px-5 pb-8 pt-28 sm:px-8"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: stagger.tight, delayChildren: 0.06 } } }}
            >
              <ul className="border-t border-white/10">
                {mobileLinks.map((link, index) => {
                  const active = isLinkActive(pathname, link.href)
                  return (
                    <m.li
                      key={link.href}
                      className="border-b border-white/10"
                      variants={{
                        hidden: { opacity: 0, y: 24 },
                        visible: { opacity: 1, y: 0, transition: { duration: duration.slow, ease: ease.expo } },
                      }}
                    >
                      <Link
                        href={link.href}
                        aria-current={active ? 'page' : undefined}
                        className="group flex min-h-[4.25rem] items-center justify-between gap-4 py-3"
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="index-num">{String(index + 1).padStart(2, '0')}</span>
                          <span
                            className={`font-display text-[2rem] font-bold leading-none tracking-[-0.03em] ${
                              active ? 'text-[var(--brand-primary)]' : 'text-white'
                            }`}
                          >
                            {link.label}
                          </span>
                        </span>
                        <ArrowUpRightIcon className="h-5 w-5 text-white/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </m.li>
                  )
                })}
              </ul>

              <m.div
                className="mt-8"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: duration.slow, ease: ease.out } },
                }}
              >
                <p className="t-label">Services</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        aria-current={isLinkActive(pathname, service.href) ? 'page' : undefined}
                        className="chip min-h-10 text-white/80 aria-[current=page]:border-[var(--brand-primary)] aria-[current=page]:text-white"
                      >
                        {service.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </m.div>

              <m.div
                className="mt-auto grid gap-3 pt-10 sm:grid-cols-2"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: duration.slow, ease: ease.out } },
                }}
              >
                <Link href="/contact" className="btn-primary btn-lg w-full">
                  Start a Project
                  <ArrowRightIcon />
                </Link>
                <a href={whatsappLinks.default} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-lg w-full">
                  WhatsApp HAAK
                </a>
                <a href={`mailto:${companyInfo.email}`} className="pt-2 text-center text-sm text-white/70 sm:col-span-2">
                  {companyInfo.email}
                </a>
              </m.div>
            </m.nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function ActivePill() {
  return (
    <m.span
      layoutId="nav-active-pill"
      aria-hidden="true"
      className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.08]"
      transition={spring.snappy}
    />
  )
}
