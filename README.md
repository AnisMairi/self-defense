# LC Group — Site vitrine

Site vitrine React (Vite + Tailwind) pour LC Forma Pro Sécurité, LC Sports Connexion et GSCURIT : présentation des formations, du coaching et des services sécurité en Île-de-France.

## Prérequis

- **Node.js** (LTS recommandé, v18+)

## Installation

```bash
npm install
```

## Lancer en local

```bash
npm run dev
```

Ouvre [http://localhost:5173](http://localhost:5173).

## Build et prévisualisation

```bash
npm run build
npm run preview
```

Le build est généré dans le dossier `dist/`.

## Déploiement Cloudflare Pages

- **Build command :** `npm run build`
- **Build output directory :** `dist`

Le fichier `public/_redirects` (copié dans `dist/`) assure le routage SPA (pas de 404 sur les routes comme `/contact`, `/gscurit`, etc.).
