import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Home, Droplet, Layout, Building, Layers, PaintBucket } from "lucide-react"
import { StyledHighlight } from "@/components/styled-hightlight"

export function Services() {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-[#D41830]" />,
      title: "Refurbishment & Maintenance",
      description:
        "The roof is integral part of any residential/commercial building. Prior to construction it has to be well designed, then well-built and after that it needs regular maintenance & care.",
    },
    {
      icon: <Droplet className="h-10 w-10 text-[#D41830]" />,
      title: "Water Proofing & Thermal Insulation",
      description:
        "The waterproofing membrane is considered to be most important component of the roofing system as it serves the main function of keeping water out of the building.",
    },
    {
      icon: <Layout className="h-10 w-10 text-[#D41830]" />,
      title: "Interior Fit-out",
      description:
        "Conceived to become a major player in the interior fit-out world with the back up and support of water seal various divisions & trading components including ceilings...",
    },
    {
      icon: <Building className="h-10 w-10 text-[#D41830]" />,
      title: "Structural Strengthening & Restoration",
      description:
        "We have a skilled team & qualified engineers in our Structural Strengthening & Concrete Repair division. We undertake jobs for rehabilitation and restoration....",
    },
    {
      icon: <Layers className="h-10 w-10 text-[#D41830]" />,
      title: "HDPE Geolining",
      description:
        "HDPE Geolining System is the ideal choice for the most demanding lining applications. The specially extruded liners combine high tensile strength and chemical resistance with excellent stress-crack resistance...",
    },
    {
      icon: <PaintBucket className="h-10 w-10 text-[#D41830]" />,
      title: "Flooring & Coatings",
      description:
        "Flooring is the general term for a permanent covering of a floor, or for the work of installing such a floor covering. Floor covering is a term to generically describe any finish",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            our <StyledHighlight>services</StyledHighlight>
          </h2>
          <p className="text-gray-600 max-w-3xl">
            We address structural defects in buildings by applying and supplying state-of-the-art waterproofing
            materials and concrete admixtures. Our expert team ensures structures are durable, water-resistant, and meet
            global standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[#D41830] font-medium flex items-center gap-2 hover:underline"
                >
                  Find out More <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
