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
import { ContactCard, PageHero } from "@/components/site/sections";
import { contact, coreServices } from "@/lib/site";

const contactWays = [
  {
    title: "WhatsApp consultation",
    detail: contact.phone,
    body: "Send a direct brief, request a demo, or schedule a quick project discussion.",
    icon: MessageCircle,
    action: "Chat now",
    href: `https://wa.me/${contact.phone.replace(/\D/g, "")}`,
    primary: true,
  },
  {
    title: "Email the studio",
    detail: contact.email,
    body: "Best for documents, formal proposals, payment proof, and detailed requirements.",
    icon: Mail,
    action: "Send email",
    href: `mailto:${contact.email}`,
    primary: false,
  },
  {
    title: "Visit Lagos office",
    detail: "Egbeda & Shasha locations",
    body: "Book a physical meeting for strategy sessions, onboarding, and local support.",
    icon: MapPinned,
    action: "View locations",
    href: "#locations",
    primary: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Tell Bira Solution what you want to build."
        text="Use the form below to share your project brief, request a demo, or schedule a consultation — online or physical."
      >
        <ContactCard />
      </PageHero>

      {/* ── Contact ways ── */}
      <section className="section-y">
        <div className="container-page">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Connect your way</span>
              <h2
                className="mt-4 font-display font-semibold text-[var(--bira-ink)]"
                style={{
                  fontSize: "clamp(1.7rem,2.8vw,2.4rem)",
                  lineHeight: 1.1,
                }}
              >
                Choose the fastest path for your project.
              </h2>
            </div>
            <p className="max-w-xs text-[0.85rem] text-[var(--bira-smoke)] leading-relaxed">
              WhatsApp for speed, email for documentation, or visit for deeper
              planning sessions.
            </p>
          </div>

          <div className="grid gap-px bg-[var(--bira-line-strong)] border border-[var(--bira-line-strong)] lg:grid-cols-3">
            {contactWays.map(
              ({ title, detail, body, icon: Icon, action, href, primary }) => (
                <div
                  key={title}
                  className={`flex flex-col gap-5 p-7 ${primary ? "bg-[var(--bira-ink)]" : "bg-white"}`}
                >
                  <div
                    className={`flex size-9 items-center justify-center border ${primary ? "border-[var(--bira-gold)]/30 text-[var(--bira-gold)]" : "border-[var(--bira-line-strong)] text-[var(--bira-gold)]"}`}
                  >
                    <Icon className="size-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3
                      className={`font-display text-[1.2rem] font-semibold mb-1 ${primary ? "text-white" : "text-[var(--bira-ink)]"}`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`text-[0.72rem] font-bold tracking-wide mb-2 ${primary ? "text-[var(--bira-gold)]" : "text-[var(--bira-gold-deep)]"}`}
                    >
                      {detail}
                    </p>
                    <p
                      className={`text-[0.825rem] leading-relaxed ${primary ? "text-white/55" : "text-[var(--bira-smoke)]"}`}
                    >
                      {body}
                    </p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className={`mt-auto self-start ${
                      primary
                        ? "border border-[var(--bira-gold)] bg-transparent text-[var(--bira-gold)] hover:bg-[var(--bira-gold)] hover:text-[var(--bira-ink)]"
                        : ""
                    }`}
                    variant={primary ? "ghost" : "outline"}
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
      <section className="section-y bg-[var(--bira-paper)] border-y border-[var(--bira-line)]">
        <div className="container-page grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Form */}
          <div className="bg-white border border-[var(--bira-line)] p-7">
            <p className="eyebrow mb-6">I am interested</p>
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[var(--bira-charcoal)]">
                    Name / Company
                  </label>
                  <Input placeholder="Your name or company" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[var(--bira-charcoal)]">
                    Phone number
                  </label>
                  <Input placeholder="+234 …" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[var(--bira-charcoal)]">
                    Email
                  </label>
                  <Input type="email" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[var(--bira-charcoal)]">
                    Country
                  </label>
                  <Input placeholder="Nigeria" />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[var(--bira-charcoal)]">
                  Service of interest
                </label>
                <NativeSelect>
                  <option>Select a service</option>
                  {coreServices.map((service) => (
                    <option key={service.title}>{service.title}</option>
                  ))}
                </NativeSelect>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[var(--bira-charcoal)]">
                    Website / Social
                  </label>
                  <Input placeholder="www.yoursite.com" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[var(--bira-charcoal)]">
                    Budget
                  </label>
                  <Input placeholder="₦ / $ / GBP / EUR" />
                </div>
              </div>

              {/* Meeting type */}
              <div>
                <p className="mb-2 text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[var(--bira-charcoal)]">
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
                      className="flex cursor-pointer items-center gap-2.5 border border-[var(--bira-line)] bg-[var(--bira-paper)] px-3 py-2.5 text-[0.78rem] text-[var(--bira-charcoal)] hover:border-[var(--bira-gold)]"
                    >
                      <input
                        type="checkbox"
                        className="accent-[var(--bira-gold)]"
                      />{" "}
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[var(--bira-charcoal)]">
                  Preferred date / time
                </label>
                <Input placeholder="e.g. Tuesday 2pm Lagos time" />
              </div>

              <div>
                <label className="mb-1.5 block text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[var(--bira-charcoal)]">
                  Brief message
                </label>
                <Textarea
                  placeholder="Describe your project or requirement…"
                  rows={4}
                />
              </div>

              <p className="text-[0.75rem] text-[var(--bira-smoke)]">
                By clicking submit you agree to the terms and conditions.
              </p>
              <div>
                <Button type="button" size="default" variant="accent">
                  Submit enquiry
                </Button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            {/* Meeting options */}
            <div className="border border-[var(--bira-line)] bg-white p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <CalendarDays
                  className="size-4 text-[var(--bira-gold)]"
                  strokeWidth={1.5}
                />
                <p className="eyebrow">Meeting options</p>
              </div>
              <div className="flex flex-col gap-2 text-[0.825rem] text-[var(--bira-smoke)]">
                <p>Online: 30 minutes to 1 hour</p>
                <p>Physical: Lagos locations</p>
                <p>WhatsApp: {contact.phone}</p>
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

            {/* Lagos offices */}
            <div
              id="locations"
              className="border border-[var(--bira-line)] bg-white p-6"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <MapPin
                  className="size-4 text-[var(--bira-gold)]"
                  strokeWidth={1.5}
                />
                <p className="eyebrow">Lagos offices</p>
              </div>
              <div className="flex flex-col gap-3">
                {contact.addresses.map((address) => (
                  <p
                    key={address}
                    className="text-[0.82rem] text-[var(--bira-smoke)] leading-relaxed border-l-2 border-[var(--bira-line-strong)] pl-3"
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
