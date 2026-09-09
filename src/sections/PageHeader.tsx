import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'

export function PageHeader({ title, breadcrumb }: { title: string; breadcrumb: string }) {
  return (
    <section className="relative overflow-hidden bg-dark py-24 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/agrezen/section-bg-1.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark from-30% via-dark/85 to-dark/60" />
      <img
        src="/images/agrezen/shape-9.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 bottom-0 hidden w-56 opacity-95 md:block lg:w-72"
      />

      <Reveal className="relative mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl font-semibold text-white md:text-5xl">{title}</h1>
        <div className="mt-4 text-sm text-white/70">
          <Link to="/" className="hover:text-secondary">
            Anasayfa
          </Link>{' '}
          / <span className="text-secondary">{breadcrumb}</span>
        </div>
      </Reveal>
    </section>
  )
}
