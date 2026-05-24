import Link from "next/link";
import { ArrowRight, Check, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site";

/* ── Section Intro ──────────────────────────────────────────── */
export function SectionIntro({
  eyebrow,
  title,
  text,
  align = "center",
  accentColor = "blue",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  accentColor?: "blue" | "green";
}) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <span
        className={`${accentColor === "green" ? "eyebrow-green" : "eyebrow"} ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className="mt-4 font-bold text-[var(--bs-white)]"
        style={{ fontSize: "clamp(1.7rem,2.8vw,2.6rem)", lineHeight: 1.1 }}
      >
        {title}
      </h2>
      {text && (
        <p className="mt-3 text-[0.875rem] leading-relaxed text-[var(--bs-muted)]">
          {text}
        </p>
      )}
    </div>
  );
}

/* ── CTA Band ───────────────────────────────────────────────── */
export function CtaBand() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[var(--radius)] bg-[var(--bs-dark)] border border-[var(--bs-navy-border)] px-10 py-14 md:px-14">
          {/* Corner accent lines */}
          <div className="absolute left-0 top-0 h-20 w-px rounded-tl-[var(--radius)] bg-gradient-to-b from-[var(--bs-blue)] to-transparent opacity-50" />
          <div className="absolute left-0 top-0 h-px w-20 bg-gradient-to-r from-[var(--bs-blue)] to-transparent opacity-50" />
          <div className="absolute right-0 bottom-0 h-20 w-px bg-gradient-to-t from-[var(--bs-green)] to-transparent opacity-40" />
          <div className="absolute right-0 bottom-0 h-px w-20 bg-gradient-to-l from-[var(--bs-green)] to-transparent opacity-40" />

          <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="eyebrow">Schedule a Meeting</span>
              <h2
                className="mt-4 font-bold text-[var(--bs-white)]"
                style={{
                  fontSize: "clamp(1.8rem,3vw,2.8rem)",
                  lineHeight: 1.1,
                }}
              >
                Ready to make Bira Solution your technology partner?
              </h2>
              <p className="mt-3 max-w-lg text-sm text-[var(--bs-muted)] leading-relaxed">
                Contact Bira Solution for a Demo, schedule a free online meeting
                or physical meeting (30mins–1hr). Consider making Bira Solution
                your Trusted Technology partner — we will help you achieve your
                goals contact us now.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Button asChild size="lg" variant="glow-blue">
                <Link href="/contact">
                  I&apos;m Interested <ArrowRight className="size-3.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="glass-green">
                <Link
                  href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                >
                  <PhoneCall className="size-3.5" /> Order by WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Feature List ───────────────────────────────────────────── */
export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm text-[var(--bs-muted)]"
        >
          <Check
            className="mt-0.5 size-3.5 shrink-0 text-[var(--bs-green)]"
            strokeWidth={2.5}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ── Contact Card ───────────────────────────────────────────── */
export function ContactCard() {
  return (
    <div className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6">
      <p className="eyebrow mb-4">Help Desk</p>
      <div className="flex flex-col gap-2 text-sm text-[var(--bs-muted)]">
        <p>
          Call/WhatsApp:{" "}
          <span className="text-[var(--bs-white)]">{contact.phone}</span>
        </p>
        <p>
          Call/WhatsApp:{" "}
          <span className="text-[var(--bs-white)]">{contact.phoneAlt}</span>
        </p>
        <p>
          Email: <span className="text-[var(--bs-white)]">{contact.email}</span>
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[var(--bs-green)] animate-pulse" />
          <span className="text-[0.62rem] font-bold tracking-[0.2em] uppercase text-[var(--bs-green)]">
            Open 24 hours
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Stats Bar ──────────────────────────────────────────────── */
export function StatsBar({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div
      className="grid gap-px bg-[var(--bs-navy-border)] border border-[var(--bs-navy-border)]"
      style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}
    >
      {stats.map(({ value, label }, i) => (
        <div key={label} className="bg-[var(--bs-dark)] px-6 py-5 text-center">
          <p
            className="text-2xl font-black"
            style={{
              color: i % 2 === 0 ? "var(--bs-blue)" : "var(--bs-green)",
            }}
          >
            {value}
          </p>
          <p className="mt-1 text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[var(--bs-muted)]">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
