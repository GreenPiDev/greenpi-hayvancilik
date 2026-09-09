import { useState } from 'react'
import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'

export function NotFoundPage() {
  const [query, setQuery] = useState('')

  return (
    <div>
      <PageHeader title="Hata 404" breadcrumb="Hata 404" />
      <section className="py-24">
        <Container className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-5xl font-bold text-dark md:text-6xl">Sayfa Bulunamadı</h2>
            <p className="mx-auto mt-5 max-w-lg text-body">
              Aradığınız sayfa kaldırılmış, adı değiştirilmiş ya da hiç var olmamış olabilir.
            </p>

            <form
              className="mx-auto mt-8 flex max-w-md overflow-hidden rounded-[15px] border border-line"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Sitede ara..."
                className="w-full bg-transparent px-4 py-3 text-sm outline-none"
              />
              <button
                type="submit"
                className="bg-secondary px-6 text-sm font-semibold text-dark-2 transition-colors hover:bg-primary hover:text-white"
              >
                Ara
              </button>
            </form>

            <div className="mt-8">
              <Button to="/">Anasayfaya Dön</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
