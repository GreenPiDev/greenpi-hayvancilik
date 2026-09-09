import { Navigate, useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { CTA } from '../sections/CTA'
import { Reveal } from '../components/Reveal'
import { services } from '../data/services'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/service" replace />

  return (
    <div>
      <PageHeader title={service.title} breadcrumb="Hizmetler" />
      <section className="py-20">
        <Container className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <Reveal direction="left">
            <img src={service.image} alt={service.title} className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </Reveal>
          <Reveal direction="right">
            <h2 className="text-2xl font-bold text-dark">{service.title}</h2>
            <p className="mt-4 text-body">{service.summary}</p>
            {service.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-body">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </Container>
      </section>
      <CTA title="Bu Hizmet Hakkında Bilgi Alın" />
    </div>
  )
}
