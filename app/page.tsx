import Link from "next/link";
import { ArrowRight, Globe, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel, ImageCarousel } from "@/components/site/image-carousel";
import {
  CtaBand,
  FeatureList,
  SectionIntro,
  StatsBar,
} from "@/components/site/sections";
import {
  coreServices,
  heroSlides,
  reasons,
  testimonials,
  websiteTypes,
  contact,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <HeroCarousel slides={heroSlides}>
        <div className="container-page flex h-full flex-col justify-center py-20 min-h-[calc(100svh-5.25rem)]">
          <div className="max-w-2xl">
            <span className="eyebrow">Lagos Nigeria Web Development</span>

            <h1
              className="mt-5 font-black text-[var(--bs-white)] text-balance leading-[1.04]"
              style={{ fontSize: "clamp(2.4rem,5.5vw,4.5rem)" }}
            >
              Professional websites,{" "}
              <span className="text-[var(--bs-blue)]">software</span> &amp;
              digital solutions.
            </h1>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px w-14 bg-[var(--bs-blue)] opacity-60" />
              <div className="h-px w-6 bg-[var(--bs-blue)] opacity-30" />
            </div>

            <p className="max-w-md text-[0.95rem] leading-relaxed text-[var(--bs-muted)]">
              Bira Solution Limited creates innovative digital solutions that
              help businesses thrive — from polished brand websites to complex
              CMS, CRM, ERP, apps, hosting, and marketing systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="glow-blue">
                <Link href="/contact">
                  Request a free demo <ArrowRight className="size-3.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="glass-green">
                <Link
                  href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                >
                  <PhoneCall className="size-3.5" /> WhatsApp us
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              {[
                "10+ Years Experience",
                "500+ Projects",
                "24/7 Support",
                "Lagos Based",
              ].map((tag) => (
                <div key={tag} className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-[var(--bs-green)]" />
                  <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HeroCarousel>

      {/* Stats */}
      <StatsBar
        stats={[
          { value: "500+", label: "Projects Delivered" },
          { value: "10+", label: "Years Experience" },
          { value: "100%", label: "Client Ownership" },
          { value: "24/7", label: "Support Desk" },
        ]}
      />

      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section className="section-y">
        <div className="container-page">
          <SectionIntro
            eyebrow="Our services"
            title="Everything your business needs, in one technology partner."
          />

          <div className="grid gap-px bg-[var(--bs-navy-border)] border border-[var(--bs-navy-border)] rounded-[var(--radius)] overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.slice(0, 6).map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="group relative flex flex-col gap-4 bg-[var(--bs-navy-mid)] p-6 transition-all duration-200 hover:bg-[var(--bs-navy-light)] overflow-hidden"
              >
                {/* Subtle hover glow — keep it faint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at 0% 0%, rgba(45,184,216,0.07) 0%, transparent 60%)",
                  }}
                />

                {/* Icon box — blue accent only here */}
                <div className="relative z-10 flex size-9 items-center justify-center rounded-lg border border-[rgba(45,184,216,0.2)] text-[var(--bs-blue)] transition-all group-hover:border-[rgba(45,184,216,0.4)] group-hover:bg-[rgba(45,184,216,0.07)]">
                  <Icon className="size-4" strokeWidth={1.5} />
                </div>

                <div className="relative z-10">
                  {/* Title stays white — only turns slightly lighter on hover */}
                  <h3 className="font-bold text-[1.05rem] text-[var(--bs-white)] mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-[0.825rem] text-[var(--bs-muted)] leading-relaxed">
                    {text}
                  </p>
                </div>

                {/* Small blue underline on hover */}
                <div className="relative z-10 h-px w-0 bg-[var(--bs-blue)] transition-all duration-300 group-hover:w-6 rounded-full opacity-60" />
              </div>
            ))}
          </div>

          <div className="mt-7 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/services">
                View all services <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROFESSION CARD GRID
      ══════════════════════════════════════════ */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            {/* Left — headline */}
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">
                Private practice &amp; brand growth
              </span>
              <h2
                className="mt-5 font-bold text-[var(--bs-white)] text-balance"
                style={{
                  fontSize: "clamp(1.8rem,3vw,2.8rem)",
                  lineHeight: 1.1,
                }}
              >
                A responsive, long-lasting website for every profession.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--bs-muted)] max-w-sm">
                Your site will look exceptional on every device — exquisite
                design, SEO, responsiveness, training, maintenance, and ongoing
                support.
              </p>
              <div className="mt-7">
                <Button asChild variant="glow-green">
                  <Link href="/contact">
                    I am interested <ArrowRight className="size-3.5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right — card grid */}
            <div className="grid gap-2.5 sm:grid-cols-2">
              {websiteTypes.map((type) => (
                <Link
                  key={type}
                  href="/contact"
                  className="group relative flex items-center gap-3 overflow-hidden rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-3.5 transition-all duration-200 hover:border-[rgba(45,184,216,0.3)] hover:bg-[var(--bs-navy-light)]"
                >
                  {/* Icon — blue accent */}
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-[rgba(45,184,216,0.15)] bg-[rgba(45,184,216,0.05)] text-[var(--bs-blue)] transition-colors group-hover:border-[rgba(45,184,216,0.35)]">
                    <Globe className="size-3.5" strokeWidth={1.5} />
                  </div>

                  {/* Label — white, no color change on hover */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[0.8rem] text-[var(--bs-white)] leading-snug truncate">
                      {type} Website Design
                    </p>
                    <p className="text-[0.65rem] text-[var(--bs-muted)] mt-0.5">
                      Responsive · SEO Ready
                    </p>
                  </div>

                  <ArrowRight className="size-3 text-[var(--bs-muted)] opacity-0 group-hover:opacity-60 transition-all shrink-0 -translate-x-1 group-hover:translate-x-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY US + TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="section-y">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          {/* Why choose us */}
          <div>
            <SectionIntro
              eyebrow="Why choose us"
              title="Quality, ownership, and support — built into every project."
              align="left"
            />
            <div className="flex flex-col border-t border-[var(--bs-navy-border)]">
              {reasons.map(({ title, icon: Icon }, i) => (
                <div
                  key={title}
                  className="group flex items-center gap-4 border-b border-[var(--bs-navy-border)] py-4 px-2 -mx-2 rounded-lg transition-colors hover:bg-[var(--bs-navy-mid)]"
                >
                  {/* Icon box — blue accent only */}
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-[var(--bs-navy-border)] text-[var(--bs-blue)] transition-colors group-hover:border-[rgba(45,184,216,0.35)] group-hover:bg-[rgba(45,184,216,0.06)]">
                    <Icon className="size-3.5" strokeWidth={1.5} />
                  </div>
                  {/* Title stays white */}
                  <p className="text-[0.875rem] font-semibold text-[var(--bs-white)]">
                    {title}
                  </p>
                  <span className="ml-auto text-[0.6rem] font-bold tracking-widest text-[var(--bs-subtle)]">
                    0{i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <SectionIntro
              eyebrow="Client voices"
              title="What clients say about working with us."
              align="left"
              accentColor="green"
            />
            <div className="flex flex-col gap-4">
              {testimonials.map((item) => (
                <blockquote
                  key={item.name}
                  className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-5 relative overflow-hidden"
                >
                  {/* Green left bar */}
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-[var(--bs-green)] opacity-60" />
                  <p className="text-[0.875rem] leading-relaxed text-[var(--bs-muted)] italic pl-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="mt-3 pl-4 flex items-center gap-3">
                    <div className="size-7 rounded-full bg-[var(--bs-navy-border)] flex items-center justify-center text-[0.62rem] font-bold text-[var(--bs-white)]">
                      {item.name[0]}
                    </div>
                    <div>
                      <p className="text-[0.78rem] font-bold text-[var(--bs-white)]">
                        {item.name}
                      </p>
                      {/* Role gets the green accent */}
                      <p className="text-[0.62rem] font-bold tracking-[0.16em] uppercase text-[var(--bs-green)]">
                        {item.role}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BUSINESS CARD SECTION
      ══════════════════════════════════════════ */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <ImageCarousel
              title="Complimentary business card"
              slides={[
                "Business card design mockup",
                "Brand collateral print preview",
                "Client identity package",
              ]}
            />
          </div>
          <div>
            <span className="eyebrow">Complimentary business card</span>
            <h2
              className="mt-5 font-bold text-[var(--bs-white)]"
              style={{
                fontSize: "clamp(1.7rem,2.6vw,2.4rem)",
                lineHeight: 1.1,
              }}
            >
              Give customers a clean way to reach your business.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--bs-muted)] max-w-sm">
              Bira Solution designs and prints business cards matched to your
              brand colors — making every card part of your unified advertising
              system.
            </p>
            <div className="mt-6">
              <FeatureList
                items={[
                  "Brand-matched color palette",
                  "Print-ready design files",
                  "Professional contact layout",
                  "Coordinated with your website launch",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
