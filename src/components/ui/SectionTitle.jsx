export default function SectionTitle({ title, subtitle, id, className = '' }) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex flex-col gap-3">
        <div className="h-1 w-12 bg-accent rounded-full" />
        <h2
          id={id}
          className="font-display text-4xl tracking-widest uppercase text-text-primary md:text-5xl"
        >
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  )
}
