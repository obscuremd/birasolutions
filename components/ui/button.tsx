import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-sans text-[0.67rem] font-bold tracking-[0.22em] uppercase",
    "transition-all duration-200 outline-none cursor-pointer",
    "rounded-[var(--radius)]" /* softer corners */,
    "focus-visible:ring-2 focus-visible:ring-[var(--bs-blue)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bs-navy)]",
    "disabled:pointer-events-none disabled:opacity-35",
    "active:scale-[0.97]",
  ].join(" "),
  {
    variants: {
      variant: {
        /* ── Solid blue (primary CTA) ───────────────────── */
        default:
          "bg-[var(--bs-blue)] text-[var(--bs-dark)] font-black hover:bg-[var(--bs-blue-bright)] shadow-[var(--shadow-blue)] hover:shadow-[0_0_36px_rgba(45,184,216,0.45)]",

        /* ── Blue outline ───────────────────────────────── */
        outline:
          "border border-[var(--bs-blue)] text-[var(--bs-blue)] bg-transparent hover:bg-[var(--bs-blue)] hover:text-[var(--bs-dark)]",

        /* ── Solid green (secondary CTA) ────────────────── */
        accent:
          "bg-[var(--bs-green)] text-white font-black hover:bg-[var(--bs-green-bright)] shadow-[var(--shadow-green)] hover:shadow-[0_0_36px_rgba(38,186,129,0.45)]",

        /* ── Green outline ──────────────────────────────── */
        "accent-outline":
          "border border-[var(--bs-green)] text-[var(--bs-green)] bg-transparent hover:bg-[var(--bs-green)] hover:text-white",

        /* ── Ghost ──────────────────────────────────────── */
        ghost:
          "text-[var(--bs-muted)] hover:text-[var(--bs-blue)] bg-transparent",

        /* ── White outline (dark heroes) ────────────────── */
        "outline-white":
          "border border-white/25 text-white/80 bg-transparent hover:border-[var(--bs-blue)] hover:text-[var(--bs-blue)]",

        /* ── GLASS BLUE — frosted glass teal button ─────── *
         * Like the client's accent snippet but refined.      *
         * Use on: hero secondary CTA, important sections.    */
        "glass-blue":
          "border-2 border-[var(--bs-blue)] text-[var(--bs-blue)] " +
          "bg-gradient-to-r from-[rgba(45,184,216,0.12)] via-[rgba(45,200,230,0.08)] to-[rgba(45,184,216,0.12)] " +
          "backdrop-blur-sm " +
          "hover:brightness-110 hover:border-[var(--bs-blue-bright)] hover:text-[var(--bs-blue-bright)] " +
          "shadow-md hover:shadow-[0_0_22px_rgba(45,184,216,0.35)]",

        /* ── GLASS GREEN — frosted glass green button ───── *
         * Use on: hero, contact, important sections.         */
        "glass-green":
          "border-2 border-[var(--bs-green)] text-[var(--bs-green)] " +
          "bg-gradient-to-r from-[rgba(38,186,129,0.12)] via-[rgba(43,211,198,0.08)] to-[rgba(43,212,180,0.12)] " +
          "backdrop-blur-sm " +
          "hover:brightness-110 hover:border-[var(--bs-green-bright)] hover:text-[var(--bs-green-bright)] " +
          "shadow-md hover:shadow-[0_0_22px_rgba(38,186,129,0.35)]",

        /* ── GLOW BLUE — always-glowing, pulsing blue ───── *
         * Use sparingly: hero primary CTA, header Free Demo, *
         * key conversion touchpoints only.                   */
        "glow-blue":
          "bg-[var(--bs-blue)] text-[var(--bs-dark)] font-black " +
          "animate-glow-blue " +
          "hover:bg-[var(--bs-blue-bright)] hover:brightness-110",

        /* ── GLOW GREEN — always-glowing, pulsing green ─── *
         * Use sparingly: key green CTAs, subscribe sections. */
        "glow-green":
          "bg-[var(--bs-green)] text-white font-black " +
          "animate-glow-green " +
          "hover:bg-[var(--bs-green-bright)] hover:brightness-110",

        /* ── Destructive ────────────────────────────────── */
        destructive: "bg-[var(--bs-destructive)] text-white hover:opacity-90",

        link: "h-auto p-0 text-[var(--bs-blue)] underline-offset-4 hover:underline text-[0.72rem] tracking-[0.16em] uppercase font-bold",
      },
      size: {
        sm: "h-8 px-4 rounded-[calc(var(--radius)-2px)]",
        default: "h-10 px-6",
        lg: "h-11 px-8",
        xl: "h-12 px-10",
        icon: "size-9 p-0",
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
