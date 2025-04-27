"use client";
import React from "react";
import leftPattern from "@/../public/assets/patterns/whitepattern.svg";
import Image from "next/image";
import img from "@/../public/assets/images/image 5 (6).png";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Section } from "@/components/custom/Section";
import TextEditor from "./TextEditor";

const OurClients: React.FC = () => {
  const [partners, setPartners] = React.useState([
    img,
    img,
    img,
    img,
    img,
    img,
  ]);
  const [partners2, setPartners2] = React.useState([
    img,
    img,
    img,
    img,
    img,
    img,
  ]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 2000,
      jump: false,
    }),
  ]);
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 1500,
      jump: false,
    }),
  ]);

  return (
    <Section sec="pt-12 flex flex-col maxmd:py-6">
      <div className="flex justify-center">
        <TextEditor start="Some of our " end="Partners" />
      </div>
      <div className=" overflow-hidden mt-12" ref={emblaRef}>
        <div className="flex h-full ">
          {partners.map((b, key) => (
            <>
              <Image
                key={key}
                src={b}
                className="mx-7 w-[150px] h-[150px] object-contain relative  min-w-0 basis-1/4  max-md:basis-1/2 flex-[0_0_100%] "
                alt="a"
                width={100}
                height={100}
                unoptimized
              />
            </>
          ))}
        </div>
      </div>
      <div
        // className="absolute bg-primary/20  left-0 top-0 right-0 bottom-0 overflow-hidden"
        className=" overflow-hidden mt-12"
        ref={emblaRef2}
      >
        <div className="flex h-full ">
          {partners2.map((b, key) => (
            <>
              <Image
                key={key}
                src={b}
                className="mx-7 w-[150px] h-[150px] object-contain relative  min-w-0 basis-1/5 max-lg:basis-1/4  max-md:basis-1/2 flex-[0_0_100%] "
                alt="a"
                width={100}
                height={100}
                unoptimized
              />
            </>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OurClients;
