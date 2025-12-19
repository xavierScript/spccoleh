import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the leadership and community of St. Peter's Catholic Chaplaincy, Oleh including CWO, CMO, NFCS executives, and Parish Laity Council members. Learn about our mission.",
  openGraph: {
    title: "About Us - SPCC Oleh",
    description:
      "Discover the leadership teams and vibrant Catholic community at St. Peter's Catholic Chaplaincy, Delta State University, Oleh Campus.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
