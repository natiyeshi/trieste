"use client";

import { Button } from "@/components/ui/button";
import { Briefcase, Hammer, HardHat, Ruler, Wrench } from "lucide-react";
import { useEffect, useRef } from "react";

export function ContactCta() {
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-float");
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");
            entry.target.classList.remove("translate-y-4");
          }
        });
      },
      { threshold: 0.1 }
    );

    iconRefs.current.forEach((icon) => {
      if (icon) observer.observe(icon);
    });

    return () => {
      iconRefs.current.forEach((icon) => {
        if (icon) observer.unobserve(icon);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-[#D41830] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-white -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-white"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-white translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Work with us!
          </h2>
          <p className="text-white/90 mb-10 text-lg">
            Need us to help you on your project? Request a quote now describing
            your project requirements to get estimates.
          </p>

          {/* Animated icons */}
          <div className="flex justify-center gap-8 mb-10 flex-wrap">
            <div
              ref={(el) => {
                iconRefs.current[0] = el;
              }}
              className="flex flex-col items-center opacity-0 translate-y-4 transition-all duration-700"
              style={{ transitionDelay: "0ms" }}
            >
              <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <span className="text-white text-sm">Consultation</span>
            </div>
            <div
              ref={(el) => {
                iconRefs.current[1] = el;
              }}
              className="flex flex-col items-center opacity-0 translate-y-4 transition-all duration-700"
              style={{ transitionDelay: "150ms" }}
            >
              <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300">
                <HardHat className="h-8 w-8 text-white" />
              </div>
              <span className="text-white text-sm">Expert Team</span>
            </div>
            <div
              ref={(el) => {
                iconRefs.current[2] = el;
              }}
              className="flex flex-col items-center opacity-0 translate-y-4 transition-all duration-700"
              style={{ transitionDelay: "300ms" }}
            >
              <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300">
                <Ruler className="h-8 w-8 text-white" />
              </div>
              <span className="text-white text-sm">Custom Solutions</span>
            </div>
            <div
              ref={(el) => {
                iconRefs.current[3] = el;
              }}
              className="flex flex-col items-center opacity-0 translate-y-4 transition-all duration-700"
              style={{ transitionDelay: "450ms" }}
            >
              <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300">
                <Hammer className="h-8 w-8 text-white" />
              </div>
              <span className="text-white text-sm">Quality Work</span>
            </div>
            <div
              ref={(el) => {
                iconRefs.current[4] = el;
              }}
              className="flex flex-col items-center opacity-0 translate-y-4 transition-all duration-700"
              style={{ transitionDelay: "600ms" }}
            >
              <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <span className="text-white text-sm">Maintenance</span>
            </div>
          </div>

          <Button className="bg-white text-[#D41830] hover:bg-white/90 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
