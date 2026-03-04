import { useState, useId } from 'react'

/**
 * Accessible Accordion: ARIA expanded/controls, keyboard (Enter/Space), focus management.
 * items: Array<{ id: string, title: string, content: ReactNode }>
 */
export default function Accordion({ items, className = '' }) {
  const [openId, setOpenId] = useState(null)
  const baseId = useId()

  const handleKeyDown = (e, itemId) => {
    if (e.key !== 'Enter' && e.key !== ' ') return
    e.preventDefault()
    setOpenId((prev) => (prev === itemId ? null : itemId))
  }

  return (
    <div className={`space-y-2 ${className}`} role="region" aria-label="Accordéon">
      {items.map((item) => {
        const isOpen = openId === item.id
        const triggerId = `${baseId}-trigger-${item.id}`
        const panelId = `${baseId}-panel-${item.id}`

        return (
          <div
            key={item.id}
            className="rounded-card border border-white/10 bg-surface overflow-hidden"
          >
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
              >
                {item.title}
                <span
                  className="text-text-secondary transition-transform"
                  aria-hidden
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  ▼
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className="border-t border-white/10"
            >
              <div className="px-5 py-4 text-text-secondary">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
