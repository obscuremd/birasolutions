"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, contact } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--bs-dark)]/96 border-b border-[var(--bs-navy-border)] backdrop-blur-xl"
          : "bg-[var(--bs-dark)]/70 backdrop-blur-md",
      )}
    >
      {/* Top ticker bar */}
      <div className="border-b border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page flex h-7 items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[var(--bs-green)] animate-pulse" />
            <span className="text-[0.6rem] font-bold tracking-[0.22em] uppercase text-[var(--bs-muted)]">
              Available 24/7 · Lagos, Nigeria
            </span>
          </div>
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-1.5 text-[0.6rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-blue)] hover:text-[var(--bs-blue-bright)] transition-colors"
          >
            <Phone className="size-2.5" />
            {contact.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-page flex h-14 items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="group relative flex shrink-0 items-center"
          aria-label="Bira Solution"
        >
          <div className="relative flex h-[56px] w-[170px] items-center justify-center overflow-hidden">
            <div className="relative h-[42px] w-full">
              <Image
                src="/brand/Logo.svg"
                alt="Bira Solution Limited"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <Link href="/payment">Pay Online</Link>
          </Button>
          {/* Free Demo — always-glowing glow-blue button */}
          <Button asChild variant="glow-blue" size="sm">
            <Link href="/contact">Free Demo</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-[var(--radius)] border border-[var(--bs-navy-border)] text-[var(--bs-muted)] hover:text-[var(--bs-blue)] hover:border-[var(--bs-blue)]/40 transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--bs-navy-border)] bg-[var(--bs-dark)] lg:hidden">
          <nav className="container-page py-5 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[var(--bs-muted)] hover:text-[var(--bs-blue)] border-b border-[var(--bs-navy-border)] last:border-0 transition-colors"
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
              <Button asChild variant="glow-blue" size="sm" className="flex-1">
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
