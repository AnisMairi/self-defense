# PROMPTS_CURSOR — Pack prêt à l’emploi

## Prompt 1 — Génère la base du projet (sans contenu inventé)
Tu es lead dev front.
Crée un projet Vite + React + Tailwind + GSAP.
Mets en place :
- react-router-dom (routes: Home, LC Forma Pro, LC Sports, GSCURIT, Contact)
- Layout global (Header/Footer/Container)
- Design system (couleurs, fonts Inter + Bebas Neue)
- Fichiers `/src/data/siteContent.js` avec placeholders (vides) à remplir ensuite
Ne code pas de pages complètes, uniquement la structure et les composants UI de base.
Liste les fichiers créés/modifiés.

---

## Prompt 2 — Implémente la page Accueil (à partir du contenu)
À partir de `siteContent.js`, implémente la page Home avec :
- Hero + 2 CTA
- 3 cards entités (liens vers pages)
- Section “Pourquoi nous choisir”
- Section “Agréments & certifications”
- CTA contact
Ajoute animations GSAP sobres (reveal au scroll). Respecte mobile-first et prefers-reduced-motion.

---

## Prompt 3 — Implémente la page LC Forma Pro
Implémente `/lc-forma-pro` avec sections :
- Hero + slogan
- Présentation
- Formations techniques (grid)
- Formations complémentaires (grid)
- Publics concernés (accordéons)
- Aide & préparation
- Infos légales
CTA devis + contact

---

## Prompt 4 — Photos libres de droit (process safe)
Trouve des photos libres de droit (Unsplash/Pexels/Pixabay).
Télécharge en haute qualité, convertis en .webp, place dans `/src/assets/images`.
Associe chaque image à une section (hero, cards, corporate) via `siteContent.js`.
Ajoute alt text. Optimise performance (lazy loading).
Évite scènes violentes/armes visibles.

---

## Prompt 5 — Polish final (perf + SEO)
Passe en revue :
- accessibilité
- perf (images, bundle, lazy loading)
- SEO (titles, meta, OG)
- cohérence UI (spacing, typos)
Propose un plan de corrections + applique-les.

