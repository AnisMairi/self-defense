import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function EntityCard({
  to,
  nom,
  resume,
  logo,
  logoClassName = '',
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <Link
      to={to}
      className="group relative flex flex-col h-full rounded-card glass glass-hover p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-accent-glow"
    >
      {/* Decorative Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-3xl rounded-full -mr-8 -mt-8 transition-opacity group-hover:bg-accent/10" />

      {/* Zone logo - Uniformity Fix (Badge Pattern) */}
      <div
        className="mb-8 relative flex aspect-video w-full items-center justify-center rounded-2xl bg-surface/50 border border-white/5 overflow-hidden group-hover:border-accent/30 transition-colors duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

        {/* The Badge */}
        <div className="relative z-10 w-full h-full p-6 flex items-center justify-center">
          {!imgError ? (
            <div className="w-full h-full bg-white rounded-xl shadow-lg p-4 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
              <img
                src={logo}
                alt={`Logo ${nom}`}
                className={`
                  max-h-full max-w-full
                  object-contain
                  transition-all duration-700
                  ${logoClassName}
                `}
                onError={() => setImgError(true)}
                loading="lazy"
              />
            </div>
          ) : (
            <span className="text-5xl opacity-50 grayscale select-none">🛡️</span>
          )}
        </div>
      </div>

      {/* Contenu textuel */}
      <div className="relative flex flex-col flex-grow text-center md:text-left">
        <h3 className="font-display text-2xl tracking-wide text-text-primary group-hover:text-accent transition-colors duration-300">
          {nom}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-text-secondary line-clamp-3">
          {resume}
        </p>

        <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent transition-all duration-300 group-hover:gap-4">
          <span>Découvrir</span>
          <span className="text-lg">→</span>
        </div>
      </div>
    </Link>
  )
}