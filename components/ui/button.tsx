import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2.5 whitespace-nowrap",
    "font-sans text-[0.68rem] font-bold tracking-[0.2em] uppercase",
    "transition-all duration-200 outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "active:scale-[0.98]",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-[var(--bira-gold)] text-[var(--bira-ink)] hover:bg-[var(--bira-gold-deep)] hover:text-white",
        outline:
          "border border-[var(--bira-gold)] text-[var(--bira-gold-deep)] bg-transparent hover:bg-[var(--bira-gold-pale)]",
        ghost:
          "text-[var(--bira-charcoal)] hover:text-[var(--bira-gold-deep)] bg-transparent",
        accent:
          "bg-[var(--bira-green)] text-white hover:bg-[var(--bira-green-mid)]",
        "outline-dark":
          "border border-[var(--bira-ink)] text-[var(--bira-ink)] bg-transparent hover:bg-[var(--bira-ink)] hover:text-white",
        link: "h-auto p-0 text-[var(--bira-gold-deep)] underline-offset-4 hover:underline text-xs tracking-wide uppercase font-bold",
      },
      size: {
        sm: "h-8 px-4",
        default: "h-10 px-6",
        lg: "h-11 px-8",
        xl: "h-12 px-10",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
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
