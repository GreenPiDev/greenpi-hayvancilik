import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import type { Service } from '../types/content'

interface ServicesGridProps {
  services: Service[]
  columns?: 2 | 3 | 4
  style?: 'classic' | 'modern' | 'pro'
}

const colsClass: Record<number, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
}

const iconPaths: Record<string, string> = {
  leaf: 'M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z',
  recycle: 'M7 5 4 10l3 5M17 19l3-5-3-5M9 5h6M9 19h6M4 10h4M16 10h4',
  truck: 'M3 7h11v9H3zM14 10h4l3 3v3h-7zM6.5 19a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM17 19a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Z',
  cpu: 'M7 7h10v10H7zM9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4',
  compass: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM15 9l-2 6-6 2 2-6 6-2Z',
  sun: 'M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
  monitor: 'M3 5h18v11H3zM8 20h8M12 16v4',
  wheat: 'M12 21V9M12 12c0-4.5 3.5-7 8-7 0 4.5-3.5 7-8 7ZM12 15c0-3.5-2.8-5.8-6.5-5.8 0 3.5 2.8 5.8 6.5 5.8Z',
}

function ServiceIcon({ icon }: { icon: string }) {
  const path = iconPaths[icon] ?? iconPaths.leaf
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d={path} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ServicesGrid({ services, columns = 3, style = 'classic' }: ServicesGridProps) {
  return (
    <div className={`grid grid-cols-1 gap-8 ${colsClass[columns]}`}>
      {services.map((service, i) => (
        <Reveal key={service.slug} delay={i * 0.08}>
          <Link
            to={`/service/${service.slug}`}
            className={`group flex h-full flex-col rounded-2xl border border-line p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${
              style === 'pro' ? 'bg-cream' : 'bg-white'
            }`}
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <ServiceIcon icon={service.icon} />
            </div>
            <h3 className="text-lg font-semibold text-dark">{service.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{service.summary}</p>
            <span className="mt-5 text-sm font-semibold text-primary">Devamını Oku →</span>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
