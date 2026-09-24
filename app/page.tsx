import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import CapabilityScene from '@/components/home/CapabilityScene'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import InteractiveServices from '@/components/home/InteractiveServices'
import SoftwareStory from '@/components/home/SoftwareStory'
import WhyHaak from '@/components/home/WhyHaak'
import ClosingCTA from '@/components/home/ClosingCTA'
import { companyInfo } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'HAAK Solutions - Software, Web Apps, UI/UX and Digital Growth Dubai',
  description:
    'HAAK Solutions designs and builds websites, applications, mobile experiences, UI/UX systems, SEO foundations, digital marketing assets, and IT solutions for businesses in Dubai and beyond.',
  alternates: { canonical: companyInfo.siteUrl },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityScene />
      <InteractiveServices />
      <WhyHaak />
      <SoftwareStory />
      <FeaturedProjects />
      <ClosingCTA />
    </>
  )
}
