import { useState } from 'react'
import { Reveal } from '../components/Reveal'

interface FAQItem {
  question: string
  answer: string
}

const defaultItems: FAQItem[] = [
  {
    question: 'Hangi bölgelerde hizmet veriyorsunuz?',
    answer: 'Türkiye\'nin farklı bölgelerindeki çiftliklere saha ziyaretleri ve uzaktan danışmanlık desteği sunuyoruz.',
  },
  {
    question: 'Danışmanlık süreci nasıl işliyor?',
    answer: 'Çiftliğinizi ziyaret edip mevcut durumu analiz ediyor, ardından size özel bir aksiyon planı hazırlıyoruz.',
  },
  {
    question: 'Dijital takip sistemleri hangi cihazlarla uyumlu?',
    answer: 'Sistemlerimiz mobil ve masaüstü tarayıcılar üzerinden erişilebilir, ek bir donanım gerektirmez.',
  },
  {
    question: 'Organik sertifikasyon sürecinde destek veriyor musunuz?',
    answer: 'Evet, organik sertifikasyon süreçlerinde gerekli dokümantasyon ve saha uygulamaları konusunda rehberlik ediyoruz.',
  },
  {
    question: 'Küçük ölçekli çiftliklerle de çalışıyor musunuz?',
    answer: 'Her ölçekten çiftlikle çalışıyoruz; hizmetlerimizi işletmenizin büyüklüğüne göre uyarlıyoruz.',
  },
]

export function FAQAccordion({ items = defaultItems }: { items?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <Reveal key={item.question} delay={i * 0.05}>
            <div className="overflow-hidden rounded-2xl border border-line">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 bg-white px-6 py-4 text-left font-semibold text-dark"
              >
                {item.question}
                <span className={`text-primary transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
              </button>
              {isOpen && <div className="border-t border-line bg-cream px-6 py-4 text-sm text-body">{item.answer}</div>}
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
