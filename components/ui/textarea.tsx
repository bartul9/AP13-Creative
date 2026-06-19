import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-border placeholder:text-muted-foreground/70 focus-visible:border-primary/70 focus-visible:bg-background/70 focus-visible:ring-primary/20 aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex field-sizing-content min-h-32 w-full rounded-xl border bg-background/40 px-4 py-3 text-base font-normal text-foreground backdrop-blur-sm transition-[border-color,color,box-shadow,background-color] outline-none hover:border-primary/40 focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
