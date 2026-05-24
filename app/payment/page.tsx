import Link from "next/link";
import { ArrowRight, Copy, Upload } from "lucide-react";
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
          "Secure Crypto Payment Portal",
          "Bank Transfer Options",
          "Global Payment Methods",
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
              Pay by <span className="text-[var(--bs-blue)]">Crypto</span> or{" "}
              <span className="text-[var(--bs-green)]">Bank Transfer.</span>
            </h1>
            <p className="mt-4 max-w-md text-[0.9rem] text-[var(--bs-muted)] leading-relaxed">
              Make full payment or make a deposit. Help desk open 24 hours.
            </p>
          </div>
        </div>
      </HeroCarousel>

      {/* ── Pay by Crypto ── */}
      <section className="section-y">
        <div className="container-page">
          <SectionIntro
            eyebrow="Pay by Crypto"
            title="Pay by Crypto"
            text="Request wallet address. Once payment is made, kindly send proof of payment, crypto Amount, Name, Payment date via Email: payment@birasolution.com — Once payment is verified you will receive email that your payment is confirmed."
          />

          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {paymentCoins.map((coin) => (
              <div
                key={coin}
                className="group flex flex-col gap-3 p-4 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] hover:border-[rgba(45,184,216,0.3)] hover:bg-[var(--bs-navy-light)] transition-all duration-200"
              >
                {/* QR placeholder */}
                <div className="image-slot aspect-square rounded-lg border border-[var(--bs-navy-border)] flex flex-col items-center justify-center gap-1">
                  <div className="text-[0.55rem] font-bold tracking-[0.16em] uppercase text-[var(--bs-muted)]">
                    QR Code
                  </div>
                  <div className="text-[0.5rem] text-[var(--bs-subtle)]">
                    Scan to pay
                  </div>
                </div>
                <p className="font-semibold text-[0.9rem] text-[var(--bs-white)] group-hover:text-[var(--bs-blue)] transition-colors">
                  {coin}
                </p>
                {/* Deposit method info */}
                <p className="text-[0.65rem] text-[var(--bs-muted)] leading-snug">
                  {coin} Deposit Method — ensure you deposit to the specified
                  link address on the payment page.
                </p>
                <Button variant="outline" size="sm" className="w-full mt-auto">
                  <Copy className="size-3" /> Copy Wallet
                </Button>
              </div>
            ))}
          </div>

          {/* Upload proof — verbatim from PDF */}
          <div className="mt-8 rounded-[var(--radius)] border border-[rgba(45,184,216,0.2)] bg-[var(--bs-navy-mid)] p-7">
            <p className="eyebrow mb-2">Upload Payment Proof</p>
            <p className="text-[0.82rem] text-[var(--bs-muted)] mb-5">
              If your payment was successful, please upload your payment proof
              below.
            </p>
            <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] items-end">
              <div>
                <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                  Upload — Choose File
                </label>
                <Input type="file" />
              </div>
              <div>
                <label className="mb-1.5 block text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)]">
                  Amount $
                </label>
                <Input placeholder="Amount in USD" />
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="default">
                  Cancel
                </Button>
                <Button variant="accent" size="default">
                  <Upload className="size-3.5" /> Submit
                </Button>
              </div>
            </div>
          </div>

          {/* Help desk */}
          <div className="mt-5 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-dark)] p-5">
            <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-white)] mb-2">
              Help Desk
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.82rem] text-[var(--bs-muted)]">
              <p>
                Call/WhatsApp:{" "}
                <span className="text-[var(--bs-white)]">{contact.phone}</span>
              </p>
              <p>
                Call/WhatsApp:{" "}
                <span className="text-[var(--bs-white)]">
                  {contact.phoneAlt}
                </span>
              </p>
              <p>
                Email:{" "}
                <span className="text-[var(--bs-white)]">
                  {contact.paymentEmail}
                </span>
              </p>
              <p className="text-[var(--bs-green)] font-bold">Open 24hrs</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pay by Bank Transfer ── */}
      <section className="section-y border-y border-[var(--bs-navy-border)] bg-[var(--bs-dark)]">
        <div className="container-page">
          <SectionIntro
            eyebrow="Pay by Bank Transfer"
            title="Pay by Bank Transfer"
            text="Make full payment or make a deposit. Local and international account options."
            accentColor="green"
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {bankAccounts.map((account, i) => (
              <div
                key={account.title}
                className={`rounded-[var(--radius)] border p-6 ${
                  i === 0
                    ? "border-[rgba(38,186,129,0.3)] bg-[var(--bs-navy-mid)]"
                    : "border-[var(--bs-navy-border)] bg-[var(--bs-dark)]"
                }`}
              >
                <p
                  className={`mb-4 text-[0.65rem] font-bold tracking-[0.22em] uppercase ${i === 0 ? "text-[var(--bs-green)]" : "text-[var(--bs-blue)]"}`}
                >
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

          {/* Verbatim NOTE from PDF */}
          <div className="mt-6 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)] p-5">
            <p className="text-[0.82rem] text-[var(--bs-muted)] leading-relaxed">
              <span className="font-bold text-[var(--bs-white)]">NOTE: </span>
              Kindly send your Payment Proof, Name, Amount, Payment Date to
              Email or WhatsApp. Call/WhatsApp:{" "}
              <span className="text-[var(--bs-white)]">
                {contact.phone}
              </span> · Call/WhatsApp:{" "}
              <span className="text-[var(--bs-white)]">{contact.phoneAlt}</span>{" "}
              · Email:{" "}
              <span className="text-[var(--bs-white)]">{contact.email}</span>
            </p>
          </div>

          {/* Help Desk */}
          <div className="mt-4 rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-dark)] p-5">
            <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-white)] mb-2">
              Help Desk
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.82rem] text-[var(--bs-muted)]">
              <p>
                Call/WhatsApp:{" "}
                <span className="text-[var(--bs-white)]">{contact.phone}</span>
              </p>
              <p>
                Call/WhatsApp:{" "}
                <span className="text-[var(--bs-white)]">
                  {contact.phoneAlt}
                </span>
              </p>
              <p>
                Email:{" "}
                <span className="text-[var(--bs-white)]">{contact.email}</span>
              </p>
              <p className="text-[var(--bs-green)] font-bold">Open 24hrs</p>
            </div>
          </div>

          {/* Other deposit options link */}
          <div className="mt-6 flex justify-center">
            <Button asChild variant="outline">
              <Link href="#crypto">
                Other Deposit Options <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>

          <div className="mt-8">
            <ContactCard />
          </div>
        </div>
      </section>
    </>
  );
}
