"use client";
import { Section } from "@/components/custom/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import img from "@/../public/assets/images/image 5 (6).png";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import TextEditor from "./TextEditor";
import { IoArrowBackOutline } from "react-icons/io5";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, []);

  const onPrevButtonClick = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  };

  const onNextButtonClick = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  };

  return (
    <Section sec="bg-primary text-white ">
      <div className="flex flex-col pt-8">
        <div>Projects</div>
        <div className="flex justify-between">
          <TextEditor start="Some of our" end="Projects" />
          <div className="flex gap-3 my-auto">
            <div className="w-8 h-8 flex rounded-full bg-white">
              <IoArrowBackOutline
                className="m-auto text-black"
                role="button"
                onClick={onPrevButtonClick}
              />
            </div>
            <div className="w-8 h-8 flex rounded-full bg-white">
              <IoArrowBackOutline
                className="m-auto text-black rotate-180"
                role="button"
                onClick={onNextButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" overflow-hidden mt-12" ref={emblaRef}>
          <div className="flex h-full ">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </div>
      {/* <div
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-delay="30"
        data-aos-duration={`1000`}
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        className="grid grid-cols-3 max-md:grid-cols-1 mt-12 px-12 max-md:px-4 gap-12"
      >
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div> */}
    </Section>
  );
}

// const Project = ({ project }: { project: ICProject }) => {
const Project = () => {
  return (
    <div className="w-fit flex-[0_0_100%] basis-1/4 max-md:basis-1/2 max-lg:basis-1/3 max-sm:basis-full min-w-0 p-1 rounded-lg flex flex-col gap-2 select-none">
      <div className="h-[250px] overflow-hidden  rounded-lg">
        <Image
          src={img}
          className="rounded-lg w-full h-[250px] object-cover hover:scale-110 duration-300"
          width={100}
          height={100}
          unoptimized
          alt=""
        />
      </div>
      <div className="text-lg mt-2">Project Name</div>
      <p className="text-sm ">The Project Description will go to here</p>
    </div>
  );
};
