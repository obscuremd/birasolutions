import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/site/image-carousel";
import { CtaBand, SectionIntro } from "@/components/site/sections";
import { contact, membershipItems, subscriptionBenefits } from "@/lib/site";

export default function FreeSubscriptionPage() {
  return (
    <>
      <HeroCarousel
        slides={[
          "Free Website Subscription",
          "Membership Benefits",
          "Support & Maintenance",
        ]}
        minHeight="min-h-[55vh]"
      >
        <div className="container-page flex h-full flex-col justify-center py-16 min-h-[55vh]">
          <div className="max-w-xl">
            <span className="eyebrow">Free Subscription</span>
            <h1
              className="mt-5 font-black text-[var(--bs-white)]"
              style={{ fontSize: "clamp(2rem,4.5vw,3.6rem)", lineHeight: 1.06 }}
            >
              Professional Modern Website Design with{" "}
              <span className="text-[var(--bs-green)]">Recurring Support.</span>
            </h1>
            <p className="mt-5 max-w-md text-[0.9rem] text-[var(--bs-muted)] leading-relaxed">
              Bira solution team will build a professional Modern website for
              Free — schedule (30mins–1hr) online meeting or physical meeting.
            </p>
            <div className="mt-3 text-[0.82rem] text-[var(--bs-muted)]">
              Help Line · Call/WhatsApp:{" "}
              <span className="text-[var(--bs-white)]">{contact.phone}</span> ·
              Email:{" "}
              <span className="text-[var(--bs-white)]">{contact.email}</span>
            </div>
            <Button asChild variant="glow-green" className="mt-5">
              <Link href="/contact">
                I&apos;m Interested <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </HeroCarousel>

      {/* ── Why Join ── */}
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="relative overflow-hidden rounded-[var(--radius)] border border-[rgba(45,184,216,0.25)] bg-[var(--bs-dark)] p-8">
            <div className="absolute left-0 top-0 h-full w-0.5 rounded-l-[var(--radius)] bg-gradient-to-b from-[var(--bs-blue)] to-transparent opacity-50" />
            <div
              className="absolute -right-10 -top-10 size-48 opacity-8 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, var(--bs-blue) 0%, transparent 70%)",
              }}
            />

            <span className="eyebrow">Why Join?</span>
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
              Bira Tech Solution will give you all you need for your business
              growth online, that is why your brand and business website
              matters. You need professional and reliable support for your
              online presence. We offer Membership Subscription Package Whereby
              you get Lots of Benefits as our Client. The Membership Benefits
              are; Bira Solution Tech Teams will Design your website for free
              with a free Domain name and Hosting, free Software Development,
              free CMS Development and Digital Marketing. We use the Best
              Technology and Approach; we use Bira Solution high performance
              reliable Hosting Services. We can finish design in (2weeks to 4
              weeks) and deliver 100% ownership to you plus one-month free
              trial. Our professional team will customise to your desire,
              schedule (30min–1hr) online meeting or physical meeting with us.
              We will Maintain the site, Security and 24hrs Support, you will
              get a warranty for all design. All you have to do is pay
              subscription fees according to how you set, Monthly, Quarterly,
              Yearly and your site gets uninterrupted services and running
              smoothly.
            </p>
            <Button asChild size="lg" variant="glow-blue" className="mt-7">
              <Link href="/contact">
                Join Now <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>

          <div>
            <p className="eyebrow mb-6">What&apos;s Included</p>
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

      {/* ── Membership Site Subscription ── */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page">
          <SectionIntro
            eyebrow="Membership Site Subscription — Join Now"
            title="Services Included in the Membership Offer"
            text="Every subscription plan unlocks access to the full suite of Bira Solution services."
          />
          <div className="grid gap-px bg-[var(--bs-navy-border)] border border-[var(--bs-navy-border)] rounded-[var(--radius)] overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {membershipItems.map((label, i) => (
              <div
                key={label}
                className={`relative flex flex-col gap-3 p-5 overflow-hidden transition-all duration-200 ${
                  i === 0 || i === 11
                    ? "bg-[var(--bs-navy-mid)] border-t-2 border-t-[var(--bs-blue)]"
                    : "bg-[var(--bs-dark)] hover:bg-[var(--bs-navy-mid)]"
                }`}
              >
                {(i === 0 || i === 11) && (
                  <div
                    className="absolute top-0 right-0 size-24 opacity-8 blur-2xl"
                    style={{
                      background:
                        "radial-gradient(circle, var(--bs-blue) 0%, transparent 70%)",
                    }}
                  />
                )}
                <div className="size-1.5 rounded-full bg-[var(--bs-blue)]" />
                <h3 className="font-bold text-[0.95rem] text-[var(--bs-white)] leading-snug">
                  {label}
                </h3>
              </div>
            ))}
          </div>

          {/* Price range */}
          <div className="mt-10 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="font-bold text-[var(--bs-white)] text-lg">
                Price Range: $100........ $100,000
              </p>
              <p className="mt-1 text-[0.82rem] text-[var(--bs-muted)]">
                Monthly, Quarterly, Yearly subscription options available.
              </p>
            </div>
            <Button asChild variant="glow-blue" size="lg">
              <Link href="/payment">
                Click Here to Pay by Crypto or Bank Transfer
              </Link>
            </Button>
          </div>

          {/* Help desk */}
          <div className="mt-5 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-dark)] p-5">
            <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-white)] mb-2">
              Help Desk
            </p>
            <p className="text-[0.82rem] text-[var(--bs-muted)]">
              Call/WhatsApp:{" "}
              <span className="text-[var(--bs-white)]">{contact.phone}</span>
            </p>
            <p className="text-[0.82rem] text-[var(--bs-muted)]">
              Call/WhatsApp:{" "}
              <span className="text-[var(--bs-white)]">{contact.phoneAlt}</span>
            </p>
            <p className="text-[0.82rem] text-[var(--bs-muted)]">
              Email:{" "}
              <span className="text-[var(--bs-white)]">{contact.email}</span>
            </p>
            <p className="text-[0.82rem] text-[var(--bs-muted)]">
              Website:{" "}
              <span className="text-[var(--bs-white)]">{contact.website}</span>
            </p>
          </div>

          {/* Addresses */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-dark)] p-5">
              <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-blue)] mb-2">
                Egbeda Lagos
              </p>
              <p className="text-[0.82rem] text-[var(--bs-muted)]">
                Address: 54 Egbeda Idimu Road Oja Bus-stop Block 33 Lamrat Plaza
                Lagos Nigeria.
              </p>
            </div>
            <div className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-dark)] p-5">
              <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-blue)] mb-2">
                Shasha Lagos
              </p>
              <p className="text-[0.82rem] text-[var(--bs-muted)]">
                Address: No 2 Jaiyeoba Road Salami Bustop NNPC Filling Station
                Shasha Road Lagos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
