import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrimeReact from '@/Providers/prime-react-provider';
import "primereact/resources/themes/lara-dark-blue/theme.css";
import 'primeicons/primeicons.css';
import { HeaderNav } from '@/components/header_nav/header-nav';
        

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carrocerías David",
  description: "Venta, reparación y mantenimiento de carrocerías",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PrimeReact>
          <header>
            <HeaderNav />
          </header>
          <main>
            {children}
          </main>
        </PrimeReact>
      </body>
    </html>
  );
}
