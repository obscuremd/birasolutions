// ═══════════════════════════════════════════════════════════════
// recent-projects/page.tsx
// ═══════════════════════════════════════════════════════════════
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/site/image-carousel";
import { CtaBand, SectionIntro } from "@/components/site/sections";

const projectCategories = [
  {
    label: "Business website",
    desc: "Corporate and company sites with CMS integration.",
  },
  {
    label: "E-commerce website",
    desc: "Online stores with payment gateway and inventory.",
  },
  {
    label: "CMS management system",
    desc: "Custom content and data management dashboards.",
  },
  {
    label: "Hospital management platform",
    desc: "Patient records, appointments, and billing systems.",
  },
  {
    label: "Restaurant and bar system",
    desc: "POS, reservation, and menu management software.",
  },
  {
    label: "Real estate website",
    desc: "Property listings, agents, and booking portals.",
  },
  {
    label: "Movie production",
    desc: "Film and video production project websites and reels.",
  },
  {
    label: "Brand identity",
    desc: "Logo, color systems, print, and digital brand assets.",
  },
];

export default function RecentProjectsPage() {
  return (
    <>
      <HeroCarousel
        slides={[
          "Portfolio screen recording showcase",
          "Website project walkthrough",
          "CMS dashboard demo reel",
        ]}
        minHeight="min-h-[55vh]"
      >
        <div className="container-page flex h-full flex-col justify-center py-16 min-h-[55vh]">
          <div className="max-w-xl">
            <span className="eyebrow">Recent projects</span>
            <h1
              className="mt-5 font-black text-[var(--bs-white)]"
              style={{ fontSize: "clamp(2rem,4.5vw,3.6rem)", lineHeight: 1.06 }}
            >
              Screen recordings, demos &amp;{" "}
              <span className="text-[var(--bs-blue)]">completed work.</span>
            </h1>
            <p className="mt-5 max-w-md text-[0.9rem] text-[var(--bs-muted)] leading-relaxed">
              A dedicated showcase for portfolio imagery, screen recording
              demos, and client project walkthroughs.
            </p>
          </div>
        </div>
      </HeroCarousel>

      <section className="section-y">
        <div className="container-page">
          {/* Featured video panel */}
          <div className="relative overflow-hidden rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-dark)] p-8 md:p-12 mb-14">
            <div className="absolute left-0 top-0 h-16 w-px bg-gradient-to-b from-[var(--bs-blue)] to-transparent opacity-60" />
            <div className="absolute left-0 top-0 h-px w-16 bg-gradient-to-r from-[var(--bs-blue)] to-transparent opacity-60" />
            <div className="absolute right-0 bottom-0 h-16 w-px bg-gradient-to-t from-[var(--bs-green)] to-transparent opacity-50" />
            <div className="absolute right-0 bottom-0 h-px w-16 bg-gradient-to-l from-[var(--bs-green)] to-transparent opacity-50" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <span className="eyebrow">Featured media reel</span>
                <h2
                  className="mt-4 font-bold text-[var(--bs-white)]"
                  style={{
                    fontSize: "clamp(1.6rem,2.8vw,2.4rem)",
                    lineHeight: 1.1,
                  }}
                >
                  20-second screen recording — the strongest proof of work.
                </h2>
                <p className="mt-3 text-sm text-[var(--bs-muted)] leading-relaxed max-w-md">
                  Place the demo reel here to show visitors real project
                  outcomes before exploring individual case studies below.
                </p>
                <Button asChild size="sm" className="mt-6" variant="glass-blue">
                  <Link href="/contact">
                    Request a project demo <ArrowRight className="size-3" />
                  </Link>
                </Button>
              </div>
              <div className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-4 image-slot">
                <div className="flex aspect-video items-center justify-center rounded-lg border border-[var(--bs-navy-border)]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-lg border border-[rgba(45,184,216,0.3)] bg-[rgba(45,184,216,0.06)] text-[var(--bs-blue)]">
                      <Play className="size-4 ml-0.5" strokeWidth={1.5} />
                    </div>
                    <p className="text-[0.62rem] font-bold tracking-[0.2em] uppercase text-[var(--bs-muted)]">
                      Video placeholder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SectionIntro
            eyebrow="Portfolio categories"
            title="The kinds of outcomes Bira Solution delivers."
            text="Each panel is ready for screenshots, video embeds, or case-study links once project assets are available."
          />

          <div className="grid gap-px bg-[var(--bs-navy-border)] border border-[var(--bs-navy-border)] rounded-[var(--radius)] overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {projectCategories.map(({ label, desc }, i) => (
              <div
                key={label}
                className="group relative flex flex-col gap-4 p-5 bg-[var(--bs-navy-mid)] hover:bg-[var(--bs-navy-light)] overflow-hidden transition-all duration-200"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, var(--bs-blue-glow) 0%, transparent 60%)",
                  }}
                />
                <div className="relative z-10 image-slot aspect-[4/3] rounded-lg border border-[var(--bs-navy-border)] group-hover:border-[rgba(45,184,216,0.25)] transition-colors">
                  <div className="absolute top-2 left-2 text-[0.55rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-blue)]/50">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="font-bold text-[0.95rem] text-[var(--bs-white)] mb-1.5 leading-snug group-hover:text-[var(--bs-blue)] transition-colors">
                    {label}
                  </h3>
                  <p className="text-[0.78rem] text-[var(--bs-muted)] leading-relaxed">
                    {desc}
                  </p>
                </div>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="relative z-10 mt-auto self-start px-0 text-[var(--bs-blue)] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Link href="/contact">
                    Request demo <ArrowRight className="size-3" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild variant="glow-blue">
              <Link href="/contact">Request a project demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
