import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/services/ServiceDetailPage'
import { buildServiceMetadata, getServiceDetail } from '@/lib/service-details'

const detail = getServiceDetail('social-media')

export const metadata: Metadata = buildServiceMetadata(detail)

export default function SocialMediaPage() {
  return <ServiceDetailPage detail={detail} />
}
