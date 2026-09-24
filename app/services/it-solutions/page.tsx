import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/services/ServiceDetailPage'
import { buildServiceMetadata, getServiceDetail } from '@/lib/service-details'

const detail = getServiceDetail('it-solutions')

export const metadata: Metadata = buildServiceMetadata(detail)

export default function ITSolutionsPage() {
  return <ServiceDetailPage detail={detail} />
}
