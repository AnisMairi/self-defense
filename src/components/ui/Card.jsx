export default function Card({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={`rounded-card border border-white/10 bg-surface p-6 shadow-card transition-[transform,box-shadow] hover:scale-[1.02] motion-reduce:hover:scale-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
