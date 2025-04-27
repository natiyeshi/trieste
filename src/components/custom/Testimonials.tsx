"use client";
import { FaStar } from "react-icons/fa";
import { Section } from "./Section";
import TextEditor from "./TextEditor";
import { FaQuoteRight } from "react-icons/fa";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 2000,
      jump: false,
    }),
  ]);
  return (
    <Section sec="bg-gray-300" div="py-12">
      <div className="mx-auto">
        <TextEditor start="Our" end="Testimonials" />
      </div>
      {/* <div className="flex gap-10 mt-12 overflow-auto ">
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div> */}
      <div className=" overflow-hidden mt-12" ref={emblaRef}>
        <div className="flex h-full gap-4 ">
          {[...Array(10)].map((b, key) => (
            <Testimonial />
          ))}
        </div>
      </div>
    </Section>
  );
}

const Testimonial = () => {
  return (
    <div className="basis-1/3 min-w-[400px] flex flex-col justify-center items-center px-4 rounded-xl py-4 gap-4 bg-white">
      <div className="flex gap-4 mx-auto">
        <FaStar className="text-secondary" />
        <FaStar className="text-secondary" />
        <FaStar className="text-secondary" />
        <FaStar className="text-secondary" />
        <FaStar className="text-secondary" />
      </div>
      <div className="font-bold">Alemayehu gelagay</div>
      <div className="">Kerchanshe Group</div>
      <FaQuoteRight className="mx-auto text-secondary text-3xl" />
      <p className="text-center">
        We believe that the knowledge and skills gained through your training
        will contribute significantly to the safety and well-being of our
        employees and the protection of our asset. we look forward to continuing
        our partnership with Insafe safety solutions and will not hesitate to
        recommend your services to other organizations seeking to enhance their
        fire safety and emergency preparedness efforts.
      </p>
    </div>
  );
};
