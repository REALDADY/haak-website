import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/services/ServiceDetailPage'
import { buildServiceMetadata, getServiceDetail } from '@/lib/service-details'

const detail = getServiceDetail('ui-ux')

export const metadata: Metadata = buildServiceMetadata(detail)

export default function UIUXPage() {
  return <ServiceDetailPage detail={detail} />
}
