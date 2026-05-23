import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 w-fit whitespace-nowrap shrink-0 border px-2.5 py-0.5 text-[0.62rem] font-bold tracking-[0.18em] uppercase transition-colors overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-[var(--bs-gold)] border-transparent text-[var(--bs-dark)]",
        gold: "bg-[rgba(201,168,76,0.12)] border-[rgba(201,168,76,0.3)] text-[var(--bs-gold)]",
        green:
          "bg-[rgba(15,155,94,0.12)] border-[rgba(15,155,94,0.3)] text-[var(--bs-green)]",
        outline:
          "border-[var(--bs-navy-border)] text-[var(--bs-muted)] bg-transparent",
        dark: "bg-[var(--bs-dark)] border-[var(--bs-navy-border)] text-[var(--bs-muted)]",
        glass: "bg-white/8 border-white/15 text-white/70 backdrop-blur",
        destructive:
          "bg-[var(--bs-destructive)]/15 border-[var(--bs-destructive)]/30 text-[var(--bs-destructive)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
