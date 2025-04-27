import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import { StyledHighlight } from "@/components/styled-hightlight"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-[#D41830]">
          <div className="container mx-auto px-8 md:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Contact <span className="bg-white text-[#D41830] px-2 py-1 transform -skew-x-6 inline-block">Us</span>
              </h1>
              <p className="text-lg text-white/90 mb-12">
                Get in touch with our team for inquiries, quotes, or to discuss your project requirements.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div className="flex flex-col items-center animate-fade-in">
                  <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300 animate-float">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-white font-medium">Email Us</span>
                </div>
                <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300 animate-float">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-white font-medium">Call Us</span>
                </div>
                <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300 animate-float">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-white font-medium">Visit Us</span>
                </div>
                <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <div className="bg-white/10 p-4 rounded-full mb-3 hover:bg-white/20 transition-all duration-300 animate-float">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-white font-medium">Message Us</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-[#D41830] mt-1" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-600">info@lelacons.com</p>
                          <p className="text-gray-600">lelaconsult@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-[#D41830] mt-1" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-gray-600">+251-115-577215</p>
                          <p className="text-gray-600">+251-912-506754</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-[#D41830] mt-1" />
                        <div>
                          <p className="font-medium">Office</p>
                          <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:30 AM - 5:30 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-8 md:px-16">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Our <StyledHighlight>Location</StyledHighlight>
              </h2>
              <p className="text-gray-600 max-w-2xl">Visit our office in Addis Ababa, Ethiopia.</p>
            </div>
            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              {/* This would be replaced with an actual map component */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500">Map would be displayed here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
