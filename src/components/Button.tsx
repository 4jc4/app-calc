import type { ComponentProps, ReactNode } from 'react'
import { Txt } from './Txt'

const buttonVariants = {
  default: 'bg-(--background)',
  primary: 'bg-(--primary)',
}

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  variant?: keyof typeof buttonVariants
}

export function Button({
  variant = 'default',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Txt
      as="button"
      variant="heading"
      className={`
            flex items-center justify-center rounded-xl
            p-3 cursor-pointer text-(--text) 
            bg-linear-(--gradient) 
            hover:bg-linear-(--gradient-hover)
            shadow-(--shadow)
            ${buttonVariants[variant]}
            ${className || ''}
          `}
      {...props}
    >
      {children}
    </Txt>
  )
}
