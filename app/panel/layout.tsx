import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nadzorna ploča - Homelab",
  description:
    "Homelab - Vaša vizija pametnog doma ostvaruje se uz našu inovativnu platformu. Kreirajte jedinstvena pravila za osvjetljenje, temperaturu i sigurnost. Dobrodošli u budućnost kućne automatizacije.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
