import Link from "next/link";
import { ArrowRight, Check, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site";

/* ── Page Hero ──────────────────────────────────────────────────── */
export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--bira-line)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 75% 0%, rgba(201,168,76,0.09) 0%, transparent 50%)",
        }}
      />
      <div className="container-page relative grid gap-10 py-14 md:grid-cols-[1fr_1fr] md:items-center md:py-16">
        <div className="flex flex-col justify-center">
          <span className="eyebrow">{eyebrow}</span>
          <h1
            className="mt-5 font-display font-semibold text-[var(--bira-ink)] text-balance"
            style={{ fontSize: "clamp(1.9rem,3.6vw,3rem)", lineHeight: 1.08 }}
          >
            {title}
          </h1>
          <div className="my-5 flex items-center gap-3">
            <div className="h-px w-12 bg-[var(--bira-gold)]" />
            <div className="h-px w-5 bg-[var(--bira-gold)] opacity-40" />
          </div>
          <p className="max-w-sm text-[0.875rem] leading-relaxed text-[var(--bira-smoke)]">
            {text}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="default">
              <Link href="/contact">
                Request a free demo <ArrowRight className="size-3.5" />
              </Link>
            </Button>
            <Button asChild size="default" variant="ghost">
              <Link href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}>
                <PhoneCall className="size-3.5" /> WhatsApp us
              </Link>
            </Button>
          </div>
        </div>
        {children && <div className="relative w-full">{children}</div>}
      </div>
    </section>
  );
}

/* ── Section Intro ──────────────────────────────────────────────── */
export function SectionIntro({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}`}
    >
      <span className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>
        {eyebrow}
      </span>
      <h2
        className="mt-4 font-display font-semibold text-[var(--bira-ink)]"
        style={{ fontSize: "clamp(1.7rem,2.6vw,2.5rem)", lineHeight: 1.1 }}
      >
        {title}
      </h2>
      {text && (
        <p className="mt-3 text-[0.875rem] leading-relaxed text-[var(--bira-smoke)]">
          {text}
        </p>
      )}
    </div>
  );
}

/* ── CTA Band ───────────────────────────────────────────────────── */
export function CtaBand() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="relative overflow-hidden bg-[var(--bira-ink)] px-10 py-14 md:px-14">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--bira-gold)] to-transparent opacity-35" />
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--bira-gold)] to-transparent opacity-35" />
          <div className="absolute inset-x-0 top-0 h-px bg-[var(--bira-gold)] opacity-28" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--bira-gold)] opacity-28" />
          <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="eyebrow" style={{ color: "var(--bira-gold)" }}>
                Schedule a meeting
              </span>
              <h2
                className="mt-4 font-display font-semibold text-white"
                style={{
                  fontSize: "clamp(1.8rem,3vw,2.8rem)",
                  lineHeight: 1.1,
                }}
              >
                Ready to make Bira Solution your technology partner?
              </h2>
              <p className="mt-3 max-w-lg text-sm text-white/50 leading-relaxed">
                Book an online or physical consultation, request a demo, or send
                your project brief by WhatsApp.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                asChild
                size="default"
                className="border border-[var(--bira-gold)] bg-transparent text-[var(--bira-gold)] hover:bg-[var(--bira-gold)] hover:text-[var(--bira-ink)]"
              >
                <Link href="/contact">I am interested</Link>
              </Button>
              <Button
                asChild
                size="default"
                variant="ghost"
                className="text-white/50 hover:text-white text-[0.68rem] tracking-[0.2em] uppercase"
              >
                <Link
                  href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                >
                  WhatsApp us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Feature List ───────────────────────────────────────────────── */
export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm text-[var(--bira-charcoal)]"
        >
          <Check className="mt-0.5 size-4 shrink-0 text-[var(--bira-gold)]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ── Contact Card ───────────────────────────────────────────────── */
export function ContactCard() {
  return (
    <div className="border border-[var(--bira-line)] bg-[var(--bira-paper)] p-6">
      <p className="eyebrow mb-4">Help desk</p>
      <div className="flex flex-col gap-2 text-sm text-[var(--bira-smoke)]">
        <p>Call / WhatsApp: {contact.phone}</p>
        <p>Call / WhatsApp: {contact.phoneAlt}</p>
        <p>Email: {contact.email}</p>
        <p className="mt-2 text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bira-gold-deep)]">
          Open 24 hours
        </p>
      </div>
    </div>
  );
}
