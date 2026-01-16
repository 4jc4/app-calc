import type { ComponentProps, ReactNode } from 'react'

interface CardProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={`bg-(--background) shadow-(--shadow) rounded-2xl  ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
}
