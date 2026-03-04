# TECH_RULES — Qualité, perf, SEO

## Stack
- Vite + React
- TailwindCSS
- GSAP (ScrollTrigger seulement si utile)

## Performance
- Objectif Lighthouse : **90+**
- Images webp + lazy loading
- Éviter les vidéos autoplay
- Animations uniquement `transform` / `opacity`
- Limiter ScrollTrigger (pas partout)

## Accessibilité
- Contrastes AA
- Navigation clavier
- `prefers-reduced-motion` (désactiver/limiter animations)
- Alt text sur toutes les images

## SEO (minimum)
- Titres par page (H1 unique)
- Meta title + description
- OpenGraph (image + title)
- Sitemap (optionnel)
- Données de contact visibles (E‑E‑A‑T)

## Code style
- Composants réutilisables (Container, SectionTitle, Button)
- Données dans `/src/data/siteContent.js`
- Pas de texte “en dur” long dans les composants (sauf micro-copy)
- 1 PR/commit par page ou feature

## Routing
- `react-router-dom` recommandé (multi-page SPA)
- URLs propres : `/lc-forma-pro`, `/lc-sports-connexion`, `/gscurit`, `/contact`

