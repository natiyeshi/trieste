"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Projects } from "@/components/projects";
import { ContactCta } from "@/components/contact-cta";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { StyledHighlight } from "@/components/styled-hightlight";
import { Building, Warehouse, Factory, Home } from "lucide-react";
import { useState, useEffect } from "react";
import { IProject } from "@/interfaces/project.interface";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsPage() {
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
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-[#D41830]">
          <div className="container mx-auto px-8 md:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Our{" "}
                <span className="bg-white text-[#D41830] px-2 py-1 transform -skew-x-6 inline-block">
                  Projects
                </span>
              </h1>
              <p className="text-lg text-white/90 mb-12">
                Explore our portfolio of successful waterproofing and
                construction projects across Ethiopia.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div className="flex flex-col items-center animate-fade-in">
                  <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300 animate-float">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-white font-medium">Commercial</span>
                </div>
                <div
                  className="flex flex-col items-center animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300 animate-float">
                    <Warehouse className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-white font-medium">Industrial</span>
                </div>
                <div
                  className="flex flex-col items-center animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300 animate-float">
                    <Factory className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-white font-medium">Infrastructure</span>
                </div>
                <div
                  className="flex flex-col items-center animate-fade-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300 animate-float">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-white font-medium">Residential</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <div className="container mx-auto px-8 md:px-16">
            <h2 className="text-3xl font-bold mb-12">
              Featured <StyledHighlight>Projects</StyledHighlight>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden border-none shadow-md"
                    >
                      <Skeleton className="h-48 w-full" />
                      <CardContent className="p-4">
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardContent>
                    </Card>
                  ))
                : projects
                    .filter((project) => project.isFeatured)
                    .map((project, index) => (
                      <Card
                        key={index}
                        className="overflow-hidden border-none shadow-md"
                      >
                        <div className="relative h-48 w-full">
                          <Image
                            src={project.image}
                            fill
                            unoptimized
                            className="object-cover"
                            alt={"image"}
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-bold text-lg mb-2">
                            {project.name}
                          </h3>
                          <p className="text-gray-600 mb-2">{project.desc}</p>
                          <div className="flex flex-wrap gap-2 mt-4"></div>
                        </CardContent>
                      </Card>
                    ))}
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <Projects />

        {/* CTA Section */}
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
