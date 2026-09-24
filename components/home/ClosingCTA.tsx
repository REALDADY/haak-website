import Image from 'next/image'
import Link from 'next/link'
import Magnetic from '@/components/motion/Magnetic'
import { Reveal } from '@/components/motion/Reveal'
import { ArrowRightIcon, MailIcon, WhatsAppIcon } from '@/components/icons'
import { companyInfo, whatsappLinks } from '@/lib/site-data'

export default function ClosingCTA() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <Reveal>
          <div className="theme-dark noise relative isolate overflow-hidden rounded-[var(--radius-xl)] px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <div className="grid-lines" aria-hidden="true" />
            <div aria-hidden="true" className="glow-orb glow-cyan -right-32 -top-40 h-[34rem] w-[34rem]" />
            <div aria-hidden="true" className="glow-orb glow-yellow -bottom-40 -left-20 h-96 w-96" />
            <div className="hairline-top" aria-hidden="true" />

            <div className="relative z-[1] grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="eyebrow">Start a project</p>
                <h2 className="mt-5 max-w-[16ch] text-balance font-display text-[clamp(2.3rem,5.2vw,4.6rem)] font-bold leading-[1.02] tracking-[-0.04em] text-white">
                  Your business deserves software designed <span className="t-gradient">around it.</span>
                </h2>
                <p className="t-lead mt-6 max-w-2xl">
                  Share the product, platform, website or operational problem you want to improve. HAAK will help clarify the next practical step.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Magnetic className="flex sm:inline-flex">
                    <Link href="/contact" className="btn-primary btn-lg w-full sm:w-auto">
                      Start a Project
                      <ArrowRightIcon />
                    </Link>
                  </Magnetic>
                  <a href={whatsappLinks.project} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-lg w-full sm:w-auto">
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp HAAK
                  </a>
                </div>
                <ul className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/70 sm:flex-row sm:flex-wrap sm:gap-x-8">
                  <li>
                    <a href={`mailto:${companyInfo.email}`} className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-white">
                      <MailIcon className="h-4 w-4 text-[var(--brand-logo-cyan)]" />
                      {companyInfo.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={whatsappLinks.project}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-white"
                    >
                      <WhatsAppIcon className="h-4 w-4 text-[var(--brand-logo-cyan)]" />
                      {companyInfo.whatsappDisplay}
                    </a>
                  </li>
                  <li className="inline-flex min-h-11 items-center">{companyInfo.location}</li>
                </ul>
              </div>

              <div aria-hidden="true" className="relative mx-auto hidden h-52 w-52 lg:block">
                <div className="absolute inset-[-30%] rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.35),transparent_65%)]" />
                <span className="hero-orbit-ring is-dashed h-[150%] w-[150%]">
                  <i className="orbit-dot" />
                </span>
                <div className="logo-tile relative h-full w-full rounded-[28%] shadow-[0_30px_80px_-10px_rgba(0,180,216,0.4)]">
                  <Image src="/logo3.png" alt="" width={150} height={150} className="h-[70%] w-[70%] object-contain" sizes="150px" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
