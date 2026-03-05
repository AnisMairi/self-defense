import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-accent text-text-primary hover:bg-accent-hover hover:shadow-accent-glow focus:ring-accent active:scale-[0.98] transition-all duration-300',
  secondary:
    'glass glass-hover text-text-primary focus:ring-text-secondary active:scale-[0.98]',
  outline:
    'border border-accent/30 bg-transparent text-accent hover:bg-accent/10 hover:border-accent focus:ring-accent active:scale-[0.98] transition-all duration-300',
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  type = 'button',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed'

  const combined = `${base} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={combined} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={combined} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={combined} {...props}>
      {children}
    </button>
  )
}
