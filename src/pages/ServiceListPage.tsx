import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { ServicesGrid } from '../sections/ServicesGrid'
import { CTA } from '../sections/CTA'
import { services } from '../data/services'

interface ServiceListPageProps {
  columns?: 2 | 3
  style?: 'classic' | 'modern' | 'pro'
  breadcrumb?: string
}

export function ServiceListPage({ columns = 3, style = 'classic', breadcrumb = 'Hizmetler' }: ServiceListPageProps) {
  return (
    <div>
      <PageHeader title="Hizmetlerimiz" breadcrumb={breadcrumb} />
      <section className="py-20">
        <Container>
          <ServicesGrid services={services} columns={columns} style={style} />
        </Container>
      </section>
      <CTA title="Size Özel Bir Çözüm Planı İçin" description="Uzman ekibimizle görüşün." />
    </div>
  )
}
