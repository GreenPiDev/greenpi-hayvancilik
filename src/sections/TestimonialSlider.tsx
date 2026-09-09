import { Carousel } from '../components/Carousel'
import { testimonials } from '../data/testimonials'

export function TestimonialSlider() {
  return (
    <Carousel slideClassName="flex-[0_0_100%] md:flex-[0_0_48%]" showArrows={false} showDots>
      {testimonials.map((t) => (
        <div key={t.name} className="flex h-full flex-col rounded-2xl border border-line bg-white p-8">
          <div className="mb-4 text-primary">{'★'.repeat(t.rating)}</div>
          <p className="flex-1 text-body italic">“{t.quote}”</p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/15 text-lg font-bold text-primary">
              {t.name.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-dark">{t.name}</div>
              <div className="text-sm text-muted">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}
