// components/MobileNav.js

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerTrigger className="flex place-items-center  h-full">

          <button
            className="p-2 my-auto text-xl bg-white rounded-full"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </DrawerTrigger>
        <DrawerContent className="p-6">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contactus" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNav;
