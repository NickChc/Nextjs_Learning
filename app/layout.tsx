import "@/public/assets/global.css";
import { PropsWithChildren } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "NEXT APP",
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
