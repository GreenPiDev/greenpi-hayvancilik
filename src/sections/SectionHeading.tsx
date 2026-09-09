import { Reveal } from '../components/Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({ eyebrow, title, description, align = 'center', light = false }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <Reveal className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl font-bold md:text-4xl ${light ? 'text-white' : 'text-dark'}`}>{title}</h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-body'}`}>{description}</p>
      )}
    </Reveal>
  )
}
