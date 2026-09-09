import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { Reveal } from '../components/Reveal'
import { site } from '../data/site'

export function ContactPage() {
  return (
    <div>
      <PageHeader title="İletişim" breadcrumb="İletişim" />
      <section className="py-20">
        <Container className="grid gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <h2 className="text-2xl font-bold text-dark">Bize Ulaşın</h2>
            <p className="mt-3 text-body">
              Sorularınız veya çiftliğiniz için bir çözüm planı oluşturmak istiyorsanız formu doldurun, en kısa
              sürede size dönüş yapalım.
            </p>

            <form className="mt-8 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                required
                placeholder="Adınız Soyadınız"
                className="rounded-[15px] border border-line px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <input
                type="email"
                required
                placeholder="E-posta Adresiniz"
                className="rounded-[15px] border border-line px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <input
                type="tel"
                placeholder="Telefon Numaranız"
                className="rounded-[15px] border border-line px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <textarea
                required
                rows={5}
                placeholder="Mesajınız"
                className="rounded-[15px] border border-line px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-[15px] bg-secondary px-7 py-3 text-sm font-semibold text-dark-2 transition-colors hover:bg-primary hover:text-white"
              >
                Gönder
              </button>
            </form>
          </Reveal>

          <Reveal direction="right" className="flex flex-col gap-6">
            <img
              src="/images/agrezen/about-2.webp"
              alt="GreenPi Hayvancılık"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="rounded-2xl border border-line p-6 text-sm">
              <dl className="flex flex-col gap-3">
                <div>
                  <dt className="font-semibold text-dark">Adres</dt>
                  <dd className="text-body">{site.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-dark">Telefon</dt>
                  <dd className="text-body">{site.phone}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-dark">E-posta</dt>
                  <dd className="text-body">{site.email}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
