"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Adjust the import path based on your project structure

export interface IPartner {
  image: string;
  createdAt?: string;
  updatedAt?: string;
  _id: string;
}

export function Partners() {
  const [partners, setPartners] = useState<IPartner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPartners() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/partner/`
        );

        const data: IPartner[] = await response.json();
        setPartners(data);
      } catch (error) {
        console.error("Failed to fetch partners:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPartners();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-8 md:px-16">
        <h2 className="text-3xl font-bold mb-12">Some of our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {loading
            ? Array.from({ length: 7 }).map((_, index) => (
                <div key={index} className="flex justify-center">
                  <Skeleton className="h-16 w-32" />
                </div>
              ))
            : partners.map((partner) => (
                <div key={partner._id} className="flex justify-center">
                  <div className="relative h-16 w-32">
                    <Image
                      src={partner.image}
                      fill
                      unoptimized
                      alt={"Img"}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
