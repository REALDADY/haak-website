import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/services/ServiceDetailPage'
import { buildServiceMetadata, getServiceDetail } from '@/lib/service-details'

const detail = getServiceDetail('mobile-app')

export const metadata: Metadata = buildServiceMetadata(detail)

export default function MobileAppPage() {
  return <ServiceDetailPage detail={detail} />
}
