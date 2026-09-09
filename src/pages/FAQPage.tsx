import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { FAQAccordion } from '../sections/FAQAccordion'
import { CTA } from '../sections/CTA'

export function FAQPage() {
  return (
    <div>
      <PageHeader title="Sıkça Sorulan Sorular" breadcrumb="SSS" />
      <section className="py-20">
        <Container>
          <FAQAccordion />
        </Container>
      </section>
      <CTA title="Aradığınız Cevabı Bulamadınız mı?" buttonLabel="Bize Sorun" />
    </div>
  )
}
