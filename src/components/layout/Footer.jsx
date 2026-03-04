import { Link } from 'react-router-dom'
import Container from '../ui/Container'

const footerLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/lc-forma-pro', label: 'LC Forma Pro Sécurité' },
  { to: '/lc-sports-connexion', label: 'LC Sports Connexion' },
  { to: '/gscurit', label: 'GSCURIT' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Pied de page">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm text-text-secondary">
            LC Forma Pro Sécurité · LC Sports Connexion · GSCURIT
          </p>
        </div>
      </Container>
    </footer>
  )
}
