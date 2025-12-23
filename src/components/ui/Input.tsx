import React from 'react'
import { cn } from '../../lib/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'w-full rounded-md border border-transparent bg-[rgba(255,255,255,0.02)] px-3 py-2 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:ring-2 focus:ring-[var(--accent-green)]',
        className
      )}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export default Input
