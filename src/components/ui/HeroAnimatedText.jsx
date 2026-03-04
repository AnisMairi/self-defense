import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'

const ACCENT_RED = '#B11226'

/**
 * Hero titre animé typewriter / reveal mot par mot.
 * - Une seule lecture, pas de boucle.
 * - En fin d’animation : dégradé de couleur vers le rouge (accent).
 * - prefers-reduced-motion : pas d’animation, callback une fois.
 */
export default function HeroAnimatedText({
  text,
  className = '',
  onAnimationComplete,
  tag: Tag = 'h1',
  splitType = 'words',
  delay = 280,
  duration = 0.5,
  ease = 'power2.out',
  from = { opacity: 0, y: 24 },
  to = { opacity: 1, y: 0 },
  ...rest
}) {
  const elRef = useRef(null)
  const hasCalledComplete = useRef(false)

  const handleComplete = () => {
    if (hasCalledComplete.current) return
    hasCalledComplete.current = true
    onAnimationComplete?.()
  }

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion) {
      handleComplete()
      return
    }

    const el = elRef.current
    if (!el) return

    let split
    let ctx

    try {
      const types = splitType === 'words' ? 'words' : splitType === 'chars' ? 'chars' : 'words'
      split = new SplitType(el, { types, wordClass: 'hero-word', charClass: 'hero-char' })
      const targets = split.words?.length ? split.words : split.chars
      if (!targets?.length) {
        handleComplete()
        return
      }

      gsap.set(targets, from)

      ctx = gsap.context(() => {
        const delaySec = delay / 1000
        const staggerEnd = (targets.length - 1) * delaySec + duration

        const tl = gsap.timeline({
          delay: 0.3,
          onComplete: handleComplete,
        })
        tl.set(targets, from)
        targets.forEach((target, i) => {
          tl.to(target, { ...to, duration, ease }, i * delaySec)
        })
        tl.to(
          targets,
          {
            color: ACCENT_RED,
            duration: 0.6,
            ease: 'power2.inOut',
            stagger: { amount: 0.4, from: 'start' },
          },
          staggerEnd + 0.2
        )
      }, el)
    } catch (err) {
      handleComplete()
    }

    return () => {
      ctx?.revert()
      if (split?.revert) split.revert()
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return (
      <Tag id="hero-title" className={className} {...rest}>
        {text}
      </Tag>
    )
  }

  return (
    <Tag id="hero-title" ref={elRef} className={className} {...rest}>
      {text}
    </Tag>
  )
}
