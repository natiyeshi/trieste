import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us – Trieste Engineering",
    description:
      "Get in touch with Trieste Engineering for inquiries about our engineering services, project consultations, or partnership opportunities.",
    keywords: [
      "contact Trieste Engineering",
      "engineering consultation",
      "Trieste Engineering contact",
      "industrial project inquiry",
      "engineering services contact",
      "project management consultation",
      "engineering support",
      "Trieste Engineering customer service",
      "engineering project inquiries",
      "contact engineering company",
    ],
    openGraph: {
      title: "Contact Us – Trieste Engineering",
      description:
        "Reach out to Trieste Engineering for expert engineering solutions and personalized project support.",
      type: "website",
      url: "https://trieste-engineering.com/contact",
      siteName: "Trieste Engineering",
      images: [
        {
          url: "https://trieste-engineering.com/favicon.ico",
          width: 1200,
          height: 630,
          alt: "Trieste Engineering contact page image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Trieste Engineering",
      description:
        "Connect with Trieste Engineering for engineering solutions and project inquiries.",
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
