import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/site/image-carousel";
import { CtaBand, SectionIntro } from "@/components/site/sections";
import {
  contact,
  coreServices,
  digitalMarketingServices,
  domainServices,
  fullServicesList,
  hostingPlans,
  hostingTransferBenefits,
  hostingTypes,
  legalServices,
  videoProductionServices,
} from "@/lib/site";

export default function ServicesPage() {
  return (
    <>
      <HeroCarousel
        slides={[
          "Website Design & Development",
          "Software Development",
          "Digital Marketing & Video Production",
        ]}
        minHeight="min-h-[55vh]"
      >
        <div className="container-page flex h-full flex-col justify-center py-16 min-h-[55vh]">
          <div className="max-w-xl">
            <span className="eyebrow">Our Services</span>
            <h1
              className="mt-5 font-black text-[var(--bs-white)]"
              style={{ fontSize: "clamp(2rem,4.5vw,3.6rem)", lineHeight: 1.06 }}
            >
              A complete digital{" "}
              <span className="text-[var(--bs-blue)]">services suite</span> for
              serious businesses.
            </h1>
            <p className="mt-5 max-w-md text-[0.9rem] text-[var(--bs-muted)] leading-relaxed">
              Professional website design, software development, hosting, domain
              registration, digital marketing, video production, and business
              support in Lagos Nigeria.
            </p>
            <p className="mt-3 text-[0.85rem] font-semibold text-[var(--bs-muted)]">
              Price Range: $100........ $100,000
            </p>
          </div>
        </div>
      </HeroCarousel>

      {/* ── Full Services List (verbatim from PDF) ── */}
      <section className="section-y">
        <div className="container-page">
          <SectionIntro
            eyebrow="All Services"
            title="Services built around growth, security, and support."
          />
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {fullServicesList.map((service, i) => (
              <div
                key={service}
                className="flex items-start gap-3 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] px-4 py-3 hover:border-[rgba(45,184,216,0.25)] transition-colors"
              >
                <span className="text-[0.6rem] font-bold text-[var(--bs-blue)] mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.85rem] text-[var(--bs-white)]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Website Design ── */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page">
          <SectionIntro
            eyebrow="Website Design in Lagos Nigeria"
            title="Website Design in Lagos Nigeria"
            align="left"
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {coreServices.slice(0, 2).map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="group relative flex flex-col gap-4 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6 hover:bg-[var(--bs-navy-light)] transition-all"
              >
                <div className="flex size-9 items-center justify-center rounded-lg border border-[rgba(45,184,216,0.2)] text-[var(--bs-blue)]">
                  <Icon className="size-4" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[1.1rem] text-[var(--bs-white)]">
                  {title}
                </h3>
                <p className="text-[0.85rem] text-[var(--bs-muted)] leading-relaxed">
                  {text}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="self-start"
                >
                  <Link href="/contact">
                    I&apos;m Interested <ArrowRight className="size-3" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CMS / CRM / ERP + Programming + App ── */}
      <section className="section-y">
        <div className="container-page">
          <SectionIntro
            eyebrow="Software Development"
            title="Custom software, CMS, CRM, ERP & app development."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {coreServices.slice(2, 5).map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6 hover:border-[rgba(45,184,216,0.25)] transition-colors"
              >
                <div className="flex size-9 items-center justify-center rounded-lg border border-[rgba(45,184,216,0.2)] text-[var(--bs-blue)]">
                  <Icon className="size-4" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[1.05rem] text-[var(--bs-white)]">
                  {title}
                </h3>
                <p className="text-[0.825rem] text-[var(--bs-muted)] leading-relaxed">
                  {text}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-auto self-start"
                >
                  <Link href="/contact">
                    I&apos;m Interested <ArrowRight className="size-3" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Website Maintenance + Hire IT ── */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          {coreServices.slice(5, 7).map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6 hover:border-[rgba(45,184,216,0.25)] transition-colors"
            >
              <div className="flex size-9 items-center justify-center rounded-lg border border-[rgba(45,184,216,0.2)] text-[var(--bs-blue)]">
                <Icon className="size-4" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[1.1rem] text-[var(--bs-white)]">
                {title}
              </h3>
              <p className="text-[0.85rem] text-[var(--bs-muted)] leading-relaxed">
                {text}
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="self-start"
              >
                <Link href="/contact">
                  I&apos;m Interested <ArrowRight className="size-3" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Digital Marketing ── */}
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <span className="eyebrow">Digital Marketing in Lagos Nigeria</span>
            <h2
              className="mt-4 font-bold text-[var(--bs-white)]"
              style={{
                fontSize: "clamp(1.7rem,2.8vw,2.5rem)",
                lineHeight: 1.1,
              }}
            >
              Digital Marketing
            </h2>
            <p className="mt-4 text-[0.875rem] text-[var(--bs-muted)] leading-relaxed">
              Boost brand awareness, drive traffic to your business and hit your
              marketing goals with our digital marketing solutions. Promote your
              product and service by leveraging online marketing tactics, such
              as Google ads, YouTube ads, Facebook ads. Bira Solution team will
              help you achieve your goals.
            </p>
            <Button asChild variant="glow-blue" className="mt-6">
              <Link href="/contact">
                I&apos;m Interested <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {digitalMarketingServices.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] px-4 py-3"
              >
                <Check
                  className="size-3.5 shrink-0 text-[var(--bs-green)]"
                  strokeWidth={2.5}
                />
                <span className="text-[0.85rem] text-[var(--bs-white)]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Production ── */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <span className="eyebrow">
              Professional Video Production / Editing Service in Nigeria
            </span>
            <h2
              className="mt-4 font-bold text-[var(--bs-white)]"
              style={{
                fontSize: "clamp(1.7rem,2.8vw,2.5rem)",
                lineHeight: 1.1,
              }}
            >
              Professional Video Production / Editing Service in Nigeria
            </h2>
            <p className="mt-4 text-[0.875rem] text-[var(--bs-muted)] leading-relaxed">
              We Deliver Best HD Motion Graphics and Video Production Services
              With 4K and 8K camera. We have Netflix Standard Cameras. We have
              Drone 4k bird eye view, Sonny 4k, Black magic 6k, RED Camera, ARRI
              CAMERA. We work with Nollywood Cinematographers, Producers and
              Directors. Contact us for your Movie project or Video production.
              Our team will shoot and edit your project, we will deliver the
              best for your project, our team can travel Globally for projects.
            </p>
            <Button asChild variant="glow-blue" className="mt-6">
              <Link href="/contact">
                I&apos;m Interested <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {videoProductionServices.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] px-4 py-3"
              >
                <Check
                  className="size-3.5 shrink-0 text-[var(--bs-green)]"
                  strokeWidth={2.5}
                />
                <span className="text-[0.85rem] text-[var(--bs-white)]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Domain Registration ── */}
      <section className="section-y">
        <div className="container-page">
          <SectionIntro
            eyebrow="Domain Registration in Nigeria"
            title="Domain Registration in Nigeria"
            text=".com .ng .org .net .uk etc"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {domainServices.map(({ title, text }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6 hover:border-[rgba(45,184,216,0.25)] transition-colors"
              >
                <h3 className="font-bold text-[1rem] text-[var(--bs-white)]">
                  {title}
                </h3>
                <p className="text-[0.825rem] text-[var(--bs-muted)] leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-5">
            <p className="text-[0.82rem] text-[var(--bs-muted)]">
              Help Line · Call/WhatsApp:{" "}
              <span className="text-[var(--bs-white)]">{contact.phone}</span> ·
              Email:{" "}
              <span className="text-[var(--bs-white)]">{contact.email}</span>
            </p>
          </div>
          <div className="mt-4 flex justify-center">
            <Button asChild variant="glow-blue">
              <Link href="/contact">
                I&apos;m Interested <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Hosting Services ── */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page">
          <SectionIntro
            eyebrow="Hosting Services in Nigeria"
            title="Hosting Services in Nigeria"
            text="Best Hosting service in Nigeria. Bira Solution Hosting is very fast and 100% reliable that guarantees optimum high performance. We use dedicated Servers in the U.S."
          />
          {/* Hosting types */}
          <div className="mb-10 flex flex-wrap gap-3 justify-center">
            {hostingTypes.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] px-4 py-2 text-[0.8rem] text-[var(--bs-white)]"
              >
                {t}
              </span>
            ))}
          </div>
          {/* Hosting plans */}
          <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-5">
            {hostingPlans.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative flex flex-col gap-4 rounded-[var(--radius)] border p-6 overflow-hidden ${
                  i === 0
                    ? "border-[rgba(45,184,216,0.35)] bg-[var(--bs-navy-mid)] lg:col-span-1"
                    : i === 1
                      ? "border-[rgba(45,184,216,0.2)] bg-[var(--bs-navy-mid)]"
                      : "border-[var(--bs-navy-border)] bg-[var(--bs-dark)]"
                }`}
              >
                {i === 0 && (
                  <div
                    className="absolute top-0 right-0 size-24 opacity-10 blur-2xl"
                    style={{
                      background:
                        "radial-gradient(circle, var(--bs-blue) 0%, transparent 70%)",
                    }}
                  />
                )}
                <h3 className="font-bold text-[1rem] text-[var(--bs-white)] leading-snug">
                  {plan.name}
                </h3>
                <div className="h-px bg-[var(--bs-navy-border)]" />
                <ul className="flex flex-col gap-2 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 size-3 shrink-0 text-[var(--bs-green)]"
                        strokeWidth={2.5}
                      />
                      <span className="text-[0.78rem] text-[var(--bs-muted)]">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="sm"
                  variant={i < 2 ? "glow-blue" : "outline"}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
          {/* Hosting transfer */}
          <div className="mt-10 rounded-[var(--radius)] border border-[rgba(38,186,129,0.25)] bg-[var(--bs-navy-mid)] p-7">
            <p className="eyebrow-green mb-3">Hosting Transfer</p>
            <p className="text-[0.875rem] text-[var(--bs-muted)] leading-relaxed mb-5">
              If your hosting is very slow your customer will hesitate to visit
              your online business, We can help you Migrate your hosting to a
              high performance hosting company. You can also transfer to our
              hosting company that is very fast, secure, 100% reliable and high
              performance with 24hrs support. Contact us to help you transfer to
              a trusted hosting company.
            </p>
            <p className="text-[0.75rem] font-bold text-[var(--bs-white)] mb-3">
              Benefits:
            </p>
            <ul className="flex flex-col gap-2">
              {hostingTransferBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 size-3.5 shrink-0 text-[var(--bs-green)]"
                    strokeWidth={2.5}
                  />
                  <span className="text-[0.82rem] text-[var(--bs-muted)]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 text-[0.78rem] text-[var(--bs-muted)]">
              Help Line · Call/WhatsApp:{" "}
              <span className="text-[var(--bs-white)]">{contact.phone}</span> ·
              Email:{" "}
              <span className="text-[var(--bs-white)]">{contact.email}</span>
            </div>
            <Button asChild variant="glass-green" className="mt-4">
              <Link href="/contact">
                I&apos;m Interested <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
          <div className="mt-5 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-4">
            <p className="text-[0.78rem] text-[var(--bs-muted)]">
              Contact us to purchase your hosting · Help Desk:{" "}
              <span className="text-[var(--bs-white)]">{contact.phone}</span> ·{" "}
              <span className="text-[var(--bs-white)]">{contact.email}</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Logo & Graphic Design ── */}
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">
              Branding – Logo and Graphic Design in Lagos Nigeria
            </span>
            <h2
              className="mt-4 font-bold text-[var(--bs-white)]"
              style={{
                fontSize: "clamp(1.7rem,2.8vw,2.5rem)",
                lineHeight: 1.1,
              }}
            >
              Branding – Logo and Graphic Design in Lagos Nigeria
            </h2>
            <p className="mt-4 text-[0.875rem] text-[var(--bs-muted)] leading-relaxed">
              Our graphic designer team are professionals and very good at
              creating customized logos for brands, companies and personal
              individuals. We focus on crafting graphics exactly as our
              customers idea. We can deliver 3D, 2D, Contemporary, Extraordinary
              art for Company, Brands that can thrive business contact us for
              samples. We will deliver the PNG, SVG, PDF, Vector.
            </p>
            <div className="mt-4 text-[0.78rem] text-[var(--bs-muted)]">
              Help Line · Call/WhatsApp:{" "}
              <span className="text-[var(--bs-white)]">{contact.phone}</span> ·
              Email:{" "}
              <span className="text-[var(--bs-white)]">{contact.email}</span>
            </div>
            <Button asChild variant="glow-blue" className="mt-5">
              <Link href="/contact">
                I&apos;m Interested <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
          <div className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6 image-slot aspect-square flex items-center justify-center">
            <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[var(--bs-muted)]">
              Photo / Portfolio Placeholder
            </p>
          </div>
        </div>
      </section>

      {/* ── Movie Production ── */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6 image-slot aspect-video flex items-center justify-center">
            <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[var(--bs-muted)]">
              Photo / Showreel Placeholder
            </p>
          </div>
          <div>
            <span className="eyebrow">Movie Production in Nigeria</span>
            <h2
              className="mt-4 font-bold text-[var(--bs-white)]"
              style={{
                fontSize: "clamp(1.7rem,2.8vw,2.5rem)",
                lineHeight: 1.1,
              }}
            >
              Movie Production in Nigeria
            </h2>
            <p className="mt-4 text-[0.875rem] text-[var(--bs-muted)] leading-relaxed">
              Do you have a story you want us to help you bring to life, our
              Production department are ready to shoot and edit your project;
              you can make money from your movie production. We work with
              Nollywood producers, Directors and Cinematographers, we shoot with
              high quality Netflix approved cameras; such as Black magic 6k, Red
              camera, Arri camera. We also shoot series and YouTube standard
              movies, Facebook movie with 4k cameras. We have Extras in our
              Database, we can send you pictures portfolio of actors and models
              to select your choice for your project. We are in contact with
              Nollywood stars, We have professional script writers in our
              database get in touch with us. Our DOP can shoot commercials,
              documentaries, short film, skits, Cinematic film and more.
            </p>
            <Button asChild variant="glow-blue" className="mt-5">
              <Link href="/contact">
                I&apos;m Interested <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Trademark / CAC / Legal ── */}
      <section className="section-y">
        <div className="container-page">
          <SectionIntro
            eyebrow="Business & Legal Services"
            title="Trademark Registration, CAC Registration & Legal Consultation"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {coreServices.slice(12, 15).map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-6 hover:border-[rgba(45,184,216,0.25)] transition-colors"
              >
                <div className="flex size-9 items-center justify-center rounded-lg border border-[rgba(45,184,216,0.2)] text-[var(--bs-blue)]">
                  <Icon className="size-4" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[1.05rem] text-[var(--bs-white)]">
                  {title}
                </h3>
                <p className="text-[0.825rem] text-[var(--bs-muted)] leading-relaxed">
                  {text}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-auto self-start"
                >
                  <Link href="/contact">
                    I&apos;m Interested <ArrowRight className="size-3" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          {/* Legal list */}
          <div className="mt-8 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-7">
            <p className="eyebrow mb-4">Legal Consultation Services</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {legalServices.map((s) => (
                <li key={s} className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 size-3.5 shrink-0 text-[var(--bs-green)]"
                    strokeWidth={2.5}
                  />
                  <span className="text-[0.85rem] text-[var(--bs-muted)]">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Price range + pay CTA */}
      <section className="section-y-sm border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="font-bold text-[var(--bs-white)] text-lg">
            Price Range: $100........ $100,000
          </p>
          <Button asChild variant="glow-blue" size="lg">
            <Link href="/payment">
              Click Here to Pay by Crypto or Bank Transfer
            </Link>
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
