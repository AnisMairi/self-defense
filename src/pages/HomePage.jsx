import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteContent } from '../data/siteContent'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import EntityCard from '../components/ui/EntityCard'
import HeroAnimatedText from '../components/ui/HeroAnimatedText'

gsap.registerPlugin(ScrollTrigger)

const HERO_H1 = 'SÉCURITÉ • SELF‑DÉFENSE • TACTIQUE'

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
        gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' })
      }
      if (heroSubtitleRef.current) {
        gsap.fromTo(
          heroSubtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power3.out' }
        )
      }
      if (heroCtaRef.current) {
        gsap.set(heroCtaRef.current.children, { opacity: 0, y: 30 })
      }
      sectionRefs.current.forEach((el) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
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

  const handleHeroTitleComplete = () => {
    if (heroCtaRef.current?.children?.length) {
      gsap.to(heroCtaRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)',
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
    },
    {
      key: 'gscurit',
      to: '/gscurit',
      nom: entities.gscurit.nom,
      resume: entities.gscurit.sousTitre,
      logo: '/logos/gscurit.png',
      logoClassName: 'scale-90', // Make it slightly smaller to match the height of others
    },
  ]

  return (
    <main className="min-w-0 bg-background text-text-primary">
      {/* 1. Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-title"
      >
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover grayscale opacity-40"
          aria-hidden
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/40" aria-hidden />

        <Container className="relative z-10 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass glass-accent">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Expertise Terrain Agréée</span>
            </div>

            <HeroAnimatedText
              text={HERO_H1}
              className="font-display text-6xl leading-[0.9] tracking-tighter uppercase sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
              onAnimationComplete={handleHeroTitleComplete}
              delay={100}
            />

            <p
              ref={heroSubtitleRef}
              className="mt-8 text-xl md:text-2xl text-text-secondary font-light max-w-2xl leading-relaxed"
            >
              Maîtrisez votre sécurité avec <span className="text-text-primary font-medium">{global.nom}</span>.
              Formation professionnelle et coaching d'élite en Île-de-France.
            </p>

            <div
              ref={heroCtaRef}
              className="mt-12 flex flex-wrap gap-6"
            >
              <Button variant="primary" to="/contact" className="px-8 py-4">
                Obtenir un devis d'expert
              </Button>
              <Button variant="secondary" to="/lc-sports-connexion" className="px-8 py-4">
                Explorer nos cours
              </Button>
            </div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Découvrir</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </section>

      {/* 2. Le formateur */}
      <section
        ref={(el) => { sectionRefs.current[0] = el }}
        className="relative py-24 md:py-32 overflow-hidden"
        aria-labelledby="section-formateur"
      >
        <Container>
          <div className="grid gap-16 md:grid-cols-2 lg:items-center">
            <div className="order-2 md:order-1">
              <SectionTitle
                id="section-formateur"
                title={global.nom}
                subtitle="Président – Coach – Instructeur – Formateur"
                className="mb-8"
              />
              <p className="text-lg leading-relaxed text-text-secondary mb-10">
                {global.formateurPresentation}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-6 rounded-2xl glass">
                  <div className="text-accent font-display text-4xl mb-1">20+</div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-50">Ans d'expérience</div>
                </div>
                <div className="p-6 rounded-2xl glass">
                  <div className="text-accent font-display text-4xl mb-1">1000+</div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-50">Élèves formés</div>
                </div>
              </div>
              <Button variant="outline" to="/contact">
                Parcours complet
              </Button>
            </div>
            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <img
                src="/logos/pp.png"
                alt="Photo de Christophe Lecacheux"
                loading="lazy"
                width={500}
                height={600}
                className="relative h-[400px] md:h-[550px] w-full rounded-card border border-white/10 object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. 3 entités */}
      <section
        ref={(el) => { sectionRefs.current[1] = el }}
        className="py-24 md:py-32 bg-surface/30 border-y border-white/5"
        aria-labelledby="section-entities"
      >
        <Container>
          <SectionTitle
            id="section-entities"
            title="Nos pôles d'expertise"
            subtitle="Une approche globale de la sécurité, de la formation professionnelle à la pratique sportive elite."
            className="mb-16"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
        className="py-24 md:py-32"
        aria-labelledby="section-pourquoi"
      >
        <Container>
          <SectionTitle
            id="section-pourquoi"
            title="L'excellence tactique"
            subtitle="Engagés pour votre sécurité et votre progression avec des méthodes éprouvées."
            className="mb-16"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {global.valeurs.map((v, i) => (
              <div
                key={v}
                className="group p-8 rounded-card glass transition-all duration-300 hover:bg-accent/[0.05] hover:border-accent/30"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-display text-2xl mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  {i + 1}
                </div>
                <h4 className="font-display text-xl tracking-wider text-text-primary mb-3 uppercase">{v}</h4>
                <div className="w-8 h-0.5 bg-accent/30 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Agréments & certifications */}
      <section
        ref={(el) => { sectionRefs.current[3] = el }}
        className="py-20 md:py-24 bg-accent/[0.02]"
        aria-labelledby="section-agrements"
      >
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
            <div>
              <h3 className="font-display text-3xl tracking-widest uppercase mb-4">Garanties de Qualité</h3>
              <p className="text-text-secondary max-w-md">Organisme de formation déclaré et certifié, répondant aux exigences les plus strictes du secteur de la sécurité.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-4 rounded-xl glass flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-bold tracking-widest uppercase">CNAPS</span>
              </div>
              <div className="px-6 py-4 rounded-xl glass flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-bold tracking-widest uppercase">Organisme Déclaré</span>
              </div>
              <div className="px-6 py-4 rounded-xl border border-white/5 bg-white/[0.02] text-xs text-text-secondary">
                SIRET: {entities.lcFormaPro.legal.siret}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. CTA contact */}
      <section
        ref={(el) => { sectionRefs.current[4] = el }}
        className="py-24 md:py-40 relative overflow-hidden"
        aria-labelledby="section-cta-contact"
      >
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
        <Container className="text-center relative z-10">
          <h2 className="font-display text-5xl md:text-7xl tracking-tighter uppercase mb-6">Prêt à passer au niveau supérieur ?</h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">Contactez-nous aujourd'hui pour un diagnostic personnalisé ou pour réserver votre session de formation.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="primary" to="/contact" className="px-10 py-5 text-base">
              Demander une expertise
            </Button>
            <Button variant="secondary" to="/contact" className="px-10 py-5 text-base">
              Nos coordonnées
            </Button>
          </div>
        </Container>
      </section>
    </main>
  )
}
