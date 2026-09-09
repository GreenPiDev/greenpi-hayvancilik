import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { Reveal } from '../components/Reveal'
import { CTA } from '../sections/CTA'
import { testimonials } from '../data/testimonials'

export function TestimonialsPage() {
  return (
    <div>
      <PageHeader title="Referanslar" breadcrumb="Referanslar" />
      <section className="py-20">
        <Container className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-8">
                <div className="mb-4 text-primary">{'★'.repeat(t.rating)}</div>
                <p className="flex-1 italic text-body">“{t.quote}”</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/15 text-lg font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-dark">{t.name}</div>
                    <div className="text-sm text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>
      <CTA title="Sizin Deneyiminiz de Bir Referans Olsun" />
    </div>
  )
}
