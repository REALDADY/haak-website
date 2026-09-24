import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/services/ServiceDetailPage'
import { buildServiceMetadata, getServiceDetail } from '@/lib/service-details'

const detail = getServiceDetail('web-development')

export const metadata: Metadata = buildServiceMetadata(detail)

export default function WebDevelopmentPage() {
  return <ServiceDetailPage detail={detail} />
}
