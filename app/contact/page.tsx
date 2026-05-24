import Link from "next/link";
import { CalendarDays, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { ContactCard } from "@/components/site/sections";
import { HeroCarousel } from "@/components/site/image-carousel";
import { contact, coreServices } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <HeroCarousel
        slides={[
          "Contact Bira Solution",
          "Schedule Your Free Demo",
          "Visit Our Lagos Office",
        ]}
        minHeight="min-h-[40vh]"
      >
        <div className="container-page flex h-full min-h-[40vh] flex-col justify-center py-14">
          <div className="max-w-xl">
            <span className="eyebrow">Contact Us</span>
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
              Contact Bira Solution for a Demo, schedule a free online meeting
              or physical meeting (30mins–1hr). Consider making Bira Solution
              your Trusted Technology partner — we will help you achieve your
              goals contact us now.
            </p>
          </div>
        </div>
      </HeroCarousel>

      {/* ── Contact ways ── */}
      <section className="section-y">
        <div className="container-page">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Ways to Reach Us</span>
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
              planning sessions.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {/* WhatsApp */}
            <div className="group flex flex-col gap-5 rounded-[var(--radius)] border border-[rgba(38,186,129,0.25)] bg-[var(--bs-navy-mid)] p-6 transition-colors hover:bg-[var(--bs-navy-light)]">
              <div className="flex size-9 items-center justify-center rounded-lg border border-[rgba(38,186,129,0.25)] text-[var(--bs-green)]">
                <MessageCircle className="size-4" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-[1.05rem] text-[var(--bs-white)] mb-1">
                  WhatsApp Consultation
                </h3>
                <p className="text-[0.72rem] font-semibold text-[var(--bs-green)] mb-2">
                  {contact.phone}
                </p>
                <p className="text-[0.825rem] leading-relaxed text-[var(--bs-muted)]">
                  Send a direct brief, request a demo, or schedule a quick
                  project discussion via WhatsApp.
                </p>
              </div>
              <Button
                asChild
                size="sm"
                variant="glow-green"
                className="mt-auto self-start"
              >
                <Link
                  href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                >
                  Order by WhatsApp
                </Link>
              </Button>
            </div>

            {/* Email */}
            <div className="group flex flex-col gap-5 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6 transition-colors hover:bg-[var(--bs-navy-light)]">
              <div className="flex size-9 items-center justify-center rounded-lg border border-[rgba(45,184,216,0.2)] text-[var(--bs-blue)]">
                <Mail className="size-4" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-[1.05rem] text-[var(--bs-white)] mb-1">
                  Email the Studio
                </h3>
                <p className="text-[0.72rem] font-semibold text-[var(--bs-blue)] mb-2">
                  {contact.email}
                </p>
                <p className="text-[0.825rem] leading-relaxed text-[var(--bs-muted)]">
                  Best for documents, formal proposals, payment proof, and
                  detailed project requirements.
                </p>
              </div>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="mt-auto self-start"
              >
                <Link href={`mailto:${contact.email}`}>Send Email</Link>
              </Button>
            </div>

            {/* Offices */}
            <div className="group flex flex-col gap-5 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6 transition-colors hover:bg-[var(--bs-navy-light)]">
              <div className="flex size-9 items-center justify-center rounded-lg border border-[var(--bs-navy-border)] text-[var(--bs-muted)]">
                <MapPin className="size-4" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-[1.05rem] text-[var(--bs-white)] mb-1">
                  Visit Lagos Office
                </h3>
                <p className="text-[0.72rem] font-semibold text-[var(--bs-muted)] mb-2">
                  Egbeda &amp; Shasha locations
                </p>
                <p className="text-[0.825rem] leading-relaxed text-[var(--bs-muted)]">
                  Book a physical meeting for strategy sessions, onboarding, and
                  local support (30mins–1hr).
                </p>
              </div>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="mt-auto self-start"
              >
                <Link href="#locations">View Locations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Form — verbatim fields from PDF */}
          <div className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-7">
            <div className="h-0.5 w-16 rounded-full bg-[var(--bs-blue)] mb-6" />
            <p className="eyebrow mb-6">I&apos;m Interested</p>

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
                    Phone No
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
                  I&apos;m Interested In *
                </label>
                <NativeSelect>
                  <option value="">Select a service</option>
                  {coreServices.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </NativeSelect>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                    Website or Social Media Name
                  </label>
                  <Input placeholder="www.yoursite.com or @handle" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                    Budget: ₦, $, GBP, £, GHC
                  </label>
                  <Input placeholder="Your budget range" />
                </div>
              </div>

              {/* Meeting preference — verbatim from PDF */}
              <div>
                <p className="mb-2 text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                  Meeting Type
                </p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {[
                    "Schedule Meeting (30mins–1hr)",
                    "Online Conference Meeting",
                    "Physical Meeting",
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
                  Date / Time
                </label>
                <Input placeholder="e.g. Tuesday 2pm Lagos time" />
              </div>

              <div>
                <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                  Brief Message
                </label>
                <Textarea
                  placeholder="Describe your project or requirement…"
                  rows={4}
                />
              </div>

              <p className="text-[0.72rem] text-[var(--bs-subtle)]">
                By clicking the &ldquo;Submit&rdquo; button you agree to our
                Terms &amp; Conditions.
              </p>

              <div>
                <Button type="button" size="default" variant="glow-blue">
                  Submit
                </Button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            <ContactCard />

            {/* Meeting options */}
            <div className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <CalendarDays
                  className="size-4 text-[var(--bs-blue)]"
                  strokeWidth={1.5}
                />
                <p className="eyebrow">Meeting Options</p>
              </div>
              <div className="flex flex-col gap-2 text-[0.825rem] text-[var(--bs-muted)]">
                <p>Online meeting: 30 minutes to 1 hour</p>
                <p>Physical meeting: Lagos locations available</p>
                <p>
                  WhatsApp:{" "}
                  <span className="text-[var(--bs-white)]">
                    {contact.phone}
                  </span>
                </p>
                <p>
                  WhatsApp:{" "}
                  <span className="text-[var(--bs-white)]">
                    {contact.phoneAlt}
                  </span>
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="mt-5 w-full"
              >
                <Link href="/payment">
                  Click Here to Pay by Crypto or Bank Transfer
                </Link>
              </Button>
            </div>

            {/* Lagos offices — verbatim addresses */}
            <div
              id="locations"
              className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <MapPin
                  className="size-4 text-[var(--bs-green)]"
                  strokeWidth={1.5}
                />
                <p className="eyebrow-green">Lagos Offices</p>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-blue)] mb-1">
                    Egbeda Lagos
                  </p>
                  <p className="text-[0.82rem] text-[var(--bs-muted)] leading-relaxed border-l-2 border-[rgba(45,184,216,0.25)] pl-3">
                    Address: 54 Egbeda Idimu Road, Oja Bus-stop, Block 33 Lamrat
                    Plaza, Lagos Nigeria.
                  </p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-blue)] mb-1">
                    Shasha Lagos
                  </p>
                  <p className="text-[0.82rem] text-[var(--bs-muted)] leading-relaxed border-l-2 border-[rgba(45,184,216,0.25)] pl-3">
                    Address: No 2 Jaiyeoba Road, Salami Bustop, NNPC Filling
                    Station, Shasha Road Lagos.
                  </p>
                </div>
              </div>
            </div>

            {/* Chat / Email quick links */}
            <div className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-5 flex flex-col gap-2">
              <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-white)] mb-1">
                Quick Connect
              </p>
              <a
                href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                className="text-[0.82rem] text-[var(--bs-green)] hover:underline"
              >
                Chat us on WhatsApp
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="text-[0.82rem] text-[var(--bs-blue)] hover:underline"
              >
                Send Email ({contact.email})
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
