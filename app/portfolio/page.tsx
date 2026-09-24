import type { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'
import { companyInfo } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Portfolio - HAAK Solutions Work Dubai',
  description:
    'See HAAK Solutions work across UX, web execution, digital product design, and growth systems for UAE businesses.',
  alternates: { canonical: `${companyInfo.siteUrl}/portfolio` },
}

export default function PortfolioPage() {
  return <PortfolioClient />
}
