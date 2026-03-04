# DESIGN_SYSTEM — Mix institutionnel + sport

## Direction artistique
- **Institutionnel** : structuré, clair, rassurant, conformité & expertise
- **Sport** : dynamique, énergie, progression, discipline (sans agressivité)

## Palette (proposée)
- Fond principal : **#0B0D10** (noir bleuté)
- Surface / cards : **#11151B**
- Texte principal : **#F5F7FA**
- Texte secondaire : **#C9D1D9**
- Accent (énergie) : **#B11226** (rouge profond)
- Accent 2 (soutien) : **#D7A21A** (or discret — à utiliser très peu)

## Typographies (Google Fonts)
- Titres : **Bebas Neue** (impact, sport)
- Texte : **Inter** (lisibilité, institutionnel)

## Règles UI
- Layout : grille, beaucoup d’air, sections bien délimitées
- Boutons :
  - Primaire : fond accent rouge, texte clair
  - Secondaire : contour clair + hover discret
- Cards :
  - Bords arrondis (16–24px)
  - Ombre douce
  - Bordure fine (blanc 8–12% opacité)

## Iconographie
- Icônes fines (lucide-react si besoin)
- Badges “CNAPS”, “Organisme déclaré”, etc.

## Photos & visuels
- Contraste élevé, ambiance “gym / training”, sans violence extrême
- Mélange :
  - Action (sport / self‑défense)
  - Corporate (formation, salle, présentation)
- Éviter : armes visibles, scènes choquantes, photos “stock” trop fake

## Animations (GSAP)
- Objectif : “premium & sobre”, pas un site nightclub.
- Autorisées :
  - Fade + slide (y: 20–40px)
  - Reveal au scroll (opacity/transform)
  - Micro‑interactions hover (scale 1.02, shadow)
- Éviter :
  - rotations, blur, animations continues
  - parallax lourd sur mobile
- Accessibilité :
  - respecter `prefers-reduced-motion`

## Ton rédactionnel
- Phrases courtes
- Vocabulaire pro, orienté bénéfices (“adapté”, “conforme”, “terrain”)
- “Autorité + humain” : ferme mais accessible

