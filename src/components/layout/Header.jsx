import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/lc-forma-pro', label: 'LC Forma Pro Sécurité' },
  { to: '/lc-sports-connexion', label: 'LC Sports Connexion' },
  { to: '/gscurit', label: 'GSCURIT' },
  { to: '/contact', label: 'Contact' },
]

function IconMenu() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function IconClose() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) return
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)')
    const handler = () => {
      if (mql.matches) closeMenu()
    }
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `block rounded-lg px-4 py-3 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background ${
      isActive
        ? 'bg-white/10 text-text-primary'
        : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <NavLink
          to="/"
          className="font-display text-xl tracking-wide text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
        >
          LC Forma Pro
        </NavLink>

        <nav
          className="hidden flex-wrap items-center gap-1 md:flex md:gap-2"
          aria-label="Navigation principale"
        >
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `rounded px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background ${
                  isActive
                    ? 'bg-white/10 text-text-primary'
                    : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button variant="primary" to="/contact" className="whitespace-nowrap">
            Demander un devis
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-text-primary transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background md:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Overlay + drawer mobile : non-interactif quand fermé pour ne pas bloquer les clics */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${isMenuOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ease-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm overflow-y-auto border-l border-white/10 bg-background shadow-xl transition-transform duration-200 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-1 p-4 pt-6">
            <Button
              variant="primary"
              to="/contact"
              className="mb-2 w-full justify-center"
              onClick={closeMenu}
            >
              Demander un devis
            </Button>
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={navLinkClass}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
