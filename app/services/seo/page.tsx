import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/services/ServiceDetailPage'
import { buildServiceMetadata, getServiceDetail } from '@/lib/service-details'

const detail = getServiceDetail('seo')

export const metadata: Metadata = buildServiceMetadata(detail)

export default function SEOPage() {
  return <ServiceDetailPage detail={detail} />
}
