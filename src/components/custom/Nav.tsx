"use client";
import Image from "next/image";
import logo from "@/../public/assets/logo/logo.svg";
// import logo2 from "@/../public/assets/logo/logo2.svg";
// import logo3 from "@/../public/assets/logo/lelacon.svg";
// import logo4 from "@/../public/assets/logo/lelacon_black.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { GoArrowRight } from "react-icons/go";

const Nav = ({
  onHero = false,
  landing = false,
  changeColor = false,
}: {
  onHero?: boolean;
  landing?: boolean;
  changeColor?: boolean;
}) => {
  const [isBottom, setIsBottom] = useState(false);
  const pathname = usePathname();
  const theam = landing && onHero;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsBottom(true && !onHero);
      } else {
        setIsBottom(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // const links = ["about", "services", "projects", "contactus"];
  const links = [
    {
      name: "home",
      link: "/",
      links: [],
    },
    {
      name: "About us",
      link: "/about",
      links: [],
    },
    {
      name: "Core services",
      link: "/core-services",
      links: [],
    },
    {
      name: "Projects",
      link: "/projects",
      links: [],
    },
    {
      name: "Contact Us",
      link: "/contact",
      links: [],
    },
    // {
    //   name: "services",
    //   links: [],
    //   links: [
    //     {
    //       name: "Electromechanical Installations",
    //       url: "/services#01",
    //     },
    //     {
    //       name: "Detailed Engineering design and project management",
    //       url: "/services#02",
    //     },
    //     {
    //       name: "Provision of Lifting Equipment",
    //       url: "/services#03",
    //     },
    //     {
    //       name: "Supply and Installation of manufacturlng spare parts",
    //       url: "/services#04",
    //     },
    //   ],
    // },
    // {
    //   name: "projects",
    //   links: [],
    // },
    // {
    //   name: "contactus",
    //   links: [],
    // },
  ];
  return (
    <div
      className={`w-full  bg-white/20 duration-200 mx-auto px-12 max-lg:px-6 max-md:px-3   py-2 z-20 ${
        !onHero && !isBottom && "hidden"
      } ${
        isBottom &&
        "sticky top-0   duration-200 from-bottom-slide   w-full bg-opacity-60 backdrop-blur-sm"
      }`}
    >
      <nav
        className={`
        flex justify-between  max-w-[1500px] mx-auto
        `}
      >
        <Link href={"/"} className="flex gap-2">
          <Image src={logo} className={`w-14 ${!onHero && "bg"} `} alt="Logo" />
          <div className="my-auto text-xl font-black">Trieste</div>
        </Link>
        <MobileNav />
        <NavigationMenu
          className={`${
            isBottom && " font-semibold"
          } flex gap-5 text- place-items-center text-sm max-md:hidden`}
        >
          {links.map((link, ind) => (
            <CL
              key={ind}
              theam={theam}
              name={link.name}
              link={link.link}
              links={link.links}
            />
          ))}
        </NavigationMenu>
      </nav>
    </div>
  );
};

const CL = ({
  theam,
  name,
  links,
  link,
}: {
  theam: any;
  name: string;
  link: string;
  links: any;
}) => {
  return (
    <NavigationMenuList>
      <NavigationMenuItem>
        {links.length > 0 ? (
          <NavigationMenuTrigger
            className={`bg-transparent capitalize font-[600]  ${
              theam && "text-primary font-[600]"
            }`}
          >
            <Link href={`${link}`} legacyBehavior passHref>
              <NavigationMenuLink>{name}</NavigationMenuLink>
            </Link>
          </NavigationMenuTrigger>
        ) : (
          <Link href={`${link}`} legacyBehavior passHref>
            <NavigationMenuLink
              className={`bg-transparent capitalize font-[600] ${
                theam && "text-primary"
              }`}
            >
              {name}
            </NavigationMenuLink>
          </Link>
        )}
        <NavigationMenuContent className="w-[400px] relative px-2 py-3 z-[200]">
          <ul className="flex flex-col z-50 gap-3 px-4 py-3 md:w-[200px] lg:w-[300px] lg:grid-cols-[.75fr_1fr]">
            {links.map((link: any, ind: number) => (
              <NavigationMenuList
                key={ind}
                className="grid grid-cols-[auto_1fr] gap-2 items-center"
              >
                <GoArrowRight className="font-semibold" />
                <Link href={link.url} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`font-normal  hover:text-primary capitalize`}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuList>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};

export default Nav;
