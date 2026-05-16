import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageCarousel } from "@/components/site/image-carousel";
import { CtaBand, PageHero, SectionIntro } from "@/components/site/sections";
import { coreServices, hostingPlans } from "@/lib/site";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="A complete digital services suite for serious businesses."
        text="Website design, custom software, programming, hosting, domain services, digital marketing, video production, branding, and business support."
      >
        <ImageCarousel
          title="Services"
          slides={[
            "Website and development",
            "Software development",
            "Video and digital marketing",
          ]}
        />
      </PageHero>

      {/* ── Full services grid ── */}
      <section className="section-y">
        <div className="container-page">
          <SectionIntro
            eyebrow="Capabilities"
            title="Services built around growth, security, and support."
          />

          <div className="grid gap-px bg-[var(--bira-line-strong)] border border-[var(--bira-line-strong)] sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="group bg-white p-6 flex flex-col gap-4 transition-colors duration-200 hover:bg-[var(--bira-paper)]"
              >
                <Icon
                  className="size-4.5 text-[var(--bira-gold)]"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="font-display text-[1.2rem] font-semibold text-[var(--bira-ink)] mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-[0.825rem] text-[var(--bira-smoke)] leading-relaxed">
                    {text}
                  </p>
                </div>
                <div className="mt-auto pt-2">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="px-0 text-[var(--bira-gold-deep)]"
                  >
                    <Link href="/contact">
                      Enquire <ArrowRight className="size-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hosting Plans ── */}
      <section className="section-y bg-[var(--bira-paper)] border-y border-[var(--bira-line)]">
        <div className="container-page">
          <SectionIntro
            eyebrow="Hosting services"
            title="Fast, secure hosting plans with support and migration help."
            text="Choose from Business Cloud, Enterprise Cloud, or VPS hosting based on your project scale."
          />

          <div className="grid gap-px bg-[var(--bira-line-strong)] border border-[var(--bira-line-strong)] lg:grid-cols-3">
            {hostingPlans.map((plan, i) => (
              <div
                key={plan.name}
                className={`flex flex-col gap-5 p-7 ${i === 1 ? "bg-[var(--bira-ink)]" : "bg-white"}`}
              >
                {i === 1 && (
                  <span className="self-start text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[var(--bira-gold)]">
                    Most popular
                  </span>
                )}
                <h3
                  className={`font-display font-semibold leading-snug ${i === 1 ? "text-white" : "text-[var(--bira-ink)]"}`}
                  style={{ fontSize: "1.3rem" }}
                >
                  {plan.name}
                </h3>
                <div className="h-px bg-[var(--bira-line)]" />
                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={`mt-0.5 size-3.5 shrink-0 ${i === 1 ? "text-[var(--bira-gold)]" : "text-[var(--bira-gold)]"}`}
                        strokeWidth={2}
                      />
                      <span
                        className={`text-[0.825rem] ${i === 1 ? "text-white/70" : "text-[var(--bira-smoke)]"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button
                    asChild
                    size="sm"
                    className={
                      i === 1
                        ? "border border-[var(--bira-gold)] bg-transparent text-[var(--bira-gold)] hover:bg-[var(--bira-gold)] hover:text-[var(--bira-ink)]"
                        : ""
                    }
                    variant={i === 1 ? "ghost" : "outline"}
                  >
                    <Link href="/contact">Get started</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
