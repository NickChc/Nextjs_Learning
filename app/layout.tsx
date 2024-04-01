import "@/public/assets/global.css";
import { PropsWithChildren } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next.js course",
    template: "%s | codevolution",
  },
  description: "whatever",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="flex flex-col items-center min-h-dvh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
