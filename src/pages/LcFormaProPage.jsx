import { Link } from 'react-router-dom'
import { siteContent } from '../data/siteContent'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Accordion from '../components/ui/Accordion'
import GradientTitle from '../components/ui/GradientTitle'

const e = siteContent.entities.lcFormaPro

function PlaceholderImage({ className = '', label = '' }) {
  return (
    <div
      className={`flex min-h-[200px] items-center justify-center rounded-card bg-gradient-to-br from-surface to-background border border-white/10 ${className}`}
      aria-hidden
    >
      {label && <span className="text-sm text-text-secondary">{label}</span>}
    </div>
  )
}

export default function LcFormaProPage() {
  const accordionItems = e.publics.map((p) => ({
    id: p.id,
    title: p.subtitle ? `${p.title} — ${p.subtitle}` : p.title,
    content: (
      <ul className="list-disc space-y-1 pl-5">
        {p.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ),
  }))

  return (
    <main className="min-w-0">
      {/* 1. Hero + slogan — pleine largeur, sans card */}
      <section className="relative border-b border-white/10 bg-background" aria-labelledby="forma-hero-title">
        <div
          className="min-h-[280px] w-full bg-gradient-to-br from-surface to-background md:min-h-[320px]"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="mx-auto w-full max-w-2xl px-4 py-12 text-center md:px-6">
            <GradientTitle id="forma-hero-title" className="font-display text-4xl tracking-wide md:text-5xl">
              {e.nom}
            </GradientTitle>
            <p className="mt-3 text-text-secondary">
              {e.slogan}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button variant="primary" to="/contact">
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Présentation */}
      <section className="border-b border-white/10 py-16 md:py-20" aria-labelledby="section-presentation">
        <Container>
          <SectionTitle id="section-presentation" title="Présentation" className="mb-8 text-center md:text-left" />
          <p className="max-w-3xl text-text-secondary">{e.presentation}</p>
          <div className="mt-6">
            <p className="font-medium text-text-primary">{e.approche.intro}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-text-secondary">
              {e.approche.modes.map((mode) => (
                <li key={mode}>{mode}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 3. Formations techniques */}
      <section className="border-b border-white/10 py-16 md:py-20" aria-labelledby="section-techniques">
        <Container>
          <SectionTitle id="section-techniques" title="Formations techniques" className="mb-8 text-center md:text-left" />
          <PlaceholderImage className="mb-8" label="Formations techniques" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {e.formationsTechniques.map((f) => (
              <li key={f} className="flex items-center gap-2 rounded-lg border border-white/10 bg-surface px-4 py-3">
                <span className="text-accent" aria-hidden>●</span>
                <span className="text-text-primary">{f}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4. Formations complémentaires */}
      <section className="border-b border-white/10 py-16 md:py-20" aria-labelledby="section-complementaires">
        <Container>
          <SectionTitle id="section-complementaires" title="Formations complémentaires" className="mb-8 text-center md:text-left" />
          <PlaceholderImage className="mb-8" label="Formations complémentaires" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {e.formationsComplementaires.map((f) => (
              <li key={f} className="flex items-center gap-2 rounded-lg border border-white/10 bg-surface px-4 py-3">
                <span className="text-accent" aria-hidden>●</span>
                <span className="text-text-primary">{f}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5. Publics concernés (accordéons) */}
      <section className="border-b border-white/10 py-16 md:py-20" aria-labelledby="section-publics">
        <Container>
          <SectionTitle id="section-publics" title="Publics concernés" className="mb-8 text-center md:text-left" />
          <PlaceholderImage className="mb-8" label="Publics" />
          <Accordion items={accordionItems} />
        </Container>
      </section>

      {/* 6. Aide & préparation */}
      <section className="border-b border-white/10 py-16 md:py-20" aria-labelledby="section-aide">
        <Container>
          <SectionTitle id="section-aide" title="Aide & préparation" className="mb-8 text-center md:text-left" />
          <p className="font-medium text-text-primary">{e.aidePreparation.intro}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-text-secondary">
            {e.aidePreparation.epreuves.map((ep) => (
              <li key={ep}>{ep}</li>
            ))}
          </ul>
          <p className="mt-6 font-medium text-text-primary">{e.aidePreparation.publicConcerneLabel}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-text-secondary">
            {e.aidePreparation.publicConcerne.map((pc) => (
              <li key={pc}>{pc}</li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 7. Références */}
      <section className="border-b border-white/10 py-16 md:py-20" aria-labelledby="section-references">
        <Container>
          <SectionTitle id="section-references" title="Références" className="mb-8 text-center md:text-left" />
          <p className="max-w-3xl text-text-secondary">{e.references}</p>
        </Container>
      </section>

      {/* 8. Informations légales */}
      <section className="border-b border-white/10 py-16 md:py-20" aria-labelledby="section-legal">
        <Container>
          <SectionTitle id="section-legal" title="Informations légales" className="mb-8 text-center md:text-left" />
          <div className="grid gap-6 text-center sm:grid-cols-2 md:text-left lg:grid-cols-3">
            <div>
              <p className="font-medium text-text-primary">{e.legal.role}</p>
              <p className="text-text-secondary">{e.legal.responsable}</p>
            </div>
            <div>
              <p className="font-medium text-text-primary">Contact</p>
              <a href={`tel:${e.legal.telephone.replace(/\s/g, '')}`} className="block text-text-secondary hover:text-accent">
                {e.legal.telephone}
              </a>
              <a href={`mailto:${e.legal.email}`} className="block text-text-secondary hover:text-accent">
                {e.legal.email}
              </a>
            </div>
            <div>
              <p className="font-medium text-text-primary">Identification</p>
              <p className="text-text-secondary">SIRET : {e.legal.siret}</p>
              <p className="text-text-secondary">N° déclaration activité : {e.legal.numeroDeclarationActivite}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. CTA + formulaire */}
      <section className="py-16 md:py-20" aria-labelledby="section-cta-forma">
        <Container>
          <SectionTitle
            id="section-cta-forma"
            title="Demander un devis"
            subtitle="Décrivez votre besoin en formation, nous vous recontactons rapidement."
            className="mb-10 text-center md:text-left"
          />
          <div className="mx-auto max-w-xl">
            <p className="text-center text-text-secondary md:text-left">
              Formulaire à venir. En attendant, contactez-nous par téléphone ou email.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
              <Button variant="primary" to="/contact">
                Demander un devis
              </Button>
              <Button variant="secondary" href={`mailto:${e.legal.email}`}>
                {e.legal.email}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
