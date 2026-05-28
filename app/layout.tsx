import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vora — Your social memory",
  description:
    "Stop losing saved reels, posts and videos. Vora saves every piece of social media content you share — and makes it findable forever. The best Pocket alternative for 2026.",
  keywords: [
    "pocket alternative",
    "save instagram reels",
    "save tiktok videos",
    "social media bookmarking",
    "content saving app",
    "pocket alternative 2026",
  ],
  openGraph: {
    title: "Vora — Your social memory",
    description: "Save reels, posts and videos from any social media. Find them forever.",
    url: "https://vora.app",
    siteName: "Vora",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vora - Your social memory",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vora — Your social memory",
    description: "Stop losing saved reels and posts.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://vora.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-forest-base text-forest-text-primary">
        {/* Visual Effect 1: Global Noise Overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
