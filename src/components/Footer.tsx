import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { services } from '../data/services'

const socialIcons: Record<string, ReactNode> = {
  facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
  instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16.2" cy="7.8" r="0.8" fill="currentColor" />
    </svg>
  ),
  twitter: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 6.5c-.6.3-1.3.5-2 .6.7-.4 1.2-1.1 1.5-1.9-.7.4-1.5.7-2.3.9A3.6 3.6 0 0 0 11 9c0 .3 0 .5.1.8-3-.2-5.6-1.6-7.4-3.8-.3.6-.5 1.2-.5 1.9 0 1.3.6 2.4 1.6 3.1-.6 0-1.1-.2-1.6-.4v.1c0 1.8 1.3 3.3 3 3.7-.3.1-.6.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.6 2.6A7.3 7.3 0 0 1 3 18.3 10.3 10.3 0 0 0 8.6 20c6.7 0 10.4-5.6 10.4-10.4v-.5c.7-.5 1.3-1.1 1.8-1.9Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 10.5V17M8 7.5v.01M12 17v-4c0-1.4.9-2.5 2.2-2.5s2 1 2 2.4V17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
}

export function Footer() {
  const footerServices = services.slice(0, 5)

  return (
    <footer className="relative overflow-hidden bg-dark text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/images/agrezen/footer-3.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3">
        <div>
          <Link to="/" className="font-heading text-2xl font-bold text-white">
            {site.name}
          </Link>
          <div className="mt-6 flex flex-col gap-3 text-sm text-white/80">
            <a href={`tel:${site.phone}`} className="flex items-center gap-3 transition hover:text-secondary">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2C10.5 19 5 13.5 4 6.5A2 2 0 0 1 6 4Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition hover:text-secondary">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
              {site.email}
            </a>
          </div>
          <div className="mt-6 flex gap-3">
            {Object.entries(site.socials).map(([key, url]) => (
              <a
                key={key}
                href={url}
                aria-label={key}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-primary hover:text-primary"
              >
                {socialIcons[key]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 flex items-center gap-2 text-base font-semibold text-white">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            Hizmetlerimiz
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-white/75">
            {footerServices.map((service) => (
              <li key={service.slug}>
                <Link to={`/service/${service.slug}`} className="flex items-center gap-2 transition hover:text-secondary">
                  <span aria-hidden="true">↗</span>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 flex items-center gap-2 text-base font-semibold text-white">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            Bültenimize Katılın
          </h4>
          <form className="flex overflow-hidden rounded-[15px] bg-white/10" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="E-posta adresiniz"
              className="w-full bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/40"
            />
            <button type="submit" className="flex items-center justify-center bg-secondary px-4 text-dark-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
          <p className="mt-4 text-sm leading-relaxed text-white/60">{site.description}</p>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
      </div>
    </footer>
  )
}
