// ═══════════════════════════════════════════════════════════════
// services/page.tsx
// ═══════════════════════════════════════════════════════════════
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/site/image-carousel";
import { CtaBand, SectionIntro } from "@/components/site/sections";
import { coreServices, hostingPlans } from "@/lib/site";

export default function ServicesPage() {
  return (
    <>
      <HeroCarousel
        slides={[
          "Website & development showcase",
          "Software and CMS systems",
          "Video and digital marketing",
        ]}
        minHeight="min-h-[55vh]"
      >
        <div className="container-page flex h-full flex-col justify-center py-16 min-h-[55vh]">
          <div className="max-w-xl">
            <span className="eyebrow">Our services</span>
            <h1
              className="mt-5 font-black text-[var(--bs-white)]"
              style={{ fontSize: "clamp(2rem,4.5vw,3.6rem)", lineHeight: 1.06 }}
            >
              A complete digital{" "}
              <span className="text-[var(--bs-blue)]">services suite</span> for
              serious businesses.
            </h1>
            <p className="mt-5 max-w-md text-[0.9rem] text-[var(--bs-muted)] leading-relaxed">
              Website design, custom software, programming, hosting, domain
              services, digital marketing, video production, branding, and
              business support.
            </p>
          </div>
        </div>
      </HeroCarousel>

      <section className="section-y">
        <div className="container-page">
          <SectionIntro
            eyebrow="Capabilities"
            title="Services built around growth, security, and support."
          />
          <div className="grid gap-px bg-[var(--bs-navy-border)] border border-[var(--bs-navy-border)] rounded-[var(--radius)] overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="group relative flex flex-col gap-4 bg-[var(--bs-navy-mid)] p-6 overflow-hidden transition-all duration-200 hover:bg-[var(--bs-navy-light)]"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at 0% 0%, var(--bs-blue-glow) 0%, transparent 55%)",
                  }}
                />
                <div className="relative z-10 flex size-9 items-center justify-center rounded-lg border border-[rgba(45,184,216,0.2)] text-[var(--bs-blue)] group-hover:border-[rgba(45,184,216,0.5)] group-hover:bg-[rgba(45,184,216,0.08)] transition-all">
                  <Icon className="size-4" strokeWidth={1.5} />
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="font-bold text-[1.05rem] text-[var(--bs-white)] mb-2 leading-snug group-hover:text-[var(--bs-blue)] transition-colors">
                    {title}
                  </h3>
                  <p className="text-[0.825rem] text-[var(--bs-muted)] leading-relaxed">
                    {text}
                  </p>
                </div>
                <div className="relative z-10 mt-auto">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="px-0 text-[var(--bs-blue)] opacity-0 group-hover:opacity-100 transition-opacity"
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

      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page">
          <SectionIntro
            eyebrow="Hosting services"
            title="Fast, secure hosting plans with support and migration help."
            text="Choose from Business Cloud, Enterprise Cloud, or VPS hosting based on your project scale."
          />
          <div className="grid gap-px bg-[var(--bs-navy-border)] border border-[var(--bs-navy-border)] rounded-[var(--radius)] overflow-hidden lg:grid-cols-3">
            {hostingPlans.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative flex flex-col gap-5 p-7 overflow-hidden ${i === 1 ? "bg-[var(--bs-navy-mid)] border-t-2 border-t-[var(--bs-blue)]" : "bg-[var(--bs-dark)]"}`}
              >
                {i === 1 && (
                  <>
                    <span className="self-start text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[var(--bs-blue)] border border-[rgba(45,184,216,0.3)] rounded-full px-3 py-0.5">
                      Most Popular
                    </span>
                    <div
                      className="absolute top-0 right-0 size-32 opacity-10 blur-2xl"
                      style={{
                        background:
                          "radial-gradient(circle, var(--bs-blue) 0%, transparent 70%)",
                      }}
                    />
                  </>
                )}
                <h3 className="font-bold text-[1.15rem] text-[var(--bs-white)] leading-snug">
                  {plan.name}
                </h3>
                <div className="h-px bg-[var(--bs-navy-border)]" />
                <ul className="flex flex-col gap-2.5 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 size-3.5 shrink-0 text-[var(--bs-green)]"
                        strokeWidth={2.5}
                      />
                      <span className="text-[0.825rem] text-[var(--bs-muted)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="sm"
                  variant={i === 1 ? "glow-blue" : "outline"}
                  className="mt-2"
                >
                  <Link href="/contact">Get started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
