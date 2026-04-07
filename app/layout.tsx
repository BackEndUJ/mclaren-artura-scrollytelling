import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'McLaren Artura | The Art of High Performance',
  description: 'A scrollytelling journey through the engineering of the McLaren Artura supercar.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-white bg-[#050505]`}>
        {children}
      </body>
    </html>
  );
}
