import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects – Trieste Engineering",
  description:
    "Explore Trieste Engineering’s portfolio of successful projects, showcasing our expertise in electromechanical systems, industrial fabrication, and more.",
  keywords: [
    "Trieste Engineering projects",
    "engineering project portfolio",
    "electromechanical projects",
    "industrial fabrication projects",
    "engineering case studies",
    "Trieste Engineering portfolio",
    "project management examples",
    "industrial engineering projects",
    "completed engineering projects",
    "Trieste Engineering success stories",
  ],
  openGraph: {
    title: "Our Projects – Trieste Engineering",
    description:
      "View Trieste Engineering’s completed projects, highlighting our innovative solutions in engineering and fabrication.",
    type: "website",
    url: "https://trieste-engineering.com/projects",
    siteName: "Trieste Engineering",
    images: [
      {
        url: "https://trieste-engineering.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Trieste Engineering projects page image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trieste Engineering Projects",
    description:
      "See how Trieste Engineering delivers innovative solutions through our diverse project portfolio.",
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
