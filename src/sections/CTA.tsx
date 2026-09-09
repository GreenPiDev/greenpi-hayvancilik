import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'

interface CTAProps {
  title: string
  description?: string
  buttonLabel?: string
  buttonTo?: string
}

export function CTA({
  title,
  description,
  buttonLabel = 'İletişime Geçin',
  buttonTo = '/contact-us',
}: CTAProps) {
  return (
    <section className="bg-primary py-16 text-white">
      <Reveal className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h3 className="text-2xl font-bold md:text-3xl">{title}</h3>
          {description && <p className="mt-2 text-white/80">{description}</p>}
        </div>
        <Button to={buttonTo} variant="dark" className="shrink-0">
          {buttonLabel}
        </Button>
      </Reveal>
    </section>
  )
}
