import Image from 'next/image'
import Link from 'next/link'
import { companyInfo, whatsappLinks } from '@/lib/site-data'

export default function ClosingCTA() {
  return (
    <section className="closing-cta bg-[var(--bg-soft)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 border-y border-[var(--line)] py-14 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="section-kicker">Start a project</div>
          <h2 className="max-w-4xl font-display text-[clamp(2.35rem,4.4vw,4.8rem)] font-extrabold leading-[0.98] text-[var(--text-primary)]">
            Your business deserves software designed around it.
          </h2>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-[var(--text-soft)]">
            Share the product, platform, website or operational problem you want to improve. HAAK will help clarify the next practical step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Start a Project
            </Link>
            <a href={whatsappLinks.project} target="_blank" rel="noopener noreferrer" className="button-secondary">
              WhatsApp HAAK
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-[var(--text-soft)]">
            <span>{companyInfo.email}</span>
            <span>{companyInfo.whatsappDisplay}</span>
            <span>{companyInfo.location}</span>
          </div>
        </div>
        <div className="closing-logo">
          <Image src="/logo3.png" alt="HAAK Solutions logo" width={220} height={220} className="h-full w-full object-contain" sizes="180px" />
        </div>
      </div>
    </section>
  )
}
