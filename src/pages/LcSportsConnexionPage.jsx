import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteContent } from '../data/siteContent'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import GradientTitle from '../components/ui/GradientTitle'

gsap.registerPlugin(ScrollTrigger)

const e = siteContent.entities.lcSportsConnexion
const contact = siteContent.contact.lcSportsConnexion

function PlaceholderImage({ className = '', label = '' }) {
  return (
    <div
      className={`relative group flex min-h-[300px] items-center justify-center rounded-card overflow-hidden glass ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-surface to-background opacity-50 group-hover:opacity-30 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-20 group-hover:scale-105 transition-transform duration-1000" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30 group-hover:bg-accent group-hover:text-white transition-colors duration-500 text-accent">
          <span className="text-2xl">🥋</span>
        </div>
        {label ? <span className="text-sm font-bold uppercase tracking-[0.2em] text-text-secondary group-hover:text-text-primary transition-colors">{label}</span> : null}
      </div>
    </div>
  )
}

export default function LcSportsConnexionPage() {
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

  return (
    <main className="min-w-0 bg-background">
      {/* 1. Hero (dynamique sport) + CTA Réserver un cours d'essai */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden"
        aria-labelledby="sports-hero-title"
      >
        <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-br from-surface to-background opacity-50" aria-hidden />
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-10" aria-hidden />

        <Container className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-[10px] font-bold uppercase tracking-widest text-accent">
            Association Sportive & Coaching
          </div>
          <GradientTitle id="sports-hero-title" className="font-display text-5xl md:text-8xl tracking-tighter uppercase mb-6">
            {e.nom}
          </GradientTitle>
          <p className="mt-6 text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            {e.positionnement}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Button variant="primary" to="/contact" className="px-8 py-4">
              Réserver un cours d'essai
            </Button>
            <Button variant="secondary" to="/contact" className="px-8 py-4">
              Nous contacter
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. Positionnement (association dédiée) */}
      <section
        ref={(el) => { sectionRefs.current[0] = el }}
        className="py-24 md:py-32"
        aria-labelledby="section-positionnement"
      >
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle id="section-positionnement" title="Positionnement" className="mb-8" />
              <p className="text-lg leading-relaxed text-text-secondary mb-10">{e.positionnement}</p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {e.positionnementListe.map((item) => (
                  <li key={item} className="p-4 rounded-xl glass flex items-center gap-3 group transition-all duration-300 hover:border-accent/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                    <span className="text-sm font-medium text-text-primary whitespace-nowrap">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <PlaceholderImage className="lg:h-full" label="Art Martial & Discipline" />
          </div>
        </Container>
      </section>

      {/* 3. Disciplines (cards) */}
      <section
        ref={(el) => { sectionRefs.current[1] = el }}
        className="py-24 md:py-32 bg-surface/30 border-y border-white/5"
        aria-labelledby="section-disciplines"
      >
        <Container>
          <SectionTitle id="section-disciplines" title="Nos Disciplines" subtitle="Un éventail complet d'arts martiaux pour tous niveaux." className="mb-16" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {e.disciplines.map((name) => (
              <div
                key={name}
                className="group relative p-10 rounded-card glass glass-hover overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-accent-glow"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="text-6xl text-accent">🥊</span>
                </div>
                <h3 className="relative z-10 font-display text-3xl tracking-widest text-text-primary uppercase group-hover:text-accent transition-colors">{name}</h3>
                <div className="mt-4 w-12 h-1 bg-accent/20 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Méthodologie (liste + icônes) */}
      <section
        ref={(el) => { sectionRefs.current[2] = el }}
        className="py-24 md:py-32"
        aria-labelledby="section-methodologie"
      >
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <PlaceholderImage className="order-2 lg:order-1" label="Méthode de Combat" />
            <div className="order-1 lg:order-2">
              <SectionTitle id="section-methodologie" title="Méthodologie" className="mb-8" />
              <div className="space-y-6">
                {e.methodologie.map((item) => (
                  <div key={item} className="flex gap-4 group">
                    <div className="mt-1.5 shrink-0 w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center transition-colors group-hover:bg-accent group-hover:border-accent">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-white" />
                    </div>
                    <span className="text-text-primary text-lg font-light leading-relaxed group-hover:text-accent transition-colors">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 rounded-2xl glass-accent bg-accent/[0.03] border-l-4 border-l-accent">
                <p className="text-text-primary font-medium italic">
                  "{e.methodologieExigence}"
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Activités spécifiques (grid) */}
      <section
        ref={(el) => { sectionRefs.current[3] = el }}
        className="py-24 md:py-32 bg-surface/30 border-y border-white/5"
        aria-labelledby="section-activites"
      >
        <Container>
          <SectionTitle id="section-activites" title="Activités Spécifiques" subtitle="Des événements et ateliers pour forger le corps et l'esprit." className="mb-16" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {e.activites.map((item) => (
              <div
                key={item}
                className="p-6 rounded-xl glass flex items-center justify-between group hover:bg-accent/[0.05] hover:border-accent/30 transition-all duration-300"
              >
                <span className="text-sm font-bold uppercase tracking-widest text-text-primary group-hover:text-accent transition-colors">{item}</span>
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Zone d'intervention */}
      <section
        ref={(el) => { sectionRefs.current[4] = el }}
        className="py-24 md:py-32"
        aria-labelledby="section-zone"
      >
        <Container className="text-center">
          <SectionTitle id="section-zone" title="Rayon d'Action" className="mb-8 items-center" />
          <div className="max-w-2xl mx-auto p-12 rounded-card glass border-dashed border-2">
            <p className="text-2xl text-text-primary font-light uppercase tracking-widest leading-relaxed">
              Intervention en <span className="text-accent font-bold">{e.zone}</span>
            </p>
          </div>
        </Container>
      </section>

      {/* 7. Infos contact (tel/mail) */}
      <section
        ref={(el) => { sectionRefs.current[5] = el }}
        className="py-24 md:py-32 bg-accent/[0.02]"
        aria-labelledby="section-contact"
      >
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="p-8 rounded-2xl glass text-center group transition-all duration-300 hover:border-accent/30">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors">📱</div>
              <p className="font-display text-xl uppercase tracking-widest text-text-primary mb-2">Téléphone</p>
              <a href={`tel:${contact.telephone.replace(/\s/g, '')}`} className="text-text-secondary text-lg hover:text-accent transition-colors">
                {contact.telephone}
              </a>
            </div>
            <div className="p-8 rounded-2xl glass text-center group transition-all duration-300 hover:border-accent/30">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors">✉️</div>
              <p className="font-display text-xl uppercase tracking-widest text-text-primary mb-2">Email</p>
              <a href={`mailto:${contact.email}`} className="text-text-secondary text-lg hover:text-accent transition-colors break-all">
                {contact.email}
              </a>
            </div>
            <div className="p-8 rounded-2xl glass text-center group transition-all duration-300 hover:border-accent/30">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors">📋</div>
              <p className="font-display text-xl uppercase tracking-widest text-text-primary mb-2">{e.legal.role}</p>
              <p className="text-text-secondary text-lg">{e.legal.responsable}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. CTA Réserver / Contacter */}
      <section
        ref={(el) => { sectionRefs.current[6] = el }}
        className="py-24 md:py-40 bg-gradient-to-t from-accent/5 to-transparent text-center"
        aria-labelledby="section-cta-sports"
      >
        <Container>
          <h2 className="font-display text-5xl md:text-7xl tracking-tighter uppercase mb-8">Rejoignez l'élite</h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">Réservez votre premier cours dès aujourd'hui et commencez votre transformation.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="primary" to="/contact" className="px-10 py-5 text-base">
              Réserver un cours d'essai
            </Button>
            <Button variant="secondary" to="/contact" className="px-10 py-5 text-base">
              Nous contacter
            </Button>
          </div>
        </Container>
      </section>
    </main>
  )
}
