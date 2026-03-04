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
      className="group flex flex-col h-full rounded-card border border-white/10 bg-surface p-6 shadow-card transition-[transform,border-color] hover:-translate-y-0.5 hover:border-white/20"
    >
      {/* Zone logo : conteneur avec dimensions fixes et fond neutre */}
      <div
        className="mb-6 flex h-40 md:h-48 w-full items-center justify-center rounded-2xl border border-white/10 p-4"
        style={{ backgroundColor: 'transparent' }}
      >
        {!imgError ? (
          <img
            src={logo}
            alt={`Logo ${nom}`}
            // Les classes ci-dessous garantissent que l'image :
            // - ne dépasse pas du conteneur (max-h-full max-w-full)
            // - garde ses proportions (object-contain)
            // - est centrée (via flex du parent)
            className={`
              max-h-full max-w-full
              w-auto h-auto
              object-contain
              ${logoClassName}
            `}
            style={{
              // Pour atténuer les éventuels fonds blancs (sans dénaturer les couleurs)
              // On utilise un léger drop shadow qui améliore le contraste sur fond sombre
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            }}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          // Fallback discret en cas d'image manquante
          <span className="text-4xl text-text-secondary">🏢</span>
        )}
      </div>

      {/* Contenu textuel (inchangé) */}
      <div className="flex flex-col flex-grow text-center md:text-left">
        <h3 className="font-display text-xl text-text-primary">{nom}</h3>
        <p className="mt-2 text-sm text-text-secondary line-clamp-3">
          {resume}
        </p>
        <span className="mt-auto pt-4 inline-block text-sm font-medium text-accent transition-colors group-hover:text-accent/90">
          En savoir plus →
        </span>
      </div>
    </Link>
  )
}