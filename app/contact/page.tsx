import Link from "next/link";
import {
  CalendarDays,
  Mail,
  MapPin,
  MapPinned,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { ContactCard } from "@/components/site/sections";
import { HeroCarousel } from "@/components/site/image-carousel";
import { contact, coreServices } from "@/lib/site";

const contactWays = [
  {
    title: "WhatsApp consultation",
    detail: contact.phone,
    body: "Send a direct brief, request a demo, or schedule a quick project discussion.",
    icon: MessageCircle,
    action: "Chat now",
    href: `https://wa.me/${contact.phone.replace(/\D/g, "")}`,
    btnVariant: "glow-green" as const,
    accentVar: "var(--bs-green)",
  },
  {
    title: "Email the studio",
    detail: contact.email,
    body: "Best for documents, formal proposals, payment proof, and detailed requirements.",
    icon: Mail,
    action: "Send email",
    href: `mailto:${contact.email}`,
    btnVariant: "outline" as const,
    accentVar: "var(--bs-blue)",
  },
  {
    title: "Visit Lagos office",
    detail: "Egbeda & Shasha locations",
    body: "Book a physical meeting for strategy sessions, onboarding, and local support.",
    icon: MapPinned,
    action: "View locations",
    href: "#locations",
    btnVariant: "outline" as const,
    accentVar: "var(--bs-muted)",
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroCarousel
        slides={[
          "Contact Bira Solution",
          "Schedule your free demo",
          "Visit our Lagos office",
        ]}
        minHeight="min-h-[40vh]"
      >
        <div className="container-page flex h-full min-h-[40vh] flex-col justify-center py-14">
          <div className="max-w-xl">
            <span className="eyebrow">Contact us</span>
            <h1
              className="mt-5 font-black text-[var(--bs-white)]"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)", lineHeight: 1.06 }}
            >
              Tell Bira Solution{" "}
              <span className="text-[var(--bs-blue)]">
                what you want to build.
              </span>
            </h1>
            <p className="mt-4 max-w-md text-[0.9rem] text-[var(--bs-muted)] leading-relaxed">
              Use the form below to share your project brief, request a demo, or
              schedule a consultation — online or physical.
            </p>
          </div>
        </div>
      </HeroCarousel>

      {/* ── Contact ways ── */}
      <section className="section-y">
        <div className="container-page">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Connect your way</span>
              <h2
                className="mt-4 font-bold text-[var(--bs-white)]"
                style={{
                  fontSize: "clamp(1.6rem,2.6vw,2.2rem)",
                  lineHeight: 1.1,
                }}
              >
                Choose the fastest path for your project.
              </h2>
            </div>
            <p className="max-w-xs text-[0.85rem] text-[var(--bs-muted)] leading-relaxed">
              WhatsApp for speed, email for documentation, or visit for deeper
              planning.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {contactWays.map(
              ({
                title,
                detail,
                body,
                icon: Icon,
                action,
                href,
                btnVariant,
                accentVar,
              }) => (
                <div
                  key={title}
                  className="group flex flex-col gap-5 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6 transition-colors hover:bg-[var(--bs-navy-light)]"
                >
                  <div
                    className="flex size-9 items-center justify-center rounded-lg border text-[var(--bs-white)]"
                    style={{
                      borderColor: `color-mix(in srgb, ${accentVar} 30%, transparent)`,
                    }}
                  >
                    <Icon
                      className="size-4"
                      strokeWidth={1.5}
                      style={{ color: accentVar }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[1.05rem] text-[var(--bs-white)] mb-1">
                      {title}
                    </h3>
                    <p
                      className="text-[0.72rem] font-semibold mb-2"
                      style={{ color: accentVar }}
                    >
                      {detail}
                    </p>
                    <p className="text-[0.825rem] leading-relaxed text-[var(--bs-muted)]">
                      {body}
                    </p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    variant={btnVariant}
                    className="mt-auto self-start"
                  >
                    <Link href={href}>{action}</Link>
                  </Button>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Form */}
          <div className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-7">
            <div className="h-0.5 w-16 rounded-full bg-[var(--bs-blue)] mb-6" />
            <p className="eyebrow mb-6">I am interested</p>
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                    Name / Company
                  </label>
                  <Input placeholder="Your name or company" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                    Phone number
                  </label>
                  <Input placeholder="+234 …" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                    Email
                  </label>
                  <Input type="email" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                    Country
                  </label>
                  <Input placeholder="Nigeria" />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                  Service of interest
                </label>
                <NativeSelect>
                  <option>Select a service</option>
                  {coreServices.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                </NativeSelect>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                    Website / Social
                  </label>
                  <Input placeholder="www.yoursite.com" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                    Budget
                  </label>
                  <Input placeholder="₦ / $ / GBP / EUR" />
                </div>
              </div>

              <div>
                <p className="mb-2 text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                  Meeting preference
                </p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {[
                    "Schedule meeting",
                    "Online conference",
                    "Physical meeting",
                  ].map((opt) => (
                    <label
                      key={opt}
                      className="flex cursor-pointer items-center gap-2.5 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-light)] px-3 py-2.5 text-[0.78rem] text-[var(--bs-muted)] hover:border-[rgba(45,184,216,0.3)] hover:text-[var(--bs-white)] transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="accent-[var(--bs-blue)]"
                      />{" "}
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                  Preferred date / time
                </label>
                <Input placeholder="e.g. Tuesday 2pm Lagos time" />
              </div>

              <div>
                <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                  Brief message
                </label>
                <Textarea
                  placeholder="Describe your project or requirement…"
                  rows={4}
                />
              </div>

              <p className="text-[0.72rem] text-[var(--bs-subtle)]">
                By clicking submit you agree to the terms and conditions.
              </p>

              <div>
                <Button type="button" size="default" variant="glow-blue">
                  Submit enquiry
                </Button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            <ContactCard />

            <div className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <CalendarDays
                  className="size-4 text-[var(--bs-blue)]"
                  strokeWidth={1.5}
                />
                <p className="eyebrow">Meeting options</p>
              </div>
              <div className="flex flex-col gap-2 text-[0.825rem] text-[var(--bs-muted)]">
                <p>Online: 30 minutes to 1 hour</p>
                <p>Physical: Lagos office locations</p>
                <p>
                  WhatsApp:{" "}
                  <span className="text-[var(--bs-white)]">
                    {contact.phone}
                  </span>
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="mt-5 w-full"
              >
                <Link href="/payment">Pay by crypto or bank transfer</Link>
              </Button>
            </div>

            <div
              id="locations"
              className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <MapPin
                  className="size-4 text-[var(--bs-green)]"
                  strokeWidth={1.5}
                />
                <p className="eyebrow-green">Lagos offices</p>
              </div>
              <div className="flex flex-col gap-4">
                {contact.addresses.map((address) => (
                  <p
                    key={address}
                    className="text-[0.82rem] text-[var(--bs-muted)] leading-relaxed border-l-2 border-[rgba(38,186,129,0.35)] pl-3"
                  >
                    {address}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
