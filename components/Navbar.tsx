'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { companyInfo, services } from '@/lib/site-data'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/#solutions', label: 'Solutions' },
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function isLinkActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Navbar() {
  const pathname = usePathname()
  const currentPath = pathname ?? '/'
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const openedOnceRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen) {
      openedOnceRef.current = true
      window.setTimeout(() => drawerRef.current?.querySelector<HTMLElement>('a,button')?.focus(), 80)
    } else if (openedOnceRef.current) {
      menuButtonRef.current?.focus()
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        setServicesOpen(false)
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
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? 'border-[var(--line)] bg-white/94 shadow-[0_12px_34px_rgba(0,8,20,0.08)]'
          : 'border-transparent bg-white/78'
      }`}
      ref={headerRef}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[var(--brand-secondary)] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <div>
        <nav className="mx-auto flex min-h-[78px] max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="HAAK Solutions home">
            <Image src="/logo3.png" alt="HAAK Solutions logo mark" width={46} height={46} className="h-11 w-11 object-contain" priority />
            <span className="min-w-0">
              <span className="block font-display text-base font-extrabold leading-tight text-[var(--text-primary)] sm:text-lg">
                {companyInfo.name}
              </span>
              <span className="block truncate text-xs font-medium text-[var(--text-soft)]">
                Software, product, web and growth
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  isLinkActive(currentPath, '/services')
                    ? 'bg-[var(--surface-soft)] text-[var(--brand-primary-hover)]'
                    : 'text-[var(--text-soft)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]'
                }`}
                onClick={() => setServicesOpen((open) => !open)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.16 }}
                    className="absolute left-0 top-full mt-3 w-[560px] rounded-2xl border border-[var(--line)] bg-white p-4 shadow-[0_24px_70px_rgba(0,8,20,0.14)]"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="rounded-xl p-3 transition hover:bg-[var(--bg-soft)]"
                        >
                          <span className="block text-sm font-extrabold text-[var(--text-primary)]">
                            {service.shortTitle}
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-[var(--text-soft)]">
                            {service.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/services"
                      className="mt-3 inline-flex rounded-full bg-[var(--brand-primary-hover)] px-4 py-2 text-sm font-bold text-white"
                    >
                      View all services
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) => {
              const active = isLinkActive(currentPath, link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-bold transition ${
                    active
                      ? 'bg-[var(--surface-soft)] text-[var(--brand-primary-hover)]'
                      : 'text-[var(--text-soft)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-[var(--brand-accent)]"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="button-primary hidden lg:inline-flex">
              Start a Project
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
            <button
              ref={menuButtonRef}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--text-primary)] transition hover:bg-[var(--bg-soft)] lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <span className="flex w-5 flex-col gap-1.5">
                <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 rounded-full bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={drawerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-[79px] z-40 h-[calc(100vh-79px)] overflow-y-auto border-t border-[var(--line)] bg-white px-4 py-5 lg:hidden"
          >
            <div className="mx-auto max-w-lg">
              <div className="rounded-2xl bg-[var(--bg-soft)] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-primary-hover)]">
                  Services
                </p>
                <div className="mt-3 grid gap-2">
                  {services.map((service) => (
                    <motion.div
                      key={service.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Link
                        href={service.href}
                        className="block rounded-xl bg-white p-3 text-sm font-bold text-[var(--text-primary)]"
                      >
                        {service.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-2xl border border-[var(--line)] px-4 py-4 text-base font-bold text-[var(--text-primary)]"
                  >
                    {link.label}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5.25L15.75 12 9 18.75" />
                    </svg>
                  </Link>
                ))}
              </div>

              <Link href="/contact" className="button-primary mt-5 w-full">
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
