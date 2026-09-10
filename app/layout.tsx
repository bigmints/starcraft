import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const githubPages = process.env.GITHUB_ACTIONS === 'true';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Starcraft — Give your ideas a place to land',
  icons: { icon: githubPages ? '/starcraft/favicon.svg' : '/favicon.svg' },
  description:
    'Turn what’s in your head into something you can see. A creative workspace for your Mac, with live previews and visual feedback.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
