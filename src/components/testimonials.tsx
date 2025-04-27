"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { StyledHighlight } from "@/components/styled-hightlight";
import { Skeleton } from "@/components/ui/skeleton";
import { ITestimonial } from "@/interfaces/testimoial.interface";

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/testimonial/`
        );
        const data: ITestimonial[] = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">
            See what our customers say{" "}
            <StyledHighlight>about Us</StyledHighlight>
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollRight}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Card
                  key={index}
                  className="flex-none w-[400px] border-none shadow-md"
                >
                  <CardContent className="p-6">
                    <Skeleton className="h-8 w-8 mb-4" />
                    <Skeleton className="h-6 w-full mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-6" />
                    <div className="flex items-center gap-4">
                      <Skeleton className="w-12 h-12 rounded-full" />
                      <div>
                        <Skeleton className="h-4 w-24 mb-2" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            : testimonials.map((testimonial) => (
                <Card
                  key={testimonial._id}
                  className="flex-none w-[400px] border-none shadow-md"
                >
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-[#D41830] mb-4" />
                    <p className="text-gray-700 mb-6">{testimonial.message}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 18a8.25 8.25 0 0115 0"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">
                            Customer
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </section>
  );
}
