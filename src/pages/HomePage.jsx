import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteContent } from '../data/siteContent'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import EntityCard from '../components/ui/EntityCard'
import HeroAnimatedText from '../components/ui/HeroAnimatedText'

gsap.registerPlugin(ScrollTrigger)

const HERO_H1 = 'Sécurité • Self‑défense • Sports de combat'

export default function HomePage() {
  const heroRef = useRef(null)
  const heroSubtitleRef = useRef(null)
  const heroCtaRef = useRef(null)
  const sectionRefs = useRef([])

  const { global, entities, contact } = siteContent

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
      }
      if (heroSubtitleRef.current) {
        gsap.fromTo(
          heroSubtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.45, delay: 0.5 }
        )
      }
      if (heroCtaRef.current) {
        gsap.set(heroCtaRef.current.children, { opacity: 0, y: 20 })
      }
      sectionRefs.current.forEach((el) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
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

  const handleHeroTitleComplete = () => {
    if (heroCtaRef.current?.children?.length) {
      gsap.to(heroCtaRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
      })
    }
  }

  const entityCards = [
    {
      key: 'lcFormaPro',
      to: '/lc-forma-pro',
      nom: entities.lcFormaPro.nom,
      resume: 'Organisme de formation professionnelle. Formations adaptées aux structures publiques et privées.',
      logo: '/logos/forma.png',
      logoSize: 'default',
    },
    {
      key: 'lcSportsConnexion',
      to: '/lc-sports-connexion',
      nom: entities.lcSportsConnexion.nom,
      resume: 'Association sportive. Cours, club, coaching et événements sportifs.',
      logo: '/logos/sports.png',
      logoSize: 'default',
    },
    {
      key: 'gscurit',
      to: '/gscurit',
      nom: entities.gscurit.nom,
      resume: entities.gscurit.sousTitre,
      logo: '/logos/gscurit.png',
      logoSize: 'wide',
    },
  ]

  return (
    <main className="min-w-0">
      {/* 1. Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-white/10 bg-background"
        aria-labelledby="hero-title"
      >
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[1] bg-black/70 md:bg-black/60"
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[60vh] flex-col justify-center py-16 md:min-h-[70vh] md:py-24">
          <Container className="text-center md:text-left">
            <div className="mx-auto min-w-0 max-w-xl overflow-hidden md:mx-0 md:max-w-2xl lg:max-w-6xl">
              <HeroAnimatedText
                text={HERO_H1}
                className="font-display text-4xl leading-tight tracking-wide text-text-primary break-words hyphens-auto sm:text-5xl md:text-6xl lg:whitespace-nowrap lg:text-5xl xl:text-6xl 2xl:text-7xl [.hero-word]:inline [.hero-word]:whitespace-normal"
                onAnimationComplete={handleHeroTitleComplete}
              />
              <p
                ref={heroSubtitleRef}
                className="mt-4 text-lg text-text-secondary"
              >
                Expertise terrain · {global.zones.join(' · ')}
              </p>
            </div>
            <div
              ref={heroCtaRef}
              className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <Button variant="primary" to="/contact">
                Demander un devis
              </Button>
              <Button variant="secondary" to="/lc-sports-connexion">
                Réserver un cours
              </Button>
            </div>
          </Container>
        </div>
      </section>

      {/* 2. Le formateur */}
      <section
        ref={(el) => { sectionRefs.current[0] = el }}
        className="border-b border-white/10 py-16 md:py-20"
        aria-labelledby="section-formateur"
      >
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 mx-auto max-w-xl text-center md:order-1 md:mx-0 md:text-left">
              <h2
                id="section-formateur"
                className="font-display text-3xl tracking-wide text-text-primary sm:text-4xl"
              >
                {global.nom}
              </h2>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-text-secondary">
                Président – Coach – Instructeur – Formateur
              </p>
              <p className="mt-4 text-text-secondary">
                {global.formateurPresentation}
              </p>
              <div className="mt-6">
                <Button variant="secondary" to="/contact">
                  En savoir plus
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/logos/pp.png"
                alt="Photo de Christophe Lecacheux"
                loading="lazy"
                width={420}
                height={420}
                className="h-[320px] w-full rounded-2xl border border-white/10 object-cover shadow-xl md:h-[420px]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. 3 entités */}
      <section
          ref={(el) => { sectionRefs.current[1] = el }}
          className="border-b border-white/10 py-16 md:py-20"
          aria-labelledby="section-entities"
        >
        <Container className="text-center md:text-left">
          <SectionTitle
            id="section-entities"
            title="Nos trois entités"
            subtitle="Formation professionnelle, association sportive et conseil agréé CNAPS."
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {entityCards.map((card) => (
              <EntityCard
                key={card.key}
                to={card.to}
                nom={card.nom}
                resume={card.resume}
                logo={card.logo}
                logoSize={card.logoSize}
                logoClassName={card.logoClassName}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Pourquoi nous choisir */}
      <section
        ref={(el) => { sectionRefs.current[2] = el }}
        className="border-b border-white/10 py-16 md:py-20"
        aria-labelledby="section-pourquoi"
      >
        <Container className="text-center md:text-left">
          <SectionTitle
            id="section-pourquoi"
            title="Pourquoi nous choisir"
            className="mb-12"
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {global.valeurs.map((v) => (
              <li
                key={v}
                className="group flex items-center justify-center gap-3 rounded-card border border-white/10 bg-surface p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.03] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] motion-reduce:hover:translate-y-0 md:items-start md:justify-start md:text-left"
              >
                <span
                  className="inline-block text-accent transition-transform duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(177,18,38,0.4)] motion-reduce:group-hover:scale-100"
                  aria-hidden
                >
                  ●
                </span>
                <span className="font-medium text-text-primary">{v}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5. Agréments & certifications */}
      <section
        ref={(el) => { sectionRefs.current[3] = el }}
        className="border-b border-white/10 py-16 md:py-20"
        aria-labelledby="section-agrements"
      >
        <Container className="text-center md:text-left">
          <SectionTitle
            id="section-agrements"
            title="Agréments & certifications"
            className="mb-12"
          />
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <span className="rounded-lg border border-white/20 bg-surface px-4 py-2 text-sm font-medium text-text-primary">
              CNAPS
            </span>
            <span className="rounded-lg border border-white/20 bg-surface px-4 py-2 text-sm font-medium text-text-primary">
              Organisme déclaré
            </span>
            <span className="rounded-lg border border-white/20 bg-surface px-4 py-2 text-sm text-text-secondary">
              SIRET {entities.lcFormaPro.legal.siret}
            </span>
            <span className="rounded-lg border border-white/20 bg-surface px-4 py-2 text-sm text-text-secondary">
              N° déclaration activité {entities.lcFormaPro.legal.numeroDeclarationActivite}
            </span>
          </div>
        </Container>
      </section>

      {/* 6. CTA contact */}
      <section
        ref={(el) => { sectionRefs.current[4] = el }}
        className="py-16 md:py-20"
        aria-labelledby="section-cta-contact"
      >
        <Container className="text-center md:text-left">
          <SectionTitle
            id="section-cta-contact"
            title="Contact & devis"
            subtitle="Une question ? Demandez un devis ou appelez-nous."
            className="mb-10"
          />
          <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-display text-lg text-text-primary">{entities.lcFormaPro.nom}</p>
              {contact.lcFormaPro.telephone !== 'TODO' && (
                <a href={`tel:${contact.lcFormaPro.telephone.replace(/\s/g, '')}`} className="mt-1 block text-text-secondary hover:text-accent">
                  {contact.lcFormaPro.telephone}
                </a>
              )}
              <a href={`mailto:${contact.lcFormaPro.email}`} className="block text-text-secondary hover:text-accent">
                {contact.lcFormaPro.email}
              </a>
            </div>
            <div>
              <p className="font-display text-lg text-text-primary">{entities.lcSportsConnexion.nom}</p>
              <a href={`tel:${contact.lcSportsConnexion.telephone.replace(/\s/g, '')}`} className="mt-1 block text-text-secondary hover:text-accent">
                {contact.lcSportsConnexion.telephone}
              </a>
              <a href={`mailto:${contact.lcSportsConnexion.email}`} className="block text-text-secondary hover:text-accent">
                {contact.lcSportsConnexion.email}
              </a>
            </div>
            <div>
              <p className="font-display text-lg text-text-primary">{entities.gscurit.nom}</p>
              {contact.gscurit.telephone !== 'TODO' && (
                <a href={`tel:${contact.gscurit.telephone.replace(/\s/g, '')}`} className="mt-1 block text-text-secondary hover:text-accent">
                  {contact.gscurit.telephone}
                </a>
              )}
              <a href={`mailto:${contact.gscurit.email}`} className="block text-text-secondary hover:text-accent">
                {contact.gscurit.email}
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <Button variant="primary" to="/contact">
              Demander un devis
            </Button>
          </div>
        </Container>
      </section>
    </main>
  )
}
