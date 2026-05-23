import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, navLinks, coreServices } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
      {/* Subtle top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--bs-blue)] to-transparent opacity-30" />

      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="relative">
              <Image
                src="/brand/Logo.svg"
                alt="Bira Solution Limited"
                width={140}
                height={38}
                className="object-contain h-[38px] w-auto"
              />
            </div>
          </div>
          <p className="text-[0.82rem] text-[var(--bs-muted)] leading-relaxed max-w-xs">
            Lagos-based digital studio delivering professional websites, custom
            software, hosting, branding, and digital marketing since 2015.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[var(--bs-green)] animate-pulse" />
            <span className="text-[0.62rem] font-bold tracking-[0.2em] uppercase text-[var(--bs-green)]">
              Open 24 hours · 7 days
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="mb-5 text-[0.65rem] font-bold tracking-[0.22em] uppercase text-[var(--bs-white)]">
            Navigation
          </p>
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.82rem] text-[var(--bs-muted)] hover:text-[var(--bs-white)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/payment"
              className="text-[0.82rem] text-[var(--bs-muted)] hover:text-[var(--bs-white)] transition-colors"
            >
              Payment
            </Link>
          </nav>
        </div>

        {/* Services */}
        <div>
          <p className="mb-5 text-[0.65rem] font-bold tracking-[0.22em] uppercase text-[var(--bs-white)]">
            Services
          </p>
          <div className="flex flex-col gap-2.5">
            {coreServices.slice(0, 6).map((s) => (
              <Link
                key={s.title}
                href="/services"
                className="text-[0.82rem] text-[var(--bs-muted)] hover:text-[var(--bs-white)] transition-colors"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-5 text-[0.65rem] font-bold tracking-[0.22em] uppercase text-[var(--bs-white)]">
            Contact
          </p>
          <div className="flex flex-col gap-3.5">
            <div className="flex gap-3">
              <Phone
                className="size-3.5 shrink-0 mt-0.5 text-[var(--bs-blue)]"
                strokeWidth={1.5}
              />
              <div className="text-[0.82rem] text-[var(--bs-muted)]">
                <p>{contact.phone}</p>
                <p>{contact.phoneAlt}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail
                className="size-3.5 shrink-0 mt-0.5 text-[var(--bs-blue)]"
                strokeWidth={1.5}
              />
              <p className="text-[0.82rem] text-[var(--bs-muted)]">
                {contact.email}
              </p>
            </div>
            <div className="flex gap-3">
              <MapPin
                className="size-3.5 shrink-0 mt-0.5 text-[var(--bs-green)]"
                strokeWidth={1.5}
              />
              <p className="text-[0.82rem] text-[var(--bs-muted)] leading-relaxed">
                {contact.addresses[0]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--bs-navy-border)]">
        <div className="container-page flex flex-col sm:flex-row justify-between gap-2 py-4">
          <p className="text-[0.65rem] text-[var(--bs-subtle)] tracking-wide">
            © {new Date().getFullYear()} Bira Solution Limited. All rights
            reserved.
          </p>
          <p className="text-[0.65rem] text-[var(--bs-subtle)] tracking-wide">
            Lagos, Nigeria · {contact.website}
          </p>
        </div>
      </div>
    </footer>
  );
}
