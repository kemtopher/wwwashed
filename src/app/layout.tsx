import type { Metadata } from 'next';
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'wwwashed',
  description: 'wwwashed',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full antialiased site-body`}>
        <header className="site-header container-safe">
          {/* <!-- your nav / logo --> */}
        </header>
        {children}
        <GoogleAnalytics trackPageViews />
      </body>
    </html>
  );
}
