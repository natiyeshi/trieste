import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { AboutUs } from "@/components/about-us";
import { Partners } from "@/components/partners";
import { Testimonials } from "@/components/testimonials";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { BackgroundIcons } from "@/components/backgroun-icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <BackgroundIcons />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Projects />
        <AboutUs />
        <ContactCta />
        <Partners />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
