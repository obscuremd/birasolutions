import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/site/image-carousel";
import { CtaBand, FeatureList, SectionIntro } from "@/components/site/sections";
import { subscriptionBenefits } from "@/lib/site";

const membershipItems = [
  {
    label: "Website Design",
    desc: "Modern responsive design tailored to your brand.",
  },
  {
    label: "Web Development",
    desc: "Full front-end and back-end development.",
  },
  {
    label: "Website Maintenance",
    desc: "Regular updates, security patches, and backups.",
  },
  {
    label: "Domain Name & Transfer",
    desc: "Registration, privacy, and transfer management.",
  },
  {
    label: "Hosting & Transfer",
    desc: "Reliable cloud or shared hosting included.",
  },
  {
    label: "Software Development",
    desc: "Custom CMS, CRM, or ERP built to spec.",
  },
  {
    label: "Programming & Coding",
    desc: "Front-end, back-end, and database solutions.",
  },
  {
    label: "Software Maintenance",
    desc: "Ongoing fixes, updates, and feature additions.",
  },
  {
    label: "App Development",
    desc: "iOS and Android native or hybrid applications.",
  },
  {
    label: "App Maintenance",
    desc: "Version updates, store compliance, bug fixes.",
  },
  { label: "CMS, CRM & ERP", desc: "Industry-specific management systems." },
  {
    label: "Digital Marketing",
    desc: "Google, social media, ads, and content support.",
  },
];

export default function FreeSubscriptionPage() {
  return (
    <>
      <HeroCarousel
        slides={[
          "Free website subscription visual",
          "Membership benefits overview",
          "Support and maintenance visual",
        ]}
        minHeight="min-h-[55vh]"
      >
        <div className="container-page flex h-full flex-col justify-center py-16 min-h-[55vh]">
          <div className="max-w-xl">
            <span className="eyebrow">Free subscription</span>
            <h1
              className="mt-5 font-black text-[var(--bs-white)]"
              style={{ fontSize: "clamp(2rem,4.5vw,3.6rem)", lineHeight: 1.06 }}
            >
              Professional website design with{" "}
              <span className="text-[var(--bs-green)]">recurring support.</span>
            </h1>
            <p className="mt-5 max-w-md text-[0.9rem] text-[var(--bs-muted)] leading-relaxed">
              Subscription plan for website, hosting, software, CMS, CRM, app
              development, and digital marketing support.
            </p>
          </div>
        </div>
      </HeroCarousel>

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="relative overflow-hidden rounded-[var(--radius)] border border-[rgba(45,184,216,0.25)] bg-[var(--bs-dark)] p-8">
            <div className="absolute left-0 top-0 h-full w-0.5 rounded-l-[var(--radius)] bg-gradient-to-b from-[var(--bs-blue)] to-transparent opacity-50" />
            <div
              className="absolute -right-10 -top-10 size-48 opacity-10 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, var(--bs-blue) 0%, transparent 70%)",
              }}
            />
            <span className="eyebrow">Why join?</span>
            <h2
              className="mt-4 font-bold text-[var(--bs-white)]"
              style={{
                fontSize: "clamp(1.7rem,2.8vw,2.4rem)",
                lineHeight: 1.1,
              }}
            >
              Get the essentials for business growth online.
            </h2>
            <p className="mt-4 text-sm text-[var(--bs-muted)] leading-relaxed">
              Members receive website design, free domain and hosting options,
              maintenance, security, support, and a one-month free trial
              depending on the selected subscription terms.
            </p>
            <Button asChild size="lg" variant="glow-green" className="mt-7">
              <Link href="/contact">
                Join now <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
          <div>
            <p className="eyebrow mb-6">What&apos;s included</p>
            <ul className="flex flex-col border-t border-[var(--bs-navy-border)]">
              {subscriptionBenefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 border-b border-[var(--bs-navy-border)] py-3.5"
                >
                  <Check
                    className="mt-0.5 size-3.5 shrink-0 text-[var(--bs-green)]"
                    strokeWidth={2.5}
                  />
                  <span className="text-[0.875rem] text-[var(--bs-muted)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page">
          <SectionIntro
            eyebrow="Membership services"
            title="Services included in the membership offer."
            text="Every subscription plan unlocks access to the full suite of Bira Solution services."
          />
          <div className="grid gap-px bg-[var(--bs-navy-border)] border border-[var(--bs-navy-border)] rounded-[var(--radius)] overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {membershipItems.map(({ label, desc }, i) => (
              <div
                key={label}
                className={`relative flex flex-col gap-3 p-5 overflow-hidden transition-all duration-200 ${
                  i === 0 || i === 10
                    ? "bg-[var(--bs-navy-mid)] border-t-2 border-t-[var(--bs-blue)]"
                    : "bg-[var(--bs-dark)] hover:bg-[var(--bs-navy-mid)]"
                }`}
              >
                {(i === 0 || i === 10) && (
                  <div
                    className="absolute top-0 right-0 size-24 opacity-10 blur-2xl"
                    style={{
                      background:
                        "radial-gradient(circle, var(--bs-blue) 0%, transparent 70%)",
                    }}
                  />
                )}
                <div className="size-1.5 rounded-full bg-[var(--bs-blue)]" />
                <div>
                  <h3 className="font-bold text-[0.95rem] text-[var(--bs-white)] mb-1 leading-snug">
                    {label}
                  </h3>
                  <p className="text-[0.78rem] text-[var(--bs-muted)] leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="glow-blue">
              <Link href="/contact">
                Start your free trial <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
