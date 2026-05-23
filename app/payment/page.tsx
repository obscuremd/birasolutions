import { Copy, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ContactCard, SectionIntro } from "@/components/site/sections";
import { HeroCarousel } from "@/components/site/image-carousel";
import { bankAccounts, contact, paymentCoins } from "@/lib/site";

export default function PaymentPage() {
  return (
    <>
      <HeroCarousel
        slides={[
          "Secure crypto payment portal",
          "Bank transfer options",
          "Global payment methods",
        ]}
        minHeight="min-h-[40vh]"
      >
        <div className="container-page flex h-full min-h-[40vh] flex-col justify-center py-14">
          <div className="max-w-xl">
            <span className="eyebrow">Payment</span>
            <h1
              className="mt-5 font-black text-[var(--bs-white)]"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)", lineHeight: 1.06 }}
            >
              Pay by <span className="text-[var(--bs-blue)]">crypto</span> or{" "}
              <span className="text-[var(--bs-green)]">bank transfer.</span>
            </h1>
            <p className="mt-4 max-w-md text-[0.9rem] text-[var(--bs-muted)] leading-relaxed">
              Request a wallet address, complete your transfer, then send proof
              for quick confirmation. Help desk open 24 hours.
            </p>
          </div>
        </div>
      </HeroCarousel>

      {/* ── Crypto ── */}
      <section className="section-y">
        <div className="container-page">
          <SectionIntro
            eyebrow="Crypto payment"
            title="Request wallet address, then send proof for quick confirmation."
            text={`After payment, send proof, amount, name, and payment date to ${contact.paymentEmail}.`}
          />

          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {paymentCoins.map((coin) => (
              <div
                key={coin}
                className="group flex flex-col gap-3 p-4 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] hover:border-[rgba(45,184,216,0.3)] hover:bg-[var(--bs-navy-light)] transition-all duration-200"
              >
                {/* QR placeholder */}
                <div className="image-slot aspect-square rounded-lg border border-[var(--bs-navy-border)] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[0.55rem] font-bold tracking-[0.16em] uppercase text-[var(--bs-muted)]">
                      QR Code
                    </div>
                    <div className="text-[0.5rem] text-[var(--bs-subtle)] mt-0.5">
                      Scan to pay
                    </div>
                  </div>
                </div>
                <p className="font-semibold text-[0.9rem] text-[var(--bs-white)] group-hover:text-[var(--bs-blue)] transition-colors">
                  {coin}
                </p>
                <Button variant="outline" size="sm" className="w-full mt-auto">
                  <Copy className="size-3" /> Copy wallet
                </Button>
              </div>
            ))}
          </div>

          {/* Upload proof */}
          <div className="mt-8 rounded-[var(--radius)] border border-[rgba(45,184,216,0.2)] bg-[var(--bs-navy-mid)] p-7">
            <p className="eyebrow mb-5">Upload payment proof</p>
            <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] items-end">
              <div>
                <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                  Proof of payment
                </label>
                <Input type="file" />
              </div>
              <div>
                <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                  Amount paid
                </label>
                <Input placeholder="$ USD / ₦ NGN / GBP / EUR" />
              </div>
              <Button variant="accent">
                <Upload className="size-3.5" /> Submit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bank Transfer ── */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page">
          <SectionIntro
            eyebrow="Bank transfer"
            title="Local and international account options."
            accentColor="green"
          />

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {bankAccounts.map((account, i) => (
              <div
                key={account.title}
                className={`rounded-[var(--radius)] border p-6 ${
                  i === 0
                    ? "border-[rgba(38,186,129,0.3)] bg-[var(--bs-navy-mid)]"
                    : "border-[var(--bs-navy-border)] bg-[var(--bs-dark)]"
                }`}
              >
                <p className={`mb-4 ${i === 0 ? "eyebrow-green" : "eyebrow"}`}>
                  {account.title}
                </p>
                <div className="flex flex-col gap-1.5">
                  {account.lines.map((line) => (
                    <p
                      key={line}
                      className="text-[0.82rem] text-[var(--bs-muted)]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-5">
            <p className="text-[0.82rem] text-[var(--bs-muted)] leading-relaxed">
              <span className="font-bold text-[var(--bs-white)]">
                Important —{" "}
              </span>
              After payment, send proof, your name, amount, and payment date to{" "}
              <span className="text-[var(--bs-blue)]">{contact.email}</span> or
              WhatsApp{" "}
              <span className="text-[var(--bs-white)]">{contact.phone}</span>.{" "}
              Help desk is open 24 hours.
            </p>
          </div>

          <div className="mt-8">
            <ContactCard />
          </div>
        </div>
      </section>
    </>
  );
}
