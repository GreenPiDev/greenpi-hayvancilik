import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import type { TeamMember } from '../types/content'

export function TeamGrid({ members, columns = 3 }: { members: TeamMember[]; columns?: 2 | 3 | 4 }) {
  const colsClass = columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 gap-8 ${colsClass}`}>
      {members.map((member, i) => (
        <Reveal key={member.slug} delay={i * 0.08}>
          <Link to={`/team/${member.slug}`} className="group relative block aspect-[3/4] overflow-hidden rounded-2xl">
            <img
              src={member.photo}
              alt={member.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-secondary">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-white/75">{member.role}</p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
