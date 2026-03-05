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
    icon: '📋',
  },
  {
    key: 'sports',
    nom: entities.lcSportsConnexion.nom,
    sousTitre: 'Cours / Coaching',
    email: contactData.lcSportsConnexion.email,
    icon: '🥋',
  },
  {
    key: 'gscurit',
    nom: entities.gscurit.nom,
    sousTitre: 'CNAPS / Conseil',
    email: contactData.gscurit.email,
    icon: '🛡️',
  },
]

export default function ContactPage() {
  const sectionRefs = useRef([])
  const heroRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      }
      sectionRefs.current.forEach((el) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
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
    <main className="min-w-0 bg-background text-text-primary">
      {/* 1. Hero */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden"
        aria-labelledby="contact-hero-title"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-accent/[0.05] to-transparent" aria-hidden />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

        <Container className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-[10px] font-bold uppercase tracking-widest text-accent">
            Prise de contact rapide
          </div>
          <GradientTitle id="contact-hero-title" className="font-display text-5xl md:text-8xl tracking-tighter uppercase mb-6">
            {contactData.heroTitle}
          </GradientTitle>
          <p className="mt-6 text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            {contactData.heroSubtitle}
          </p>
        </Container>
      </section>

      {/* 2. Choisir votre demande */}
      <section
        ref={(el) => { sectionRefs.current[0] = el }}
        className="py-24 md:py-32"
        aria-labelledby="section-choix"
      >
        <Container>
          <SectionTitle id="section-choix" title="Pôles de Contact" subtitle="Sélectionnez l'entité concernée par votre demande pour une réponse plus rapide." className="mb-16" />
          <div className="grid gap-8 md:grid-cols-3">
            {CARDS.map((card) => (
              <div
                key={card.key}
                className="group relative p-10 rounded-card glass transition-all duration-300 hover:bg-accent/[0.05] hover:border-accent/30 hover:-translate-y-2 hover:shadow-accent-glow"
              >
                <div className="absolute top-6 right-6 text-4xl opacity-10 group-hover:opacity-30 transition-opacity">
                  {card.icon}
                </div>
                <h3 className="font-display text-2xl tracking-widest text-text-primary uppercase mb-2 group-hover:text-accent transition-colors">{card.nom}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-8">{card.sousTitre}</p>

                <div className="flex flex-col gap-4">
                  <Button href={TEL_LINK} variant="secondary" className="gap-3 justify-center text-xs tracking-widest uppercase py-4" aria-label="Appeler">
                    <Phone className="h-4 w-4 shrink-0" aria-hidden />
                    Ligne Directe
                  </Button>
                  <Button href={`mailto:${card.email}`} variant="primary" className="gap-3 justify-center text-xs tracking-widest uppercase py-4" aria-label={`Envoyer un email à ${card.nom}`}>
                    <Mail className="h-4 w-4 shrink-0" aria-hidden />
                    Messagerie
                  </Button>
                  <Button
                    href={WHATSAPP_LINK}
                    variant="outline"
                    className="gap-3 justify-center text-xs tracking-widest uppercase py-4 group/btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 group-hover/btn:scale-110 transition-transform" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. FAQ */}
      <section
        ref={(el) => { sectionRefs.current[1] = el }}
        className="py-24 md:py-32 bg-surface/30 border-y border-white/5"
        aria-labelledby="section-faq"
      >
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle id="section-faq" title="FAQ" subtitle="Réponses aux questions les plus fréquentes concernant nos services." className="mb-12" />
              <div className="p-8 rounded-card glass border-dashed bg-accent/[0.01]">
                {faqItems.length > 0 ? (
                  <Accordion
                    items={faqItems.map((f) => ({
                      id: f.id,
                      title: f.title,
                      content: <p className="text-text-secondary leading-relaxed">{f.content}</p>,
                    }))}
                  />
                ) : (
                  <p className="text-text-secondary">Informations en cours de mise à jour.</p>
                )}
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-card">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt="Support client"
                className="grayscale opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 border border-accent/30">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-display text-3xl uppercase tracking-tighter mb-4">Réponse sous 24h</h4>
                <p className="text-sm font-light text-text-secondary tracking-widest uppercase">Expertise terrain garantie</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer CTA */}
      <section
        ref={(el) => { sectionRefs.current[2] = el }}
        className="py-24 md:py-40 bg-gradient-to-t from-accent/5 to-transparent text-center"
      >
        <Container>
          <h2 className="font-display text-5xl md:text-7xl tracking-tighter uppercase mb-8">Urgence ou demande spécifique ?</h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">Notre équipe d'experts est à votre disposition pour toute intervention prioritaire.</p>
          <Button href={TEL_LINK} variant="primary" className="px-12 py-5 text-base">
            Appel Immédiat
          </Button>
        </Container>
      </section>
    </main>
  )
}
