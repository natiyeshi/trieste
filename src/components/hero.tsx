import Image from "next/image"
import { Button } from "@/components/ui/button"
import { StyledHighlight } from "@/components/styled-hightlight"
import img from "@/../public/assets/images/image.png"
export function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6">
              High-Performance <StyledHighlight>Waterproofing</StyledHighlight> Solutions for Lasting Results
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mb-8">
              We bring innovative waterproofing and construction solutions tailored to meet the unique needs of every
              structure. Backed by years of expertise, advanced materials, and a commitment to excellence, we ensure
              your projects stand the test of time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#D41830] text-white hover:bg-[#B01528] px-8 py-6">Our Services</Button>
              <Button
                variant="outline"
                className="border-[#D41830] text-[#D41830] hover:bg-[#D41830] hover:text-white px-8 py-6"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src={img}
              alt="Waterproofing solutions"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
