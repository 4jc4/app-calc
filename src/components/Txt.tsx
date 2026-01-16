import type { ComponentPropsWithoutRef, ElementType } from 'react'

const txtVariants = {
  default: 'text-xl',
  muted: 'text-xl text-(--text-secondary)',
  heading: 'text-2xl',
  blast: 'text-3xl',
}

type TxtProps<T extends ElementType> = {
  as?: T
  variant?: keyof typeof txtVariants
} & ComponentPropsWithoutRef<T>

export function Txt<T extends ElementType = 'span'>({
  as,
  variant = 'default',
  className = '',
  children,
  ...props
}: TxtProps<T>) {
  const Component = as || 'span'

  return (
    <Component
      className={`${txtVariants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
}
