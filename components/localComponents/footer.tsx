import Image from "next/image";
import Link from "next/link";
import { contact, navLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--bira-line)] bg-[var(--bira-paper)]">
      {/* Main footer grid */}
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.8fr_1fr_1.2fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/brand/bira-logo.svg"
              alt="Bira Solution Limited"
              width={40}
              height={40}
              className="size-10 rounded-full object-contain opacity-85"
            />
            <div>
              <p className="font-display text-2xl font-semibold text-[var(--bira-ink)]">
                Bira Solution
              </p>
              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[var(--bira-gold)]">
                Limited
              </p>
            </div>
          </div>
          <p className="text-sm text-[var(--bira-smoke)] leading-relaxed max-w-xs">
            Lagos-based studio delivering professional websites, software
            systems, hosting, branding, and digital marketing since 2015.
          </p>
          <div className="mt-6 h-px bg-[var(--bira-line)]" />
          <p className="mt-4 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[var(--bira-gold-deep)]">
            Open 24 hours · 7 days a week
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="eyebrow mb-5">Navigation</p>
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--bira-smoke)] hover:text-[var(--bira-gold-deep)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/payment"
              className="text-sm text-[var(--bira-smoke)] hover:text-[var(--bira-gold-deep)] transition-colors"
            >
              Payment
            </Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="eyebrow mb-5">Contact</p>
          <div className="flex flex-col gap-3 text-sm text-[var(--bira-smoke)]">
            <div>
              <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bira-charcoal)] mb-1">
                Phone / WhatsApp
              </p>
              <p>{contact.phone}</p>
              <p>{contact.phoneAlt}</p>
            </div>
            <div>
              <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bira-charcoal)] mb-1">
                Email
              </p>
              <p>{contact.email}</p>
            </div>
            <div>
              <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bira-charcoal)] mb-1">
                Office
              </p>
              <p className="leading-relaxed">{contact.addresses[0]}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--bira-line)]">
        <div className="container-page flex flex-col sm:flex-row justify-between gap-2 py-5 text-[0.68rem] text-[var(--bira-smoke)]">
          <p>
            © {new Date().getFullYear()} Bira Solution Limited. All rights
            reserved.
          </p>
          <p>Lagos, Nigeria · {contact.website}</p>
        </div>
      </div>
    </footer>
  );
}
