import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EditorBridge } from "@/components/EditorBridge";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Centre Horloger — Maîtres Horlogers Suisses",
  description:
    "Depuis 1887, Centre Horloger perpétue l'art de l'horlogerie suisse à Genève. Vente, restauration et entretien de montres de prestige.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <EditorBridge />
      </body>
    </html>
  );
}
