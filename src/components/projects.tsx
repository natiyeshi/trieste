"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StyledHighlight } from "@/components/styled-hightlight";
import { Skeleton } from "@/components/ui/skeleton";
import { IProject } from "@/interfaces/project.interface";

export function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };


  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/project/`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data: IProject[] = await response.json();
        console.log(data,"Projects")
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Some of our <StyledHighlight>Projects</StyledHighlight>
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
            ? Array.from({ length: 4 }).map((_, index) => (
                <Card
                  key={index}
                  className="flex-none w-[280px] overflow-hidden border-none shadow-md"
                >
                  <Skeleton className="relative h-48 w-full" />
                  <CardContent className="p-4">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </CardContent>
                </Card>
              ))
            : projects.map((project, index) => (
                <Card
                  key={index}
                  className="flex-none w-[280px] overflow-hidden border-none shadow-md"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      fill
                      unoptimized
                      className="object-cover"
                      alt={project.name}
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                    <p className="text-gray-600">{project.desc}</p>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </section>
  );
}
