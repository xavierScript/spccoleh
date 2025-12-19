import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { LightboxProvider } from "./components/LightboxProvider";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "St. Peter's Catholic Chaplaincy, Oleh",
  description: "St. Peter's Catholic Chaplaincy, Oleh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon: St. Peter logo in public folder (space encoded) */}
        <link rel="icon" href="/icon-st%20peter.png" />
      </head>
      <body className={`${nunitoSans.variable} antialiased`}>
        <LightboxProvider>{children}</LightboxProvider>
      </body>
    </html>
  );
}
