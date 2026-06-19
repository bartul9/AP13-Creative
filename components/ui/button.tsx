import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full text-[13px] font-semibold tracking-[0.01em] transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 outline-none focus-visible:ring-ring/60 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:ring-destructive/30",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#34e6f5] to-[#16c6e0] text-primary-foreground shadow-[0_10px_30px_-10px_rgba(34,224,242,0.7)] hover:shadow-[0_16px_44px_-12px_rgba(34,224,242,0.85)] hover:-translate-y-0.5 hover:[&_svg]:translate-x-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary/35 bg-primary/[0.04] text-foreground backdrop-blur-sm hover:border-primary/70 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 hover:[&_svg]:translate-x-0.5",
        secondary:
          "border border-border bg-card/70 text-card-foreground backdrop-blur-sm hover:border-primary/50 hover:text-primary",
        ghost: "text-foreground/80 hover:bg-primary/10 hover:text-primary",
        link: "h-auto px-0 py-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 has-[>svg]:pr-5",
        sm: "h-9 gap-1.5 px-4 text-[12px] has-[>svg]:pr-3.5",
        lg: "h-13 px-8 text-sm has-[>svg]:pr-6",
        icon: "size-11 p-0",
        "icon-sm": "size-9 p-0",
        "icon-lg": "size-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
