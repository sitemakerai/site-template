import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Centre Horloger – Le mouvement c\'est la vie',
  description: 'Centre Horloger à Neuchâtel, Suisse. Réparation et entretien de montres certifiées. SAV certifié pour Certina, Rado, Omega, Tag Heuer, Balmain et bien plus.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans bg-white text-neutral-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
