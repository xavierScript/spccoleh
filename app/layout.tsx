import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { LightboxProvider } from "./components/LightboxProvider";
import ViewObserver from "./components/ViewObserver";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "St. Peter's Catholic Chaplaincy, Oleh",
    template: "%s | St. Peter's Catholic Chaplaincy, Oleh",
  },
  description:
    "Official website of St. Peter's Catholic Chaplaincy, Oleh Campus, Delta State University. Mass schedules, daily readings, church societies, parish activities, and spiritual resources for Catholic students and parishioners.",
  keywords: [
    "Catholic Church Oleh",
    "St Peter's Catholic Chaplaincy",
    "Catholic Diocese of Warri",
    "Catholic Church Delta State",
    "DELSU Catholic Chaplaincy",
    "Delta State University Catholic Church",
    "Catholic Mass Oleh",
    "Catholic Students DELSU",
    "NFCS DELSU",
    "Catholic Parish Activities",
  ],
  authors: [{ name: "St. Peter's Catholic Chaplaincy, Oleh" }],
  creator: "St. Peter's Catholic Chaplaincy, Oleh",
  publisher: "St. Peter's Catholic Chaplaincy, Oleh",
  metadataBase: new URL("https://spccoleh.com.ng"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://spcc-oleh.vercel.app",
    siteName: "St. Peter's Catholic Chaplaincy, Oleh",
    title: "St. Peter's Catholic Chaplaincy, Oleh",
    description:
      "Official website of St. Peter's Catholic Chaplaincy, Oleh Campus. Join us for Mass, parish activities, and spiritual growth.",
    images: [
      {
        url: "/icon-st%20peter.png",
        width: 512,
        height: 512,
        alt: "St. Peter's Catholic Chaplaincy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Peter's Catholic Chaplaincy, Oleh",
    description:
      "Official website of St. Peter's Catholic Chaplaincy, Oleh Campus. Join us for Mass, parish activities, and spiritual growth.",
    images: ["/icon-st%20peter.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "jc0ATc7MPz8lND3soMLb2NBx4cYZRtS5Ww5kcaiExiI",
  },
  icons: {
    icon: "/icon-st%20peter.png",
    shortcut: "/icon-st%20peter.png",
    apple: "/icon-st%20peter.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} antialiased`}>
        <LightboxProvider>
          {children}
          <ViewObserver />
        </LightboxProvider>
      </body>
    </html>
  );
}
