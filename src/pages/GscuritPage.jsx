import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteContent } from '../data/siteContent'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import GradientTitle from '../components/ui/GradientTitle'

gsap.registerPlugin(ScrollTrigger)

const e = siteContent.entities.gscurit
const contact = siteContent.contact.gscurit

export default function GscuritPage() {
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

  const zoneIntervention = e.zone ?? 'TODO'

  return (
    <main className="min-w-0">
      {/* 1. Hero : titre + sous-titre + CTA */}
      <section className="relative border-b border-white/10 bg-background" aria-labelledby="gscurit-hero-title">
        <div
          className="min-h-[280px] w-full bg-gradient-to-br from-surface to-background md:min-h-[320px]"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="mx-auto w-full max-w-2xl px-4 py-12 text-center md:px-6">
            <GradientTitle id="gscurit-hero-title" className="font-display text-4xl tracking-wide md:text-5xl">
              {e.nom}
            </GradientTitle>
            <p className="mt-3 text-text-secondary">
              {e.sousTitre}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button variant="primary" to="/contact">
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Domaines d'intervention */}
      <section
        ref={(el) => { sectionRefs.current[0] = el }}
        className="border-b border-white/10 py-16 md:py-20"
        aria-labelledby="section-domaines"
      >
        <Container>
          <SectionTitle id="section-domaines" title="Domaines d'intervention" className="mb-8 text-center md:text-left" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {e.domaines.map((d) => (
              <Card key={d.code} className="text-center md:text-left">
                <p className="font-display text-lg text-accent">{d.code}</p>
                <p className="mt-1 text-text-primary">{d.libelle}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Agréments & certifications (cartes séparées) */}
      <section
        ref={(el) => { sectionRefs.current[1] = el }}
        className="border-b border-white/10 py-16 md:py-20"
        aria-labelledby="section-agrements"
      >
        <Container>
          <SectionTitle id="section-agrements" title="Agréments & certifications" className="mb-8 text-center md:text-left" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <p className="font-medium text-text-primary">Organisme agréé CNAPS</p>
              <p className="mt-1 text-sm text-text-secondary">Conformité et habilitation</p>
            </Card>
            <Card>
              <p className="font-medium text-text-primary">Carte professionnelle</p>
              <p className="mt-1 break-all text-sm text-text-secondary">{e.agrements.cartePro}</p>
            </Card>
            <Card>
              <p className="font-medium text-text-primary">Agrément dirigeant</p>
              <p className="mt-1 break-all text-sm text-text-secondary">{e.agrements.agrementDirigeant}</p>
            </Card>
            <Card>
              <p className="font-medium text-text-primary">SIRET</p>
              <p className="mt-1 text-text-secondary">{e.agrements.siret}</p>
            </Card>
            <Card>
              <p className="font-medium text-text-primary">Numéro déclaration activité</p>
              <p className="mt-1 text-text-secondary">{e.agrements.numeroDeclarationActivite}</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* 4. Contact email + zone d'intervention */}
      <section
        ref={(el) => { sectionRefs.current[2] = el }}
        className="py-16 md:py-20"
        aria-labelledby="section-contact-gscurit"
      >
        <Container>
          <SectionTitle id="section-contact-gscurit" title="Contact" className="mb-8 text-center md:text-left" />
          <div className="mx-auto max-w-xl space-y-6 text-center md:text-left">
            <div>
              <p className="font-medium text-text-primary">Email</p>
              <a href={`mailto:${e.legal.email}`} className="text-text-secondary hover:text-accent">
                {e.legal.email}
              </a>
            </div>
            <div>
              <p className="font-medium text-text-primary">Zone d'intervention</p>
              <p className="text-text-secondary">{zoneIntervention}</p>
            </div>
            <div className="pt-4">
              <Button variant="primary" to="/contact">
                Demander un devis
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
