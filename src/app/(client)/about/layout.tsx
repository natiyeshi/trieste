import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us – Trieste Engineering",
    description:
      "Learn about Trieste Engineering’s mission, vision, and expertise in delivering high-quality engineering solutions for industrial and commercial projects.",
    keywords: [
      "about Trieste Engineering",
      "engineering company profile",
      "Trieste Engineering mission",
      "industrial engineering expertise",
      "engineering team",
      "company history",
      "engineering innovation",
      "Trieste Engineering values",
      "professional engineering services",
      "engineering solutions provider",
    ],
    openGraph: {
      title: "About Us – Trieste Engineering",
      description:
        "Get to know Trieste Engineering, a leader in innovative engineering solutions, committed to excellence and client satisfaction.",
      type: "website",
      url: "https://trieste-engineering.com/about",
      siteName: "Trieste Engineering",
      images: [
        {
          url: "https://trieste-engineering.com/favicon.ico",
          width: 1200,
          height: 630,
          alt: "Trieste Engineering about page image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "About Trieste Engineering",
      description:
        "Discover the story behind Trieste Engineering and our commitment to innovative engineering solutions.",
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
