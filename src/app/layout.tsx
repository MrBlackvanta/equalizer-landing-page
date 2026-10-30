import { SiteFooter, SiteHeader } from "@/components/layout";
import { SITE_NAME, SITE_URL } from "@/data";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const title = `${SITE_NAME} | Music equalizer for Android and iOS`;
const description =
  "A system audio equalizer for Android and iOS. Tune bass, mids, treble, gain and reverb with a professional parametric EQ and volume mixer.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "equalizer: the headline We make your music sound extraordinary, beside the home page with its phone app and Premium EQ card.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} antialiased`}>
      <body className="relative flex min-h-dvh flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
