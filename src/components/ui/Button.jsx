import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-accent text-text-primary hover:bg-accent/90 focus:ring-accent active:scale-[0.98] transition-transform',
  secondary:
    'border border-white/20 bg-transparent text-text-primary hover:bg-white/10 hover:border-white/30 focus:ring-text-secondary',
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
    'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background'

  const combined = `${base} ${variants[variant]} ${className}`

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
