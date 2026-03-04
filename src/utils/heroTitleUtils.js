/**
 * Découpe le titre hero en tokens (mots et séparateurs •).
 * Chaque mot peut recevoir data-word + animation ; les • sont conservés tels quels.
 * @param {string} text - Ex: "Sécurité • Self‑défense • Sports de combat"
 * @returns {{ type: 'word' | 'separator', value: string }[]}
 */
export function splitHeroTitle(text) {
  const tokens = text.match(/\S+/g) || []
  return tokens.map((value) => ({
    type: value === '•' ? 'separator' : 'word',
    value,
  }))
}
