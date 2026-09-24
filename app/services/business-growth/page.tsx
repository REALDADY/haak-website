import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/services/ServiceDetailPage'
import { buildServiceMetadata, getServiceDetail } from '@/lib/service-details'

const detail = getServiceDetail('business-growth')

export const metadata: Metadata = buildServiceMetadata(detail)

export default function BusinessGrowthPage() {
  return <ServiceDetailPage detail={detail} />
}
