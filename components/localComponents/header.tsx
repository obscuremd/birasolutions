"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--bira-white)]/95 border-b border-[var(--bira-line)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Bira Solution"
        >
          <Image
            src="/brand/bira-logo.svg"
            alt="Bira Solution Limited"
            width={36}
            height={36}
            className="size-9 rounded-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            priority
          />
          <div className="leading-none">
            <p className="font-display text-xl font-semibold text-[var(--bira-ink)] tracking-tight">
              Bira Solution
            </p>
            <p className="text-[8.5px] font-bold uppercase tracking-[0.3em] text-[var(--bira-gold)] mt-0.5">
              Lagos · Nigeria
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <Link href="/payment">Pay Online</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/contact">Free Demo</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center text-[var(--bira-charcoal)] lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--bira-line)] bg-[var(--bira-white)] lg:hidden">
          <nav className="container-page py-6 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[var(--bira-charcoal)] hover:text-[var(--bira-gold-deep)] border-b border-[var(--bira-line)] last:border-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-5 flex gap-3">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link href="/payment" onClick={() => setOpen(false)}>
                  Pay Online
                </Link>
              </Button>
              <Button asChild size="sm" className="flex-1">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Free Demo
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
