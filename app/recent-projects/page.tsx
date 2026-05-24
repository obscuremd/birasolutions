import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/site/image-carousel";
import { CtaBand, SectionIntro } from "@/components/site/sections";
import { contact } from "@/lib/site";

/* Verbatim project categories from website design page of PDF */
const projectCategories = [
  {
    label: "Business Website",
    desc: "Corporate and company sites with CMS integration.",
  },
  {
    label: "E-commerce Website",
    desc: "Online stores with payment gateway and inventory management.",
  },
  {
    label: "CMS Management System",
    desc: "Custom content and data management dashboards.",
  },
  {
    label: "Hospital Management Platform",
    desc: "Patient records, appointments, and billing systems.",
  },
  {
    label: "Restaurant & Bar System",
    desc: "POS, reservation, and menu management software.",
  },
  {
    label: "Real Estate Website",
    desc: "Property listings, agents, and booking portals.",
  },
  {
    label: "Movie Production",
    desc: "Film and video production project websites and reels.",
  },
  {
    label: "Brand Identity",
    desc: "Logo, color systems, print, and digital brand assets.",
  },
  {
    label: "Oil and Gas Website",
    desc: "Industry-specific portals and management systems.",
  },
  {
    label: "Hotel Website",
    desc: "Booking systems, room management, and guest portals.",
  },
  {
    label: "Entertainment Website",
    desc: "Events, media, and entertainment platforms.",
  },
  {
    label: "Charity Foundation Website",
    desc: "Donation platforms and nonprofit online presence.",
  },
];

/* Ways to work together (from website design sub-page of PDF) */
const waysTogether = [
  {
    title: "Branding",
    text: "Our website design is tailored to help you get more customers. We will use your logo, the colours you like tailored to design and customize exactly what you have in mind. If you don't have logo, we will design a professional logo for you.",
  },
  {
    title: "Custom Development",
    text: "We can programme and develop from scratch with possibility of further adjustment overtime; we can customize an existing system and design according to the reality of your company.",
  },
  {
    title: "Ongoing Support",
    text: "We Guarantee Quality, Timely delivery, Training, Maintenance and Support. Our professional team will customise to your desire, schedule a meeting with us.",
  },
];

export default function RecentProjectsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroCarousel
        slides={[
          "20-Second Screen Recording — All Recent Projects",
          "Website Project Walkthroughs",
          "CMS & Software Demos",
        ]}
        minHeight="min-h-[55vh]"
      >
        <div className="container-page flex h-full flex-col justify-center py-16 min-h-[55vh]">
          <div className="max-w-xl">
            <span className="eyebrow">Recent Projects</span>
            <h1
              className="mt-5 font-black text-[var(--bs-white)]"
              style={{ fontSize: "clamp(2rem,4.5vw,3.6rem)", lineHeight: 1.06 }}
            >
              Professional Website Designs{" "}
              <span className="text-[var(--bs-blue)]">
                Dedicated to Your Profession and Brand.
              </span>
            </h1>
            <p className="mt-5 max-w-md text-[0.9rem] text-[var(--bs-muted)] leading-relaxed">
              A dedicated showcase for screen recordings, demos, and completed
              work. The video features a pointing mouse arrow across our recent
              projects.
            </p>
          </div>
        </div>
      </HeroCarousel>

      {/* ── 20-second screen recording ── */}
      <section className="section-y">
        <div className="container-page">
          {/* Featured video panel — verbatim note from PDF */}
          <div className="relative overflow-hidden rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-dark)] p-8 md:p-12 mb-14">
            <div className="absolute left-0 top-0 h-16 w-px bg-gradient-to-b from-[var(--bs-blue)] to-transparent opacity-60" />
            <div className="absolute left-0 top-0 h-px w-16 bg-gradient-to-r from-[var(--bs-blue)] to-transparent opacity-60" />
            <div className="absolute right-0 bottom-0 h-16 w-px bg-gradient-to-t from-[var(--bs-green)] to-transparent opacity-50" />
            <div className="absolute right-0 bottom-0 h-px w-16 bg-gradient-to-l from-[var(--bs-green)] to-transparent opacity-50" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <span className="eyebrow">Featured Media Reel</span>
                <h2
                  className="mt-4 font-bold text-[var(--bs-white)]"
                  style={{
                    fontSize: "clamp(1.6rem,2.8vw,2.4rem)",
                    lineHeight: 1.1,
                  }}
                >
                  20-Second Screen Recording of All Our Recent Projects
                </h2>
                <p className="mt-3 text-sm text-[var(--bs-muted)] leading-relaxed max-w-md">
                  The video features a pointing mouse arrow across all our
                  recent projects — website designs, CMS systems, software
                  platforms, and digital marketing campaigns.
                </p>
                <Button asChild size="sm" variant="glass-blue" className="mt-6">
                  <Link href="/contact">
                    Request a Project Demo <ArrowRight className="size-3" />
                  </Link>
                </Button>
              </div>

              {/* Video placeholder */}
              <div className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-4 image-slot">
                <div className="flex aspect-video items-center justify-center rounded-lg border border-[var(--bs-navy-border)]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-full border border-[rgba(45,184,216,0.3)] bg-[rgba(45,184,216,0.06)] text-[var(--bs-blue)]">
                      <Play className="size-5 ml-0.5" strokeWidth={1.5} />
                    </div>
                    <p className="text-[0.62rem] font-bold tracking-[0.2em] uppercase text-[var(--bs-muted)]">
                      20-Second Screen Recording
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slideshow review note + ways to work together */}
          <div className="mb-14 grid gap-6 lg:grid-cols-3">
            {waysTogether.map(({ title, text }) => (
              <div
                key={title}
                className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6"
              >
                <h3 className="font-bold text-[1rem] text-[var(--bs-white)] mb-3">
                  {title}
                </h3>
                <p className="text-[0.825rem] text-[var(--bs-muted)] leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Portfolio categories */}
          <SectionIntro
            eyebrow="Portfolio Categories"
            title="Professional Website Designs Dedicated to Your Profession and Brand"
            text="Each panel is ready for screenshots, video embeds, or case-study links once project assets are available."
          />

          <div className="grid gap-px bg-[var(--bs-navy-border)] border border-[var(--bs-navy-border)] rounded-[var(--radius)] overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {projectCategories.map(({ label, desc }, i) => (
              <div
                key={label}
                className="group relative flex flex-col gap-4 p-5 bg-[var(--bs-navy-mid)] hover:bg-[var(--bs-navy-light)] overflow-hidden transition-all duration-200"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(45,184,216,0.06) 0%, transparent 60%)",
                  }}
                />
                <div className="relative z-10 image-slot aspect-[4/3] rounded-lg border border-[var(--bs-navy-border)] group-hover:border-[rgba(45,184,216,0.2)] transition-colors">
                  <div className="absolute top-2 left-2 text-[0.55rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-blue)]/50">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="font-bold text-[0.95rem] text-[var(--bs-white)] mb-1.5 leading-snug">
                    {label}
                  </h3>
                  <p className="text-[0.78rem] text-[var(--bs-muted)] leading-relaxed">
                    {desc}
                  </p>
                </div>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="relative z-10 mt-auto self-start px-0 text-[var(--bs-blue)] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Link href="/contact">
                    Request Demo <ArrowRight className="size-3" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild variant="glow-blue">
              <Link href="/contact">
                Request a Project Demo <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Website design page — types of website for profession */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page">
          <SectionIntro
            eyebrow="Types of Website Design for Your Brand"
            title="Professional Website Designs for Every Profession"
            text="We specialise in professional website design dedicated to your profession and brand."
          />

          {/* Complimentary business card section (verbatim from website design sub-page PDF) */}
          <div className="mt-10 rounded-[var(--radius)] border border-[rgba(45,184,216,0.2)] bg-[var(--bs-navy-mid)] p-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <span className="eyebrow">Complimentary Business Card</span>
                <h2
                  className="mt-4 font-bold text-[var(--bs-white)]"
                  style={{
                    fontSize: "clamp(1.5rem,2.4vw,2rem)",
                    lineHeight: 1.1,
                  }}
                >
                  Complimentary Business Card
                </h2>
                <p className="mt-4 text-[0.875rem] text-[var(--bs-muted)] leading-relaxed">
                  Boost your online business by giving your business card to new
                  customers, Client can easily find you with your business. We
                  will design and print-out your business cards according to
                  your preference colors, your business card is a part of
                  advertising your brand and you need it.
                </p>
                <Button asChild variant="outline" className="mt-5">
                  <Link href="/contact">
                    I&apos;m Interested <ArrowRight className="size-3.5" />
                  </Link>
                </Button>
              </div>
              {/* Photo placeholder */}
              <div className="image-slot rounded-[var(--radius)] border border-[var(--bs-navy-border)] aspect-video flex items-center justify-center">
                <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[var(--bs-muted)]">
                  Photo Placeholder
                </p>
              </div>
            </div>
          </div>

          {/* Hire IT Services */}
          <div className="mt-6 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-8">
            <span className="eyebrow">
              Hire IT Services &amp; Management in Lagos Nigeria
            </span>
            <h2
              className="mt-4 font-bold text-[var(--bs-white)]"
              style={{ fontSize: "clamp(1.5rem,2.4vw,2rem)", lineHeight: 1.1 }}
            >
              Hire IT Services &amp; Management in Lagos Nigeria
            </h2>
            <p className="mt-4 text-[0.875rem] text-[var(--bs-muted)] leading-relaxed">
              We provide IT specialists for hiring tell us your requirements, We
              can help supplement Web Developers; Programmers help desk for your
              Company. We will provide Software Developer for your project, if
              you want to startup your company we can help with start-up,
              consultation services, Device Delivery such as Computer desktop,
              Laptops, Printers, Corporate hardware. Let us know if you need
              help schedule a meeting (30mins–1hr).
            </p>
            <div className="mt-4 text-[0.78rem] text-[var(--bs-muted)]">
              Help Line · Call/WhatsApp:{" "}
              <span className="text-[var(--bs-white)]">{contact.phone}</span> ·
              Email:{" "}
              <span className="text-[var(--bs-white)]">{contact.email}</span>
            </div>
            <Button asChild variant="glass-blue" className="mt-5">
              <Link href="/contact">
                I&apos;m Interested <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>

          {/* Website Design Personalise */}
          <div className="mt-6 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-8">
            <span className="eyebrow">Website Design Personalise</span>
            <h2
              className="mt-4 font-bold text-[var(--bs-white)]"
              style={{ fontSize: "clamp(1.5rem,2.4vw,2rem)", lineHeight: 1.1 }}
            >
              Website Design Personalise
            </h2>
            <p className="mt-4 text-[0.875rem] text-[var(--bs-muted)] leading-relaxed">
              Personalise your website and domain name, win more lead that
              convert with our awesome website design, our team will help in the
              development of your website, update, backup, security patches,
              spam prevention and maintenance. Get in touch for your personalise
              website.
            </p>
            <Button asChild variant="outline" className="mt-5">
              <Link href="/contact">
                I&apos;m Interested <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
