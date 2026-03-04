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
      className={`flex min-h-[200px] items-center justify-center rounded-card border border-white/10 bg-gradient-to-br from-surface to-background ${className}`}
      aria-hidden
    >
      {label ? <span className="text-sm text-text-secondary">{label}</span> : null}
    </div>
  )
}

export default function LcSportsConnexionPage() {
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

  return (
    <main className="min-w-0">
      {/* 1. Hero (dynamique sport) + CTA Réserver un cours d'essai */}
      <section className="relative border-b border-white/10 bg-background" aria-labelledby="sports-hero-title">
        <div
          className="min-h-[280px] w-full bg-gradient-to-br from-surface to-background md:min-h-[320px]"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="mx-auto w-full max-w-2xl px-4 py-12 text-center md:px-6">
            <GradientTitle id="sports-hero-title" className="font-display text-4xl tracking-wide md:text-5xl">
              {e.nom}
            </GradientTitle>
            <p className="mt-3 text-text-secondary">
              {e.positionnement}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button variant="primary" to="/contact">
                Réserver un cours d'essai
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Positionnement (association dédiée) */}
      <section
        ref={(el) => { sectionRefs.current[0] = el }}
        className="border-b border-white/10 py-16 md:py-20"
        aria-labelledby="section-positionnement"
      >
        <Container>
          <SectionTitle id="section-positionnement" title="Positionnement" className="mb-8 text-center md:text-left" />
          <p className="max-w-3xl text-text-secondary">{e.positionnement}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {e.positionnementListe.map((item) => (
              <li key={item} className="flex items-center gap-2 text-text-primary">
                <span className="text-accent" aria-hidden>●</span>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3. Disciplines (cards) */}
      <section
        ref={(el) => { sectionRefs.current[1] = el }}
        className="border-b border-white/10 py-16 md:py-20"
        aria-labelledby="section-disciplines"
      >
        <Container>
          <SectionTitle id="section-disciplines" title="Disciplines" className="mb-8 text-center md:text-left" />
          <PlaceholderImage className="mb-8" label="Disciplines" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {e.disciplines.map((name) => (
              <Card key={name} className="text-center md:text-left">
                <h3 className="font-display text-xl text-text-primary">{name}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Méthodologie (liste + icônes) */}
      <section
        ref={(el) => { sectionRefs.current[2] = el }}
        className="border-b border-white/10 py-16 md:py-20"
        aria-labelledby="section-methodologie"
      >
        <Container>
          <SectionTitle id="section-methodologie" title="Méthodologie" className="mb-8 text-center md:text-left" />
          <PlaceholderImage className="mb-8" label="Méthodologie" />
          <ul className="space-y-4">
            {e.methodologie.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-accent" aria-hidden>●</span>
                <span className="text-text-primary">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-lg border border-white/10 bg-surface px-4 py-3 text-text-secondary">
            {e.methodologieExigence}
          </p>
        </Container>
      </section>

      {/* 5. Activités spécifiques (grid) */}
      <section
        ref={(el) => { sectionRefs.current[3] = el }}
        className="border-b border-white/10 py-16 md:py-20"
        aria-labelledby="section-activites"
      >
        <Container>
          <SectionTitle id="section-activites" title="Activités spécifiques" className="mb-8 text-center md:text-left" />
          <PlaceholderImage className="mb-8" label="Activités" />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {e.activites.map((item) => (
              <li
                key={item}
                className="rounded-card border border-white/10 bg-surface px-4 py-3 text-text-primary"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 6. Zone d'intervention */}
      <section
        ref={(el) => { sectionRefs.current[4] = el }}
        className="border-b border-white/10 py-16 md:py-20"
        aria-labelledby="section-zone"
      >
        <Container>
          <SectionTitle id="section-zone" title="Zone d'intervention" className="mb-8 text-center md:text-left" />
          <p className="max-w-2xl text-text-secondary">{e.zone}</p>
        </Container>
      </section>

      {/* 7. Infos contact (tel/mail) */}
      <section
        ref={(el) => { sectionRefs.current[5] = el }}
        className="border-b border-white/10 py-16 md:py-20"
        aria-labelledby="section-contact"
      >
        <Container>
          <SectionTitle id="section-contact" title="Contact" className="mb-8 text-center md:text-left" />
          <div className="flex flex-col gap-6 text-center sm:flex-row sm:justify-center md:text-left">
            <div>
              <p className="font-medium text-text-primary">Téléphone</p>
              <a href={`tel:${contact.telephone.replace(/\s/g, '')}`} className="text-text-secondary hover:text-accent">
                {contact.telephone}
              </a>
            </div>
            <div>
              <p className="font-medium text-text-primary">Email</p>
              <a href={`mailto:${contact.email}`} className="text-text-secondary hover:text-accent">
                {contact.email}
              </a>
            </div>
            <div>
              <p className="font-medium text-text-primary">{e.legal.role}</p>
              <p className="text-text-secondary">{e.legal.responsable}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. CTA Réserver / Contacter */}
      <section
        ref={(el) => { sectionRefs.current[6] = el }}
        className="py-16 md:py-20"
        aria-labelledby="section-cta-sports"
      >
        <Container>
          <SectionTitle
            id="section-cta-sports"
            title="Rejoignez-nous"
            subtitle="Réservez un cours d'essai ou contactez-nous pour plus d'informations."
            className="mb-10 text-center md:text-left"
          />
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Button variant="primary" to="/contact">
              Réserver un cours d'essai
            </Button>
            <Button variant="secondary" to="/contact">
              Contacter
            </Button>
          </div>
        </Container>
      </section>
    </main>
  )
}
