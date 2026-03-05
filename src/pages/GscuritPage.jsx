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

  const zoneIntervention = e.zone ?? 'TODO'

  return (
    <main className="min-w-0 bg-background text-text-primary">
      {/* 1. Hero : titre + sous-titre + CTA */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden"
        aria-labelledby="gscurit-hero-title"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-surface to-background opacity-80" aria-hidden />
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2030&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-5" aria-hidden />

        <Container className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-accent/20 bg-background/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Audit & Expertise Agréée</span>
          </div>
          <GradientTitle id="gscurit-hero-title" className="font-display text-5xl md:text-8xl tracking-tighter uppercase mb-6">
            {e.nom}
          </GradientTitle>
          <p className="mt-6 text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            {e.sousTitre}
          </p>
          <div className="mt-10">
            <Button variant="primary" to="/contact" className="px-10 py-5">
              Demander une expertise
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. Domaines d'intervention */}
      <section
        ref={(el) => { sectionRefs.current[0] = el }}
        className="py-24 md:py-32"
        aria-labelledby="section-domaines"
      >
        <Container>
          <SectionTitle id="section-domaines" title="Domaines d'Intervention" subtitle="Une expertise technique pointue au service de votre conformité." className="mb-16" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {e.domaines.map((d) => (
              <div
                key={d.code}
                className="group p-10 rounded-card glass transition-all duration-300 hover:bg-accent/[0.05] hover:border-accent/30 hover:-translate-y-2"
              >
                <p className="font-display text-4xl text-accent/20 group-hover:text-accent transition-colors mb-4">{d.code}</p>
                <div className="w-8 h-px bg-white/10 group-hover:w-full transition-all duration-500 mb-6" />
                <p className="text-xl font-light tracking-wide text-text-primary uppercase">{d.libelle}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Agréments & certifications */}
      <section
        ref={(el) => { sectionRefs.current[1] = el }}
        className="py-24 md:py-32 bg-surface/30 border-y border-white/5"
        aria-labelledby="section-agrements"
      >
        <Container>
          <SectionTitle id="section-agrements" title="Habilitations & Agréments" className="mb-16" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 rounded-2xl glass flex flex-col justify-center items-center text-center group hover:border-accent/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">✓</div>
              <p className="font-display text-xl uppercase tracking-widest text-text-primary">Organisme agréé CNAPS</p>
              <p className="mt-2 text-sm text-text-secondary">Conformité et habilitation d'État</p>
            </div>

            <div className="p-8 rounded-2xl glass flex flex-col justify-center items-center text-center group hover:border-accent/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">📇</div>
              <p className="font-display text-xl uppercase tracking-widest text-text-primary">Carte Professionnelle</p>
              <p className="mt-2 text-[10px] break-all text-text-secondary font-mono bg-black/20 p-2 rounded">{e.agrements.cartePro}</p>
            </div>

            <div className="p-8 rounded-2xl glass flex flex-col justify-center items-center text-center group hover:border-accent/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">🏛️</div>
              <p className="font-display text-xl uppercase tracking-widest text-text-primary">Agrément Dirigeant</p>
              <p className="mt-2 text-[10px] break-all text-text-secondary font-mono bg-black/20 p-2 rounded">{e.agrements.agrementDirigeant}</p>
            </div>

            <div className="p-8 rounded-2xl glass flex flex-col justify-center group hover:border-accent/30 transition-all">
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Identification</p>
              <p className="font-display text-xl uppercase tracking-widest text-text-primary">SIRET</p>
              <p className="mt-1 text-text-secondary font-mono">{e.agrements.siret}</p>
            </div>

            <div className="p-8 rounded-2xl glass flex flex-col justify-center group hover:border-accent/30 transition-all sm:col-span-2 lg:col-span-1">
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Certification</p>
              <p className="font-display text-xl uppercase tracking-widest text-text-primary">Déclaration d'activité</p>
              <p className="mt-1 text-text-secondary font-mono">{e.agrements.numeroDeclarationActivite}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Contact email + zone d'intervention */}
      <section
        ref={(el) => { sectionRefs.current[2] = el }}
        className="py-24 md:py-32"
        aria-labelledby="section-contact-gscurit"
      >
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="p-12 rounded-card glass-accent bg-accent/[0.02] border-l-4 border-accent">
              <SectionTitle id="section-contact-gscurit" title="Contact Expertise" className="mb-8" />
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Canal Officiel</p>
                  <a href={`mailto:${e.legal.email}`} className="text-2xl md:text-3xl font-light text-text-primary hover:text-accent transition-colors break-all">
                    {e.legal.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Périmètre d'Intervention</p>
                  <p className="text-xl text-text-secondary font-light uppercase tracking-widest leading-relaxed">
                    Déplacements sur <span className="text-text-primary font-bold">{zoneIntervention}</span>
                  </p>
                </div>
              </div>
              <div className="mt-12">
                <Button variant="primary" to="/contact" className="px-10 py-5">
                  Lancer un audit
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/10 blur-3xl opacity-20" />
              <div className="relative aspect-square rounded-card overflow-hidden glass">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-20 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-center p-6 glass rounded-xl">
                  <p className="text-sm font-bold uppercase tracking-widest text-accent mb-1">Rigueur & Confidentialité</p>
                  <p className="text-[10px] text-text-secondary">Tous nos audits sont soumis au secret professionnel.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
