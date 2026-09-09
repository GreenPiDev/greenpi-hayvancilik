import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

interface CarouselProps {
  children: ReactNode[]
  slideClassName?: string
  showArrows?: boolean
  showDots?: boolean
  loop?: boolean
  slidesPerView?: { base: string }
}

export function Carousel({
  children,
  slideClassName = 'flex-[0_0_100%]',
  showArrows = true,
  showDots = true,
  loop = true,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {children.map((child, i) => (
            <div className={slideClassName} key={i}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Önceki"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary transition hover:bg-primary hover:text-white"
          >
            ←
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Sonraki"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary transition hover:bg-primary hover:text-white"
          >
            →
          </button>
        </div>
      )}

      {showDots && !showArrows && (
        <div className="mt-6 flex justify-center gap-2">
          {children.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === selectedIndex ? 'bg-primary' : 'bg-light-2'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
