import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { Reveal } from '../components/Reveal'
import { site } from '../data/site'

function SectionTitle({ children }: { children: string }) {
  return (
    <h3 className="mt-8 flex items-center gap-2 text-lg font-semibold text-dark">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 text-primary">
        <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      {children}
    </h3>
  )
}

export function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader title="Gizlilik Politikası" breadcrumb="Gizlilik Politikası" />
      <section className="py-24">
        <Container className="mx-auto max-w-3xl">
          <Reveal className="rounded-2xl border border-line p-8 leading-relaxed text-body md:p-12">
            <p>
              {site.name} olarak, web sitemiz üzerinden bizimle iletişime geçen ziyaretçilerin kişisel verilerinin
              gizliliğine önem veriyoruz. Bu sayfa, hangi bilgileri topladığımızı ve bu bilgileri nasıl kullandığımızı
              açıklamaktadır.
            </p>

            <SectionTitle>Toplanan Bilgiler</SectionTitle>
            <p className="mt-3">
              İletişim formu aracılığıyla ad, soyad, e-posta adresi ve telefon numarası gibi bilgiler tarafımıza
              iletilebilir. Bu bilgiler yalnızca talebinize yanıt vermek amacıyla kullanılır.
            </p>

            <SectionTitle>Bilgilerin Kullanımı</SectionTitle>
            <p className="mt-3">
              Paylaştığınız bilgiler üçüncü taraflarla paylaşılmaz; yalnızca sizinle iletişim kurmak ve talep
              ettiğiniz hizmet hakkında bilgi vermek amacıyla kullanılır.
            </p>

            <SectionTitle>İletişim</SectionTitle>
            <p className="mt-3">
              Gizlilik politikamızla ilgili sorularınız için{' '}
              <a href={`mailto:${site.email}`} className="font-semibold text-primary hover:text-primary-dark">
                {site.email}
              </a>{' '}
              adresinden bize ulaşabilirsiniz.
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
