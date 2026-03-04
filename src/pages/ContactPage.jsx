import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { siteContent } from '../data/siteContent'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Accordion from '../components/ui/Accordion'
import GradientTitle from '../components/ui/GradientTitle'

gsap.registerPlugin(ScrollTrigger)

const { contact: contactData, entities } = siteContent

const TEL_LINK = 'tel:+33781745985'
const WHATSAPP_LINK = 'https://wa.me/33781745985'

const CARDS = [
  {
    key: 'forma',
    nom: entities.lcFormaPro.nom,
    sousTitre: 'Formation professionnelle',
    email: contactData.lcFormaPro.email,
  },
  {
    key: 'sports',
    nom: entities.lcSportsConnexion.nom,
    sousTitre: 'Cours / Coaching',
    email: contactData.lcSportsConnexion.email,
  },
  {
    key: 'gscurit',
    nom: entities.gscurit.nom,
    sousTitre: 'CNAPS / Conseil',
    email: contactData.gscurit.email,
  },
]

export default function ContactPage() {
  const sectionRefs = useRef([])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((el) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  const faqItems = contactData.faq.map((f) => ({
    id: f.id,
    title: f.question,
    content: f.answer,
  }))

  return (
    <main className="min-w-0">
      {/* 1. Hero */}
      <section className="relative border-b border-white/10 bg-background" aria-labelledby="contact-hero-title">
        <div
          className="min-h-[240px] w-full bg-gradient-to-br from-surface to-background md:min-h-[280px]"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="mx-auto w-full max-w-2xl px-4 py-12 text-center md:px-6">
            <GradientTitle id="contact-hero-title" className="font-display text-4xl tracking-wide md:text-5xl">
              {contactData.heroTitle}
            </GradientTitle>
            <p className="mt-3 text-text-secondary">
              {contactData.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Choisir votre demande (3 cards, 3 boutons chacune) */}
      <section
        ref={(el) => { sectionRefs.current[0] = el }}
        className="border-b border-white/10 py-16 md:py-20"
        aria-labelledby="section-choix"
      >
        <Container>
          <SectionTitle id="section-choix" title="Choisir votre demande" className="mb-8 text-center md:text-left" />
          <div className="grid gap-6 md:grid-cols-3">
            {CARDS.map((card) => (
              <Card key={card.key} className="flex flex-col text-center md:text-left">
                <h3 className="font-display text-xl text-text-primary">{card.nom}</h3>
                <p className="mt-1 text-sm text-text-secondary">{card.sousTitre}</p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button href={TEL_LINK} variant="secondary" className="gap-2" aria-label="Appeler">
                    <Phone className="h-4 w-4 shrink-0" aria-hidden />
                    Appeler
                  </Button>
                  <Button href={`mailto:${card.email}`} variant="primary" className="gap-2" aria-label={`Envoyer un email à ${card.nom}`}>
                    <Mail className="h-4 w-4 shrink-0" aria-hidden />
                    Email
                  </Button>
                  <Button
                    href={WHATSAPP_LINK}
                    variant="secondary"
                    className="gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ouvrir une conversation WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                    WhatsApp
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. FAQ courte */}
      <section
        ref={(el) => { sectionRefs.current[1] = el }}
        className="py-16 md:py-20"
        aria-labelledby="section-faq"
      >
        <Container>
          <SectionTitle id="section-faq" title="FAQ" className="mb-8 text-center md:text-left" />
          {faqItems.length > 0 ? (
            <Accordion
              items={faqItems.map((f) => ({
                id: f.id,
                title: f.title,
                content: <p>{f.content}</p>,
              }))}
            />
          ) : (
            <p className="text-text-secondary">TODO</p>
          )}
        </Container>
      </section>
    </main>
  )
}
