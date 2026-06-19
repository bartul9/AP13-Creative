import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground/70 selection:bg-primary selection:text-primary-foreground border-border h-12 w-full min-w-0 rounded-xl border bg-background/40 px-4 py-3 text-base font-normal text-foreground backdrop-blur-sm transition-[border-color,color,box-shadow,background-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-semibold hover:border-primary/40 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-primary/70 focus-visible:bg-background/70 focus-visible:ring-primary/20 focus-visible:ring-4',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
