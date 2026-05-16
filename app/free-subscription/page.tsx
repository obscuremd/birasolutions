import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageCarousel } from "@/components/site/image-carousel";
import { CtaBand, PageHero, SectionIntro } from "@/components/site/sections";
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
      <PageHero
        eyebrow="Free subscription"
        title="Professional website design with recurring support."
        text="Bira Solution offers professional designs combined with a subscription plan for website, hosting, software, CMS, CRM, app development, and digital marketing support."
      >
        <ImageCarousel
          title="Subscription"
          slides={[
            "Free website subscription visual",
            "Membership benefits overview",
            "Support and maintenance visual",
          ]}
        />
      </PageHero>

      {/* ── Why join ── */}
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          {/* Left — dark panel */}
          <div className="relative overflow-hidden bg-[var(--bira-ink)] p-8">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--bira-gold)] to-transparent opacity-35" />
            <div className="absolute inset-x-0 top-0 h-px bg-[var(--bira-gold)] opacity-28" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--bira-gold)] opacity-28" />

            <span className="eyebrow" style={{ color: "var(--bira-gold)" }}>
              Why join?
            </span>
            <h2
              className="mt-4 font-display font-semibold text-white"
              style={{
                fontSize: "clamp(1.7rem,2.8vw,2.4rem)",
                lineHeight: 1.1,
              }}
            >
              Get the essentials for business growth online.
            </h2>
            <p className="mt-4 text-sm text-white/55 leading-relaxed">
              Members receive website design, free domain and hosting options,
              maintenance, security, support, and a one-month free trial
              depending on the selected subscription terms.
            </p>
            <Button
              asChild
              size="default"
              className="mt-7 border border-[var(--bira-gold)] bg-transparent text-[var(--bira-gold)] hover:bg-[var(--bira-gold)] hover:text-[var(--bira-ink)]"
            >
              <Link href="/contact">
                Join now <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>

          {/* Right — benefits list */}
          <div>
            <p className="eyebrow mb-6">What&apos;s included</p>
            <ul className="flex flex-col gap-0 border-t border-[var(--bira-line)]">
              {subscriptionBenefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 border-b border-[var(--bira-line)] py-3.5"
                >
                  <Check
                    className="mt-0.5 size-3.5 shrink-0 text-[var(--bira-gold)]"
                    strokeWidth={2}
                  />
                  <span className="text-[0.875rem] text-[var(--bira-charcoal)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Membership items ── */}
      <section className="section-y bg-[var(--bira-paper)] border-y border-[var(--bira-line)]">
        <div className="container-page">
          <SectionIntro
            eyebrow="Membership services"
            title="Services included in the membership offer."
            text="Every subscription plan unlocks access to the full suite of Bira Solution services."
          />

          <div className="grid gap-px bg-[var(--bira-line-strong)] border border-[var(--bira-line-strong)] sm:grid-cols-2 lg:grid-cols-4">
            {membershipItems.map(({ label, desc }, i) => (
              <div
                key={label}
                className={`flex flex-col gap-3 p-6 transition-colors duration-200 ${
                  i === 0 || i === 10
                    ? "bg-[var(--bira-ink)] group"
                    : "bg-white hover:bg-[var(--bira-paper)]"
                }`}
              >
                <div className="size-1.5 bg-[var(--bira-gold)] rounded-full" />
                <div>
                  <h3
                    className={`font-display text-[1.05rem] font-semibold mb-1.5 leading-snug ${
                      i === 0 || i === 10
                        ? "text-white"
                        : "text-[var(--bira-ink)]"
                    }`}
                  >
                    {label}
                  </h3>
                  <p
                    className={`text-[0.78rem] leading-relaxed ${
                      i === 0 || i === 10
                        ? "text-white/50"
                        : "text-[var(--bira-smoke)]"
                    }`}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild>
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
