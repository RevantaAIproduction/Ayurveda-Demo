import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Supraja Clinic | Deep Rooted Ayurvedic Care for Women",
  description:
    "Supraja Clinic provides personalized Ayurvedic care focused on women's wellness, hormonal health, pre-conception guidance, Panchakarma therapies, and holistic wellbeing.",
  openGraph: {
    title: "Supraja Clinic | Deep Rooted Ayurvedic Care for Women",
    description:
      "Supraja Clinic provides personalized Ayurvedic care focused on women's wellness, hormonal health, pre-conception guidance, Panchakarma therapies, and holistic wellbeing.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supraja Clinic | Deep Rooted Ayurvedic Care for Women",
    description:
      "Supraja Clinic provides personalized Ayurvedic care focused on women's wellness, hormonal health, pre-conception guidance, Panchakarma therapies, and holistic wellbeing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} bg-brand-paper text-brand-ink antialiased`}
      >
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              name: "Supraja Clinic",
              description:
                "Personalized Ayurvedic care focused on women's wellness, hormonal health, and pre-conception guidance.",
              url: "https://example.com",
              physician: {
                "@type": "Physician",
                name: "Dr. Sunitha Joshi",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

