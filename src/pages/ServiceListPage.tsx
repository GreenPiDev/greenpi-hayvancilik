import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { ServicesGrid } from '../sections/ServicesGrid'
import { CTA } from '../sections/CTA'
import { services } from '../data/services'

interface ServiceListPageProps {
  breadcrumb?: string
}

export function ServiceListPage({ breadcrumb = 'Faaliyet Alanlarımız' }: ServiceListPageProps) {
  return (
    <div>
      <PageHeader title="Faaliyet Alanlarımız" breadcrumb={breadcrumb} />
      <section className="py-20">
        <Container>
          <ServicesGrid services={services} />
        </Container>
      </section>
      <CTA title="Faaliyetlerimiz Hakkında Bilgi Almak İster Misiniz?" description="Bizimle iletişime geçin." />
    </div>
  )
}
