import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import type { PortfolioItem } from '../types/content'

export function PortfolioGrid({ items, columns = 3 }: { items: PortfolioItem[]; columns?: 2 | 3 | 4 }) {
  const colsClass = columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 gap-8 ${colsClass}`}>
      {items.map((item, i) => (
        <Reveal key={item.slug} delay={i * 0.06}>
          <Link to={`/portfolio/${item.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-secondary">{item.category}</span>
              <h3 className="mt-2 font-semibold text-white transition-colors group-hover:text-secondary">
                {item.title}
              </h3>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
