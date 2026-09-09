import { Navigate, useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { PageHeader } from '../sections/PageHeader'
import { Reveal } from '../components/Reveal'
import { team } from '../data/team'

export function TeamDetailPage() {
  const { slug } = useParams()
  const member = team.find((m) => m.slug === slug)

  if (!member) return <Navigate to="/team" replace />

  return (
    <div>
      <PageHeader title={member.name} breadcrumb="Ekibimiz" />
      <section className="py-20">
        <Container className="grid gap-12 md:grid-cols-[360px_1fr]">
          <Reveal direction="left">
            <img src={member.photo} alt={member.name} className="aspect-square w-full rounded-2xl object-cover" />
          </Reveal>
          <Reveal direction="right">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">{member.role}</span>
            <h2 className="mt-2 text-2xl font-bold text-dark">{member.name}</h2>
            <p className="mt-4 leading-relaxed text-body">{member.bio}</p>
            <div className="mt-6 flex gap-3">
              {Object.entries(member.socials).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-xs uppercase text-muted transition hover:border-primary hover:text-primary"
                >
                  {key[0]}
                </a>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
