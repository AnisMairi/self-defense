import { Link } from 'react-router-dom'
import Container from '../ui/Container'

const footerLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/lc-forma-pro', label: 'LC Forma Pro' },
  { to: '/lc-sports-connexion', label: 'LC Sports' },
  { to: '/gscurit', label: 'GSCURIT' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 bg-background pt-24 pb-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <Container>
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4 mb-20">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-8 group">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center text-white font-display text-xl group-hover:rotate-12 transition-transform">L</div>
              <span className="font-display text-2xl tracking-tighter uppercase text-text-primary">LC Group</span>
            </Link>
            <p className="text-text-secondary font-light leading-relaxed max-w-sm">
              Solutions expertes en sécurité, formation professionnelle et accompagnement sportif.
              L'excellence au service de votre sérénité.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest uppercase text-accent mb-8">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm font-bold uppercase tracking-widest text-text-secondary transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest uppercase text-accent mb-8">Légal</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/contact" className="text-sm font-bold uppercase tracking-widest text-text-secondary transition-colors hover:text-accent">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm font-bold uppercase tracking-widest text-text-secondary transition-colors hover:text-accent">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-text-secondary">
            © {currentYear} LC Group France · Tous droits réservés
          </p>
          <div className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>
        </div>
      </Container>
    </footer>
  )
}
