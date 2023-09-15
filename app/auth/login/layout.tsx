import "../../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "../../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Homelab - Login",
  description: "Prijavite se i kontrolišite Vaše pametne uređaje u Vašoj kući.",
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
