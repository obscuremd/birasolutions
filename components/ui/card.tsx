import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "flex flex-col transition-all duration-200 rounded-[var(--radius)]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--bs-navy-mid)] border border-[var(--bs-navy-border)] shadow-[var(--shadow-xs)]",
        elevated:
          "bg-[var(--bs-navy-light)] border border-[var(--bs-navy-border)] shadow-[var(--shadow-sm)]",
        /* Blue-accented border */
        blue: "bg-[var(--bs-navy-mid)] border border-[rgba(45,184,216,0.25)] shadow-[var(--shadow-sm)] hover:border-[rgba(45,184,216,0.55)] hover:shadow-[var(--shadow-blue)]",
        /* Green-accented border */
        green:
          "bg-[var(--bs-navy-mid)] border border-[rgba(38,186,129,0.25)] shadow-[var(--shadow-sm)] hover:border-[rgba(38,186,129,0.55)] hover:shadow-[var(--shadow-green)]",
        /* Feature hover-lift */
        feature:
          "bg-[var(--bs-navy-mid)] border border-[var(--bs-navy-border)] shadow-[var(--shadow-xs)] hover:border-[rgba(45,184,216,0.3)] hover:shadow-[var(--shadow-blue)] hover:-translate-y-0.5 cursor-default",
        /* Website-type profession card */
        profession:
          "bg-[var(--bs-navy-mid)] border border-[var(--bs-navy-border)] shadow-[var(--shadow-xs)] hover:border-[rgba(45,184,216,0.4)] hover:shadow-[var(--shadow-blue)] hover:-translate-y-1 cursor-default transition-all duration-200",
        dark: "bg-[var(--bs-dark)] border border-[var(--bs-navy-border)]",
        media:
          "overflow-hidden bg-[var(--bs-navy-light)] border border-[var(--bs-navy-border)] p-0",
        glass: "bg-white/5 border border-white/10 backdrop-blur-sm",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

function Card({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  );
}
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "grid auto-rows-min items-start gap-1.5 px-6 pt-6",
        className,
      )}
      {...props}
    />
  );
}
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-bold leading-tight text-[var(--bs-white)]",
        className,
      )}
      {...props}
    />
  );
}
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-[var(--bs-muted)]", className)}
      {...props}
    />
  );
}
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 pb-6", className)}
      {...props}
    />
  );
}
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 pb-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  cardVariants,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
