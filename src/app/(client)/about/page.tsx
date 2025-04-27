import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutUs } from "@/components/about-us"
import { Partners } from "@/components/partners"
import { ContactCta } from "@/components/contact-cta"
import { Users, Award, Clock, Building2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-[#D41830]">
          <div className="container mx-auto px-8 md:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                About <span className="bg-white text-[#D41830] px-2 py-1 transform -skew-x-6 inline-block">Us</span>
              </h1>
              <p className="text-lg text-white/90 mb-12">
                Learn more about Trieste Construction Chemicals & Waterproofing PLC and our commitment to excellence.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div className="flex flex-col items-center animate-fade-in">
                  <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300 animate-float">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-white font-medium">Expert Team</span>
                </div>
                <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300 animate-float">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-white font-medium">Quality Service</span>
                </div>
                <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300 animate-float">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-white font-medium">Since 2014</span>
                </div>
                <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300 animate-float">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-white font-medium">50+ Projects</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutUs />

        {/* Partners Section */}
        <Partners />

        {/* CTA Section */}
        <ContactCta />
      </main>
      <Footer />
    </div>
  )
}
