import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services – Trieste Engineering",
  description:
    "Discover Trieste Engineering’s comprehensive services, including electromechanical installations, industrial fabrication, project management, and more.",
  keywords: [
    "Trieste Engineering services",
    "electromechanical installations",
    "industrial fabrication services",
    "project management services",
    "engineering solutions",
    "Trieste Engineering expertise",
    "industrial engineering services",
    "fabrication and installation",
    "engineering project support",
    "professional engineering services",
  ],
  openGraph: {
    title: "Our Services – Trieste Engineering",
    description:
      "Explore Trieste Engineering’s wide range of services, from electromechanical installations to industrial fabrication and project management.",
    type: "website",
    url: "https://trieste-engineering.com/services",
    siteName: "Trieste Engineering",
    images: [
      {
        url: "https://trieste-engineering.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Trieste Engineering services page image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trieste Engineering Services",
    description:
      "Learn about Trieste Engineering’s specialized services for your industrial and engineering needs.",
    images: ["https://trieste-engineering.com/favicon.ico"],
  },
  authors: [{ name: "Trieste Engineering" }],
};


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      {children}
  );
}
