import type { Metadata } from "next";
import Header from "@/components/localComponents/header";
import Footer from "@/components/localComponents/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bira Solution Limited | Web Development in Lagos Nigeria",
  description:
    "Professional website design, software development, hosting, domain registration, digital marketing, video production, and business services in Lagos Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
