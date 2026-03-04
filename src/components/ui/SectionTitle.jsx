export default function SectionTitle({ title, subtitle, id, className = '' }) {
  return (
    <div className={className}>
      <h2
        id={id}
        className="font-display text-3xl tracking-wide text-text-primary md:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-text-secondary">{subtitle}</p>
      )}
    </div>
  )
}
