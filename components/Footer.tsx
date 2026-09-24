import Image from 'next/image'
import Link from 'next/link'
import { companyInfo, services, whatsappLinks } from '@/lib/site-data'

const companyLinks = [
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer bg-[var(--brand-secondary)] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.75fr_0.75fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="HAAK Solutions home">
              <Image src="/logo3.png" alt="HAAK Solutions logo mark" width={52} height={52} className="h-12 w-12 object-contain" />
              <span>
                <span className="block font-display text-xl font-extrabold">{companyInfo.name}</span>
                <span className="block text-sm text-white/58">{companyInfo.location}</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/58">
              Software, product, web and growth support for businesses building clearer digital systems.
            </p>
          </div>

          <nav aria-label="Footer services">
            <h2 className="footer-heading">Services</h2>
            <div className="mt-4 grid gap-2">
              {services.slice(0, 5).map((service) => (
                <Link key={service.href} href={service.href} className="footer-link">
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Footer company">
            <h2 className="footer-heading">Company</h2>
            <div className="mt-4 grid gap-2">
              {companyLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <h2 className="footer-heading">Contact</h2>
            <div className="mt-4 grid gap-2">
              <a href={`mailto:${companyInfo.email}`} className="footer-link">
                {companyInfo.email}
              </a>
              <a href={whatsappLinks.project} target="_blank" rel="noopener noreferrer" className="footer-link">
                {companyInfo.whatsappDisplay}
              </a>
              {companyInfo.socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="footer-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>{`${new Date().getFullYear()} ${companyInfo.name}. All rights reserved.`}</p>
          <div className="flex gap-4">
            <Link href="/robots.txt" className="transition hover:text-white">
              Robots
            </Link>
            <Link href="/sitemap.xml" className="transition hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
