import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/lc-forma-pro', label: 'LC Forma Pro' },
  { to: '/lc-sports-connexion', label: 'LC Sports' },
  { to: '/gscurit', label: 'GSCURIT' },
  { to: '/contact', label: 'Contact' },
]

function IconMenu() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
    </svg>
  )
}

function IconClose() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    `relative py-2 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-500 hover:text-accent ${isActive ? 'text-accent' : 'text-text-secondary/80'
    } after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-accent after:transition-all after:duration-500 hover:after:w-full ${isActive ? 'after:w-full shadow-[0_4px_12px_-4px_rgba(177,18,38,0.3)]' : ''}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
        ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-2xl'
        : 'py-8 bg-transparent'
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <NavLink
          to="/"
          className="group relative flex items-center gap-2 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white font-display text-2xl group-hover:scale-110 transition-transform">
            L
          </div>
          <span className="font-display text-2xl tracking-tighter text-text-primary uppercase group-hover:tracking-[0.1em] transition-all duration-500">
            LC Group
          </span>
        </NavLink>

        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Navigation principale"
        >
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={navLinkClass}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="primary" to="/contact" className="hidden sm:inline-flex px-8 py-3 text-[10px] tracking-[0.2em] uppercase">
            Devis Express
          </Button>
          <button
            type="button"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full glass hover:bg-white/10 transition-all focus:outline-none lg:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-2 bg-text-primary transition-all duration-300 ${isMenuOpen ? 'translate-y-0 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-1/2 block h-0.5 w-6 bg-text-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-1/2 block h-0.5 w-6 translate-y-2 bg-text-primary transition-all duration-300 ${isMenuOpen ? 'translate-y-0 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-background/90 backdrop-blur-2xl transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={closeMenu}
        />
        <div
          id="mobile-menu"
          className={`relative flex h-full flex-col items-center justify-center p-12 transition-all duration-700 ease-expo ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
          <div className="flex flex-col items-center gap-8 text-center">
            {navItems.map(({ to, label }, i) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-display text-4xl uppercase tracking-tighter transition-all hover:text-accent hover:scale-110 ${isActive ? 'text-accent' : 'text-text-primary'
                  }`
                }
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}
            <div className="mt-8 pt-8 border-t border-white/10 w-full max-w-[200px]">
              <Button
                variant="primary"
                to="/contact"
                className="w-full justify-center px-8 py-5 text-xs tracking-widest uppercase"
                onClick={closeMenu}
              >
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
