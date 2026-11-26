import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { buttonClasses, type ButtonVariant } from '@/lib/button'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return <button className={buttonClasses(variant, className)} {...props} />
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant
}

export function LinkButton({ variant = 'primary', className, ...props }: LinkButtonProps) {
  return <a className={buttonClasses(variant, className)} {...props} />
}
