import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode
  variant?: 'default' | 'primary'
}

const buttonVariants = {
  default: 'bg-green-500',
  primary: 'bg-sky-500',
}

export function Button({
  variant = 'default',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        px-4 py-2 rounded text-white 
        ${buttonVariants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
