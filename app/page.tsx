import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel, ImageCarousel } from "@/components/site/image-carousel";
import {
  CtaBand,
  FeatureList,
  SectionIntro,
  StatsBar,
} from "@/components/site/sections";
import {
  aboutText,
  businessCardFeatures,
  businessCardText,
  coreServices,
  heroSlides,
  reasons,
  technologies,
  testimonials,
  websiteTypes,
  contact,
} from "@/lib/site";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — full-bleed carousel, text overlaid
      ══════════════════════════════════════════ */}
      <HeroCarousel slides={heroSlides}>
        <div className="container-page flex h-full flex-col justify-center py-20 min-h-[calc(100svh-5.25rem)]">
          <div className="max-w-2xl">
            <span className="eyebrow">Lagos Nigeria Web Development</span>
            <h1
              className="mt-5 font-black text-[var(--bs-white)] text-balance"
              style={{
                fontSize: "clamp(2.4rem,5.5vw,4.5rem)",
                lineHeight: 1.04,
              }}
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
              Award-Winning Lagos Nigeria Web Development, Programming and
              Coding Company. We Guarantee Quality, Timely delivery, Training,
              Maintenance and Support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="glow-blue">
                <Link href="/contact">
                  Request a Free Demo <ArrowRight className="size-3.5" />
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
            <div className="mt-10 flex flex-wrap items-center gap-5">
              {[
                "Schedule 30mins Free Consultation",
                "24/7 Support",
                "100% Ownership Transfer",
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

      {/* Stats bar */}
      <StatsBar
        stats={[
          { value: "500+", label: "Projects Delivered" },
          { value: "10+", label: "Years Experience" },
          { value: "100%", label: "Client Ownership" },
          { value: "24/7", label: "Support Desk" },
        ]}
      />

      {/* ══════════════════════════════════════════
          ABOUT US
      ══════════════════════════════════════════ */}
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">About Us</span>
            <h2
              className="mt-4 font-bold text-[var(--bs-white)]"
              style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", lineHeight: 1.1 }}
            >
              Award-Winning Lagos Nigeria Web Development Company
            </h2>
            <div className="mt-5 flex flex-col gap-4">
              {aboutText.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-[0.9rem] leading-relaxed text-[var(--bs-muted)]"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="glow-blue">
                <Link href="/contact">
                  I&apos;m Interested <ArrowRight className="size-3.5" />
                </Link>
              </Button>
              <Button asChild variant="glass-green">
                <Link href="/contact">Schedule 30mins Free Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Technology we use */}
          <div className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-7">
            <p className="eyebrow mb-5">Technology We Use</p>
            <div className="flex flex-col gap-2">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-3 py-2.5 border-b border-[var(--bs-navy-border)] last:border-0"
                >
                  <div className="size-1.5 rounded-full bg-[var(--bs-blue)]" />
                  <span className="text-[0.875rem] text-[var(--bs-white)]">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
    TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="section-y overflow-hidden">
        <div className="container-page mb-12">
          <SectionIntro
            eyebrow="What Our Clients Say"
            title="★★★★★ 5 Stars Google Reviews"
            text="Transparent reviews from real clients who have worked with Bira Solution."
            accentColor="green"
          />

          {/* ── Featured image — cinematic wide frame ── */}
          <div className="relative w-full overflow-hidden rounded-[var(--radius)] border border-[var(--bs-navy-border)] aspect-video">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bccasting-99356.firebasestorage.app/o/bira%20solutions%2Fcard%2FWhatsApp%20Image%202026-05-19%20at%2013.07.00.jpeg?alt=media&token=bf94a367-420e-4e9f-be58-b0ee3e052fc2"
              alt="Happy Bira Solution clients"
              fill
              className="object-cover"
            />

            {/* Dark overlay — keeps overlaid text readable on real photos */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(7,12,20,0.72) 0%, rgba(7,12,20,0.3) 50%, rgba(7,12,20,0.1) 100%)",
              }}
            />

            {/* Corner accent */}
            <div className="absolute left-0 top-0 h-12 w-px bg-gradient-to-b from-[var(--bs-green)] to-transparent opacity-60" />
            <div className="absolute left-0 top-0 h-px w-12 bg-gradient-to-r from-[var(--bs-green)] to-transparent opacity-60" />
          </div>
        </div>

        {/* Scroller — no container-page so it bleeds edge-to-edge */}
        <div className="relative w-full overflow-hidden">
          {/* Fade masks on left and right edges */}
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24"
            style={{
              background:
                "linear-gradient(to right, var(--bs-navy), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24"
            style={{
              background:
                "linear-gradient(to left, var(--bs-navy), transparent)",
            }}
          />

          {/* The scrolling track — duplicated for seamless infinite loop */}
          <div
            className="flex w-max gap-4"
            style={{ animation: "scroll-x 40s linear infinite" }}
          >
            {[...testimonials, ...testimonials].map((item, idx) => (
              <blockquote
                key={`${item.name}-${idx}`}
                className="w-[320px] shrink-0 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-5 relative overflow-hidden flex flex-col"
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-[var(--bs-green)] opacity-60" />
                <p className="text-[0.85rem] leading-relaxed text-[var(--bs-muted)] italic pl-4 flex-1">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-4 pl-4 flex items-center gap-3">
                  <div className="size-7 rounded-full bg-[var(--bs-navy-border)] flex items-center justify-center text-[0.62rem] font-bold text-[var(--bs-white)]">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="text-[0.78rem] font-bold text-[var(--bs-white)]">
                      {item.name}
                    </p>
                    <p className="text-[0.62rem] font-bold tracking-[0.16em] uppercase text-[var(--bs-green)]">
                      {item.role}
                    </p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Keyframe injected inline */}
        <style>{`
    @keyframes scroll-x {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    div[style*="scroll-x"]:hover {
      animation-play-state: paused;
    }
  `}</style>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES OVERVIEW (6 key services)
      ══════════════════════════════════════════ */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page">
          <SectionIntro
            eyebrow="Our Services"
            title="Everything your business needs, in one technology partner."
          />
          <div className="grid gap-px bg-[var(--bs-navy-border)] border border-[var(--bs-navy-border)] rounded-[var(--radius)] overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.slice(0, 6).map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="group relative flex flex-col gap-4 bg-[var(--bs-navy-mid)] p-6 transition-all duration-200 hover:bg-[var(--bs-navy-light)] overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at 0% 0%, rgba(45,184,216,0.07) 0%, transparent 60%)",
                  }}
                />
                <div className="relative z-10 flex size-9 items-center justify-center rounded-lg border border-[rgba(45,184,216,0.2)] text-[var(--bs-blue)] transition-all group-hover:border-[rgba(45,184,216,0.4)] group-hover:bg-[rgba(45,184,216,0.07)]">
                  <Icon className="size-4" strokeWidth={1.5} />
                </div>
                <div className="relative z-10">
                  <h3 className="font-bold text-[1.05rem] text-[var(--bs-white)] mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-[0.8rem] text-[var(--bs-muted)] leading-relaxed line-clamp-3">
                    {text}
                  </p>
                </div>
                <div className="relative z-10 h-px w-0 bg-[var(--bs-blue)] transition-all duration-300 group-hover:w-6 rounded-full opacity-50" />
              </div>
            ))}
          </div>
          <div className="mt-7 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/services">
                View All Services <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GROW YOUR PRIVATE PRACTICE — PROFESSION LIST
      ══════════════════════════════════════════ */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            {/* Left — sticky headline + CTA */}
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">
                Private Practice &amp; Brand Growth
              </span>
              <h2
                className="mt-5 font-bold text-[var(--bs-white)] text-balance"
                style={{
                  fontSize: "clamp(1.8rem,3vw,2.8rem)",
                  lineHeight: 1.1,
                }}
              >
                Grow your private practice and brand with our professional web
                design.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--bs-muted)] max-w-sm">
                Your website will look good on Laptop, Desktop, Phone, Tablet.
                Features Long lifespan, Exquisite Design, SEO, Device Responsive
                and Guarantee Maximum Support.
              </p>
              <div className="mt-7">
                <Button asChild variant="glow-green">
                  <Link href="/contact">
                    I&apos;m Interested <ArrowRight className="size-3.5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right — website types as a styled list panel, same look as Tech We Use */}
            <div className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-7">
              <p className="eyebrow mb-5">Types of Website We Design</p>
              {/* 3 cols desktop, 2 cols mobile */}
              <div className="grid grid-cols-2  gap-x-6">
                {websiteTypes.map((type) => (
                  <div
                    key={type}
                    className="flex items-center gap-3 py-2.5 border-b border-[var(--bs-navy-border)] last:border-0"
                  >
                    <div className="size-1.5 shrink-0 rounded-full bg-[var(--bs-blue)]" />
                    <span className="text-[0.85rem] text-[var(--bs-white)]">
                      {type} Website Design
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMPLIMENTARY BUSINESS CARD
      ══════════════════════════════════════════ */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <ImageCarousel
              title="Complimentary Business Card"
              slides={[
                {
                  label: "Business card design mockup",
                  src: "https://firebasestorage.googleapis.com/v0/b/bccasting-99356.firebasestorage.app/o/bira%20solutions%2Fcard%2FWhatsApp%20Image%202026-05-19%20at%2013.06.59.jpeg?alt=media&token=4449c52b-a662-46d9-89eb-39cbc23bcc76",
                },
              ]}
            />
          </div>
          <div>
            <span className="eyebrow">Complimentary Business Card</span>
            <h2
              className="mt-5 font-bold text-[var(--bs-white)]"
              style={{
                fontSize: "clamp(1.7rem,2.6vw,2.4rem)",
                lineHeight: 1.1,
              }}
            >
              Give customers a clean way to reach your business.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--bs-muted)] max-w-md">
              {businessCardText}
            </p>
            <div className="mt-6">
              <FeatureList items={businessCardFeatures} />
            </div>
            <Button asChild variant="outline" className="mt-6">
              <Link href="/contact">
                I&apos;m Interested <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          REASONS TO CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Reasons to Choose Us</span>
            <h2
              className="mt-4 font-bold text-[var(--bs-white)]"
              style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", lineHeight: 1.1 }}
            >
              Our developers use latest modern cutting edge technology to
              deliver an engaging website experience.
            </h2>
            <div className="mt-7">
              <Button asChild variant="glow-blue">
                <Link href="/contact">
                  I&apos;m Interested <ArrowRight className="size-3.5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col border-t border-[var(--bs-navy-border)]">
            {reasons.map(({ title, icon: Icon }, i) => (
              <div
                key={title}
                className="group flex items-center gap-4 border-b border-[var(--bs-navy-border)] py-4 px-2 -mx-2 rounded-lg transition-colors hover:bg-[var(--bs-navy-mid)]"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-[var(--bs-navy-border)] text-[var(--bs-blue)] transition-colors group-hover:border-[rgba(45,184,216,0.35)] group-hover:bg-[rgba(45,184,216,0.06)]">
                  <Icon className="size-3.5" strokeWidth={1.5} />
                </div>
                <p className="text-[0.875rem] font-semibold text-[var(--bs-white)]">
                  ★ {title}
                </p>
                <span className="ml-auto text-[0.6rem] font-bold tracking-widest text-[var(--bs-subtle)]">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
