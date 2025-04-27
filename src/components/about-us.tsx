"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { StyledHighlight } from "@/components/styled-hightlight";
import img from "@/../public/assets/images/about-us.png";

export function AboutUs() {
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-float");
          } else {
            entry.target.classList.remove("animate-float");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (circle1Ref.current) observer.observe(circle1Ref.current);
    if (circle2Ref.current) observer.observe(circle2Ref.current);

    return () => {
      if (circle1Ref.current) observer.unobserve(circle1Ref.current);
      if (circle2Ref.current) observer.unobserve(circle2Ref.current);
    };
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              who <StyledHighlight>we are</StyledHighlight>?
            </h2>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-600 mb-6">
              Trieste Construction Chemicals & Waterproofing PLC (TCCW) is a
              private limited company established in 2014 and headquartered in
              Addis Ababa, Ethiopia. Built on a foundation of professionalism,
              ethics, and quality, TCCW operates under the philosophy, &quot;High
              Performance Waterproofing Solutions for the Best Results.&quot;
            </p>
            <p className="text-gray-600 mb-8">
              With a commitment to excellence, we provide a wide range of
              products and services in the construction industry, delivering
              end-to-end solutions to meet and exceed customer expectations.
            </p>
            <div className="flex gap-12">
              <div className="text-center">
                <div
                  ref={circle1Ref}
                  className="w-32 h-32 rounded-full bg-[#D41830] text-white flex items-center justify-center mx-auto mb-2 transition-transform duration-500 hover:scale-110"
                >
                  <div>
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-xs">Projects</div>
                  </div>
                </div>
                <p className="font-medium">Project Completion</p>
              </div>
              <div className="text-center">
                <div
                  ref={circle2Ref}
                  className="w-32 h-32 rounded-full bg-[#D41830] text-white flex items-center justify-center mx-auto mb-2 transition-transform duration-500 hover:scale-110"
                >
                  <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-xs">Completion</div>
                  </div>
                </div>
                <p className="font-medium">Work Completion</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src={img}
              alt="About Trieste Construction"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
