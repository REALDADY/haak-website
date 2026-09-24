import Image from 'next/image'
import Link from 'next/link'
import { companyInfo, services, whatsappLinks } from '@/lib/site-data'
import { ArrowRightIcon, ArrowUpRightIcon } from '@/components/icons'
import BackToTop from '@/components/BackToTop'

const companyLinks = [
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="theme-dark noise relative overflow-hidden !bg-[var(--surface-dark-deep)]">
      <div className="hairline-top" aria-hidden="true" />
      <div aria-hidden="true" className="glow-orb glow-cyan -left-48 top-10 h-[30rem] w-[30rem] opacity-40" />

      <div className="container-x relative z-[1] pb-10 pt-20 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.8fr_0.7fr_0.95fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="HAAK Solutions home">
              <span className="logo-tile h-12 w-12">
                <Image src="/logo3.png" alt="" width={34} height={34} className="h-[34px] w-[34px] object-contain" />
              </span>
              <span>
                <span className="block font-display text-lg font-bold tracking-[-0.02em] text-white">{companyInfo.name}</span>
                <span className="block text-sm text-white/60">{companyInfo.location}</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
              Software, product, web and growth support for businesses building clearer digital systems.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Start a Project
              <ArrowRightIcon />
            </Link>
          </div>

          <nav aria-label="Footer services">
            <h2 className="footer-heading">Services</h2>
            <ul className="mt-5 grid gap-1">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="footer-link">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer company">
            <h2 className="footer-heading">Company</h2>
            <ul className="mt-5 grid gap-1">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer-heading">Contact</h2>
            <ul className="mt-5 grid gap-1">
              <li>
                <a href={`mailto:${companyInfo.email}`} className="footer-link">
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <a href={whatsappLinks.project} target="_blank" rel="noopener noreferrer" className="footer-link">
                  {companyInfo.whatsappDisplay}
                </a>
              </li>
              {companyInfo.socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="footer-link gap-1.5">
                    {link.label}
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p aria-hidden="true" className="footer-wordmark mt-16 select-none text-center sm:mt-20">
          HAAK
        </p>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{`© ${new Date().getFullYear()} ${companyInfo.name}. All rights reserved.`}</p>
          <div className="flex items-center gap-5">
            <Link href="/sitemap.xml" className="footer-link text-sm">
              Sitemap
            </Link>
            <Link href="/robots.txt" className="footer-link text-sm">
              Robots
            </Link>
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  )
}
