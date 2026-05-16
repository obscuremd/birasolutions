import { Copy, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ContactCard,
  PageHero,
  SectionIntro,
} from "@/components/site/sections";
import { bankAccounts, contact, paymentCoins } from "@/lib/site";

export default function PaymentPage() {
  return (
    <>
      <PageHero
        eyebrow="Payment"
        title="Pay by crypto or bank transfer."
        text="Request a wallet address, complete your transfer, then send proof for quick confirmation. Help desk open 24 hours."
      >
        <ContactCard />
      </PageHero>

      {/* ── Crypto ── */}
      <section className="section-y">
        <div className="container-page">
          <SectionIntro
            eyebrow="Crypto payment"
            title="Request wallet address, then send proof for quick confirmation."
            text={`After payment, send proof, amount, name, and payment date to ${contact.paymentEmail}.`}
          />

          <div className="grid gap-px bg-[var(--bira-line-strong)] border border-[var(--bira-line-strong)] grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {paymentCoins.map((coin, i) => (
              <div
                key={coin}
                className={`flex flex-col gap-4 p-5 ${
                  i === 0 || i === 2 ? "bg-[var(--bira-paper)]" : "bg-white"
                }`}
              >
                {/* QR placeholder */}
                <div className="image-slot aspect-square border border-[var(--bira-line)] flex items-center justify-center">
                  <span className="text-[0.6rem] font-bold tracking-[0.16em] uppercase text-[var(--bira-smoke)]">
                    QR code
                  </span>
                </div>
                <div>
                  <p className="font-display text-[1rem] font-semibold text-[var(--bira-ink)]">
                    {coin}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-auto">
                  <Copy className="size-3" /> Copy wallet
                </Button>
              </div>
            ))}
          </div>

          {/* Upload proof */}
          <div className="mt-8 border border-[var(--bira-line)] bg-[var(--bira-paper)] p-7">
            <p className="eyebrow mb-5">Upload payment proof</p>
            <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] items-end">
              <div>
                <label className="mb-1.5 block text-[0.7rem] font-bold tracking-[0.16em] uppercase text-[var(--bira-charcoal)]">
                  Proof of payment
                </label>
                <Input type="file" />
              </div>
              <div>
                <label className="mb-1.5 block text-[0.7rem] font-bold tracking-[0.16em] uppercase text-[var(--bira-charcoal)]">
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
      <section className="section-y bg-[var(--bira-paper)] border-y border-[var(--bira-line)]">
        <div className="container-page">
          <SectionIntro
            eyebrow="Bank transfer"
            title="Local and international account options."
          />

          <div className="grid gap-px bg-[var(--bira-line-strong)] border border-[var(--bira-line-strong)] md:grid-cols-2 lg:grid-cols-4">
            {bankAccounts.map((account, i) => (
              <div
                key={account.title}
                className={`p-6 ${i % 2 === 0 ? "bg-white" : "bg-[var(--bira-paper)]"}`}
              >
                <p className="eyebrow mb-4">{account.title}</p>
                <div className="flex flex-col gap-1.5">
                  {account.lines.map((line) => (
                    <p
                      key={line}
                      className="text-[0.825rem] text-[var(--bira-smoke)]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-7 border border-[var(--bira-line)] bg-white p-5">
            <p className="text-[0.82rem] text-[var(--bira-smoke)] leading-relaxed">
              <span className="font-bold text-[var(--bira-charcoal)]">
                Important —{" "}
              </span>
              After payment, send proof, your name, amount, and payment date to{" "}
              <span className="text-[var(--bira-gold-deep)]">
                {contact.email}
              </span>{" "}
              or WhatsApp{" "}
              <span className="text-[var(--bira-gold-deep)]">
                {contact.phone}
              </span>
              . Help desk is open 24 hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
