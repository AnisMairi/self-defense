import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteContent } from '../data/siteContent'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Accordion from '../components/ui/Accordion'
import GradientTitle from '../components/ui/GradientTitle'

gsap.registerPlugin(ScrollTrigger)

const e = siteContent.entities.lcFormaPro

function PlaceholderImage({ className = '', label = '' }) {
  return (
    <div
      className={`relative group flex min-h-[300px] items-center justify-center rounded-card overflow-hidden glass ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-surface to-background opacity-50 group-hover:opacity-30 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-10 group-hover:scale-105 transition-transform duration-1000" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30 group-hover:bg-accent group-hover:text-white transition-colors duration-500 text-accent">
          <span className="text-2xl">📋</span>
        </div>
        {label ? <span className="text-sm font-bold uppercase tracking-[0.2em] text-text-secondary group-hover:text-text-primary transition-colors">{label}</span> : null}
      </div>
    </div>
  )
}

export default function LcFormaProPage() {
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

  const accordionItems = e.publics.map((p) => ({
    id: p.id,
    title: p.subtitle ? `${p.title} — ${p.subtitle}` : p.title,
    content: (
      <ul className="space-y-3 py-2">
        {p.items.map((item) => (
          <li key={item} className="flex items-start gap-3 group">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <span className="text-text-secondary group-hover:text-text-primary transition-colors">{item}</span>
          </li>
        ))}
      </ul>
    ),
  }))

  return (
    <main className="min-w-0 bg-background text-text-primary">
      {/* 1. Hero + slogan */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden"
        aria-labelledby="forma-hero-title"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-accent/[0.03] to-transparent" aria-hidden />

        <Container className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-[10px] font-bold uppercase tracking-widest text-accent">
            Formations Professionnelles Agréées
          </div>
          <GradientTitle id="forma-hero-title" className="font-display text-5xl md:text-8xl tracking-tighter uppercase mb-6">
            {e.nom}
          </GradientTitle>
          <p className="mt-6 text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            {e.slogan}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Button variant="primary" to="/contact" className="px-10 py-4">
              Demander un devis d'expert
            </Button>
            <Button variant="outline" to="/contact" className="px-10 py-4">
              Notre expertise
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. Présentation */}
      <section
        ref={(el) => { sectionRefs.current[0] = el }}
        className="py-24 md:py-32"
        aria-labelledby="section-presentation"
      >
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle id="section-presentation" title="Présentation" className="mb-8" />
              <p className="text-lg leading-relaxed text-text-secondary mb-10">{e.presentation}</p>
              <div className="p-8 rounded-2xl glass border-l-4 border-l-accent bg-accent/[0.02]">
                <p className="font-display text-xl uppercase tracking-widest text-text-primary mb-6">{e.approche.intro}</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {e.approche.modes.map((mode) => (
                    <div key={mode} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm font-medium">{mode}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <PlaceholderImage className="lg:h-full" label="Centre de Formation" />
          </div>
        </Container>
      </section>

      {/* 3. Formations techniques */}
      <section
        ref={(el) => { sectionRefs.current[1] = el }}
        className="py-24 md:py-32 bg-surface/30 border-y border-white/5"
        aria-labelledby="section-techniques"
      >
        <Container>
          <SectionTitle id="section-techniques" title="Cursus Techniques" subtitle="Expertise opérationnelle et tactique pour les professionnels de la sécurité." className="mb-16" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {e.formationsTechniques.map((f) => (
              <div key={f} className="p-6 rounded-xl glass flex items-center gap-4 group hover:bg-accent/[0.05] hover:border-accent/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold group-hover:bg-accent group-hover:text-white transition-colors">
                  <span className="text-xs">PRO</span>
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-text-primary group-hover:text-accent transition-colors">{f}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Formations complémentaires */}
      <section
        ref={(el) => { sectionRefs.current[2] = el }}
        className="py-24 md:py-32"
        aria-labelledby="section-complementaires"
      >
        <Container>
          <SectionTitle id="section-complementaires" title="Modules Complémentaires" subtitle="Élargissez votre spectre de compétences avec nos modules spécialisés." className="mb-16" />
          <div className="grid gap-6 sm:grid-cols-2">
            {e.formationsComplementaires.map((f) => (
              <div key={f} className="p-8 rounded-card glass border-dashed flex items-center justify-between group hover:border-accent/50 transition-all duration-300">
                <span className="text-lg font-light text-text-primary group-hover:text-accent transition-colors">{f}</span>
                <span className="w-10 h-px bg-accent/30 group-hover:w-20 transition-all duration-500" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Publics concernés (accordéons) */}
      <section
        ref={(el) => { sectionRefs.current[3] = el }}
        className="py-24 md:py-32 bg-surface/30 border-y border-white/5"
        aria-labelledby="section-publics"
      >
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionTitle id="section-publics" title="Publics Visés" subtitle="Nos programmes s'adressent à une large gamme d'acteurs de la sécurité." className="mb-12" />
              <Accordion items={accordionItems} />
            </div>
            <PlaceholderImage label="Profils Professionnels" />
          </div>
        </Container>
      </section>

      {/* 6. Aide & préparation */}
      <section
        ref={(el) => { sectionRefs.current[4] = el }}
        className="py-24 md:py-32"
        aria-labelledby="section-aide"
      >
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionTitle id="section-aide" title="Accompagnement d'Excellence" className="mb-12 items-center text-center" />
            <div className="grid gap-12 md:grid-cols-2">
              <div className="p-10 rounded-card glass transition-all hover:bg-accent/[0.02]">
                <h4 className="font-display text-2xl uppercase tracking-widest text-accent mb-6">Préparation Opérationnelle</h4>
                <p className="text-text-secondary mb-8 leading-relaxed font-light italic">{e.aidePreparation.intro}</p>
                <div className="space-y-4">
                  {e.aidePreparation.epreuves.map((ep) => (
                    <div key={ep} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-sm font-medium">{ep}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-10 rounded-card glass transition-all hover:bg-accent/[0.02]">
                <h4 className="font-display text-2xl uppercase tracking-widest text-accent mb-6">Profils Concernés</h4>
                <p className="text-text-secondary mb-8 leading-relaxed font-light">{e.aidePreparation.publicConcerneLabel}</p>
                <div className="space-y-4">
                  {e.aidePreparation.publicConcerne.map((pc) => (
                    <div key={pc} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-sm font-medium">{pc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Références */}
      <section
        ref={(el) => { sectionRefs.current[5] = el }}
        className="py-24 md:py-32 bg-accent/[0.02]"
        aria-labelledby="section-references"
      >
        <Container className="text-center">
          <SectionTitle id="section-references" title="Ils nous font confiance" className="mb-10 items-center" />
          <p className="max-w-3xl mx-auto text-xl text-text-secondary font-light leading-relaxed italic">
            "{e.references}"
          </p>
        </Container>
      </section>

      {/* 8. Informations légales */}
      <section
        ref={(el) => { sectionRefs.current[6] = el }}
        className="py-24 md:py-32 border-t border-white/5"
        aria-labelledby="section-legal"
      >
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="p-8 rounded-2xl glass group hover:border-accent/30 transition-all">
              <p className="font-display text-xl uppercase tracking-widest text-accent mb-4">{e.legal.role}</p>
              <p className="text-lg font-medium text-text-primary">{e.legal.responsable}</p>
            </div>
            <div className="p-8 rounded-2xl glass group hover:border-accent/30 transition-all">
              <p className="font-display text-xl uppercase tracking-widest text-accent mb-4">Contact Direct</p>
              <a href={`tel:${e.legal.telephone.replace(/\s/g, '')}`} className="block text-text-primary text-lg font-medium hover:text-accent transition-colors mb-1">
                {e.legal.telephone}
              </a>
              <a href={`mailto:${e.legal.email}`} className="block text-text-secondary hover:text-accent transition-colors break-all">
                {e.legal.email}
              </a>
            </div>
            <div className="p-8 rounded-2xl glass group hover:border-accent/30 transition-all">
              <p className="font-display text-xl uppercase tracking-widest text-accent mb-4">Agrément & SIRET</p>
              <p className="text-text-primary font-medium mb-1">SIRET : {e.legal.siret}</p>
              <p className="text-text-secondary text-sm">Déclaration activité : <span className="whitespace-nowrap">{e.legal.numeroDeclarationActivite}</span></p>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. CTA */}
      <section
        ref={(el) => { sectionRefs.current[7] = el }}
        className="py-24 md:py-40 bg-gradient-to-t from-accent/5 to-transparent text-center"
        aria-labelledby="section-cta-forma"
      >
        <Container>
          <h2 className="font-display text-5xl md:text-7xl tracking-tighter uppercase mb-8">Lancez votre projet de formation</h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto italic">
            "Répondre avec précision aux exigences du terrain professionnel."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="primary" to="/contact" className="px-10 py-5 text-base">
              Demander un devis personnalisé
            </Button>
            <Button variant="outline" href={`mailto:${e.legal.email}`} className="px-10 py-5 text-base">
              Nous écrire un mail
            </Button>
          </div>
        </Container>
      </section>
    </main>
  )
}
