/**
 * Titre avec gradient animé (rouge profond → blanc chaud → rouge sombre).
 * Réutilisable sur les pages hero. Taille gérée par la page via className.
 * Respecte prefers-reduced-motion (désactivation animation via CSS).
 */
export default function GradientTitle({ children, className = '', as: Component = 'h1', ...props }) {
  return (
    <Component
      className={`hero-gradient-title ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
}
