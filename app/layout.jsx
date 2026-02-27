import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '20 Minuten: Aktuelle Nachrichten, Schlagzeilen',
  description: 'Aktuelle Nachrichten, Schlagzeilen und Breaking News aus der Schweiz und der Welt. Immer informiert mit 20 Minuten.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
