import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageCarousel } from "@/components/site/image-carousel";
import { CtaBand, PageHero, SectionIntro } from "@/components/site/sections";

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
      <PageHero
        eyebrow="Recent projects"
        title="Screen recordings, demos, and completed work."
        text="A dedicated showcase for portfolio imagery, screen recording demos, and client project walkthroughs."
      >
        <ImageCarousel
          title="Portfolio"
          slides={[
            "Portfolio screen recording placeholder",
            "Website project walkthrough",
            "CMS dashboard demo",
          ]}
        />
      </PageHero>

      {/* ── Featured video reel ── */}
      <section className="section-y">
        <div className="container-page">
          {/* Dark featured panel */}
          <div className="relative overflow-hidden bg-[var(--bira-ink)] p-8 md:p-12 mb-14">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--bira-gold)] to-transparent opacity-35" />
            <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--bira-gold)] to-transparent opacity-35" />
            <div className="absolute inset-x-0 top-0 h-px bg-[var(--bira-gold)] opacity-28" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--bira-gold)] opacity-28" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <span className="eyebrow" style={{ color: "var(--bira-gold)" }}>
                  Featured media reel
                </span>
                <h2
                  className="mt-4 font-display font-semibold text-white"
                  style={{
                    fontSize: "clamp(1.6rem,2.8vw,2.4rem)",
                    lineHeight: 1.1,
                  }}
                >
                  20-second screen recording — the strongest proof of work.
                </h2>
                <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-md">
                  Place the demo reel here to show visitors real project
                  outcomes before exploring individual case studies below.
                </p>
              </div>

              {/* Video placeholder */}
              <div className="border border-white/10 bg-white/5 p-4">
                <div className="flex aspect-video items-center justify-center border border-white/8 bg-black/20">
                  <div className="flex flex-col items-center gap-3 text-white/40">
                    <div className="flex size-10 items-center justify-center border border-white/20">
                      <Play className="size-4 ml-0.5" strokeWidth={1.5} />
                    </div>
                    <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase">
                      Video placeholder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio categories */}
          <SectionIntro
            eyebrow="Portfolio categories"
            title="The kinds of outcomes Bira Solution delivers."
            text="Each panel is ready for screenshots, video embeds, or case-study links once project assets are available."
          />

          <div className="grid gap-px bg-[var(--bira-line-strong)] border border-[var(--bira-line-strong)] sm:grid-cols-2 lg:grid-cols-4">
            {projectCategories.map(({ label, desc }, i) => (
              <div
                key={label}
                className={`flex flex-col gap-4 p-6 group transition-colors duration-200 ${
                  i === 0
                    ? "bg-[var(--bira-paper)]"
                    : "bg-white hover:bg-[var(--bira-paper)]"
                }`}
              >
                {/* Image slot */}
                <div className="image-slot aspect-[4/3] border border-[var(--bira-line)]" />
                <div>
                  <h3 className="font-display text-[1.05rem] font-semibold text-[var(--bira-ink)] mb-1.5 leading-snug">
                    {label}
                  </h3>
                  <p className="text-[0.78rem] text-[var(--bira-smoke)] leading-relaxed">
                    {desc}
                  </p>
                </div>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="mt-auto self-start px-0 text-[var(--bira-gold-deep)]"
                >
                  <Link href="/contact">
                    Request demo <ArrowRight className="size-3" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild>
              <Link href="/contact">Request a project demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
