import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientSessionProvider from "@/providers/ClientSessionProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Trieste Engineering – Innovative Engineering Solutions",
  description:
    "Trieste Engineering delivers cutting-edge engineering solutions, specializing in electromechanical systems, industrial fabrication, and project management across various industries.",
  keywords: [
    "Trieste Engineering",
    "engineering solutions",
    "electromechanical systems",
    "industrial fabrication",
    "project management",
    "engineering company",
    "innovative engineering",
    "industrial solutions",
    "Trieste engineering services",
    "professional engineering",
  ],
  openGraph: {
    title: "Trieste Engineering – Innovative Engineering Solutions",
    description:
      "Discover Trieste Engineering’s expertise in providing high-quality engineering services, from design to implementation, for industrial and commercial projects.",
    type: "website",
    url: "https://trieste-engineering.com/",
    siteName: "Trieste Engineering",
    images: [
      {
        url: "https://trieste-engineering.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Trieste Engineering logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trieste Engineering",
    description:
      "Explore innovative engineering solutions with Trieste Engineering, your partner for industrial and commercial projects.",
    images: ["https://trieste-engineering.com/favicon.ico"],
  },
  authors: [{ name: "Trieste Engineering" }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientSessionProvider>
        <body className={`${poppins.variable} antialiased`}>
          {children}
        </body>
      </ClientSessionProvider>
    </html>
  );
}
