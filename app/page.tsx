import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageCarousel } from "@/components/site/image-carousel";
import {
  CtaBand,
  FeatureList,
  PageHero,
  SectionIntro,
} from "@/components/site/sections";
import {
  coreServices,
  heroSlides,
  reasons,
  testimonials,
  websiteTypes,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        eyebrow="Lagos Nigeria Web Development"
        title="Professional websites, software & digital solutions."
        text="Bira Solution Limited creates innovative digital solutions that help businesses thrive — from polished brand websites to complex CMS, CRM, ERP, app, hosting, and marketing systems."
      >
        <ImageCarousel title="Portfolio" slides={heroSlides} />
      </PageHero>

      {/* ── Services ── */}
      <section className="section-y">
        <div className="container-page">
          <SectionIntro
            eyebrow="Our services"
            title="Everything your business needs, in one technology partner."
          />
          <div className="grid gap-px bg-[var(--bira-line-strong)] border border-[var(--bira-line-strong)] sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.slice(0, 6).map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="group bg-white p-6 transition-colors duration-200 hover:bg-[var(--bira-paper)]"
              >
                <Icon
                  className="mb-4 size-4.5 text-[var(--bira-gold)] transition-transform duration-200 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-[1.25rem] font-semibold text-[var(--bira-ink)] mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-[0.825rem] text-[var(--bira-smoke)] leading-relaxed">
                  {text}
                </p>
                <div className="mt-4 h-px w-0 bg-[var(--bira-gold)] transition-all duration-300 group-hover:w-6" />
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

      {/* ── Profession Grid ── */}
      <section className="section-y bg-[var(--bira-paper)] border-y border-[var(--bira-line)]">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Private practice & brand growth</span>
            <h2
              className="mt-5 font-display font-semibold text-[var(--bira-ink)] text-balance"
              style={{ fontSize: "clamp(1.8rem,3vw,2.7rem)", lineHeight: 1.1 }}
            >
              A responsive, long-lasting website for every profession.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--bira-smoke)] max-w-sm">
              Your site will look exceptional on every device — exquisite
              design, SEO, responsiveness, training, maintenance, and ongoing
              support.
            </p>
            <div className="mt-7">
              <Button asChild>
                <Link href="/contact">
                  I am interested <ArrowRight className="size-3.5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {websiteTypes.map((type) => (
              <span
                key={type}
                className="border border-[var(--bira-line-strong)] bg-white px-3 py-1.5 text-[0.7rem] font-semibold tracking-wide text-[var(--bira-charcoal)] transition-colors hover:border-[var(--bira-gold)] hover:text-[var(--bira-gold-deep)]"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us + Testimonials ── */}
      <section className="section-y">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          <div>
            <SectionIntro
              eyebrow="Why choose us"
              title="Quality, ownership, and support — built into every project."
              align="left"
            />
            <div className="flex flex-col gap-0 border-t border-[var(--bira-line)]">
              {reasons.map(({ title, icon: Icon }, i) => (
                <div
                  key={title}
                  className="flex items-center gap-4 border-b border-[var(--bira-line)] py-4 group"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center border border-[var(--bira-line)] bg-[var(--bira-paper)] text-[var(--bira-gold)] transition-colors group-hover:border-[var(--bira-gold)] group-hover:bg-[var(--bira-gold-pale)]">
                    <Icon className="size-3.5" strokeWidth={1.5} />
                  </div>
                  <p className="text-[0.875rem] font-semibold text-[var(--bira-charcoal)]">
                    {title}
                  </p>
                  <span className="ml-auto text-[0.6rem] font-bold tracking-widest text-[var(--bira-smoke)]">
                    0{i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="Client voices"
              title="What clients say about working with us."
              align="left"
            />
            <div className="flex flex-col gap-5">
              {testimonials.map((item) => (
                <blockquote
                  key={item.name}
                  className="border-l-2 border-[var(--bira-gold)] pl-5 py-1"
                >
                  <p className="text-sm leading-relaxed text-[var(--bira-smoke)] italic">
                    &quot;{item.quote}&quot;
                  </p>
                  <footer className="mt-3">
                    <p className="text-[0.78rem] font-bold text-[var(--bira-charcoal)]">
                      {item.name}
                    </p>
                    <p className="text-[0.65rem] font-bold tracking-[0.16em] uppercase text-[var(--bira-gold-deep)]">
                      {item.role}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Business Card ── */}
      <section className="section-y bg-[var(--bira-paper)] border-y border-[var(--bira-line)]">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <ImageCarousel
              title="Complimentary business card"
              slides={[
                "Business card design mockup",
                "Brand collateral print preview",
                "Client identity package",
              ]}
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Complimentary business card</span>
            <h2
              className="mt-5 font-display font-semibold text-[var(--bira-ink)]"
              style={{
                fontSize: "clamp(1.7rem,2.6vw,2.4rem)",
                lineHeight: 1.1,
              }}
            >
              Give customers a clean way to reach your business.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--bira-smoke)] max-w-sm">
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
