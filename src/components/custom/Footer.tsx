import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, X } from "lucide-react";
import img from "@/../public/assets/images/image 5 (6).png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Social Media */}
          <div className="space-y-6">
            <div className="bg-white p-4 inline-block">
              <Image
                src={img}
                alt="Trieste Construction Chemicals Logo"
                width={200}
                height={150}
                className="h-auto"
              />
            </div>

            <div>
              <p className="mb-4">Connect with us on Social Media.</p>
              <div className="flex space-x-4">
                <Link href="#" aria-label="Twitter/X">
                  <X className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="WhatsApp">
                  <div className="h-6 w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.646.075-.3-.15-1.267-.465-2.414-1.485-.893-.795-1.494-1.77-1.67-2.07-.173-.3-.018-.465.13-.612.134-.134.3-.347.45-.52.149-.174.199-.3.299-.498.1-.2.05-.374-.025-.524-.075-.15-.672-1.62-.922-2.217-.242-.579-.487-.5-.672-.51-.172-.01-.371-.01-.571-.01-.2 0-.522.074-.796.372-.273.3-1.045 1.02-1.045 2.488s1.07 2.887 1.22 3.086c.149.2 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M13.792 18.333a7.5 7.5 0 01-3.844 1.025c-4.146 0-7.5-3.354-7.5-7.5 0-4.145 3.354-7.5 7.5-7.5 4.145 0 7.5 3.355 7.5 7.5 0 1.485-.432 2.865-1.177 4.027l.855 3.115-3.334-1.667z" />
                    </svg>
                  </div>
                </Link>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-2xl font-medium mb-6">Pages</h3>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="hover:text-secondary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-secondary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-secondary transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-secondary transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-medium mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services/refurbishment"
                  className="hover:text-secondary transition-colors"
                >
                  Refurbishment & Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/waterproofing"
                  className="hover:text-secondary transition-colors"
                >
                  Water Proofing & Thermal Insulation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/interior"
                  className="hover:text-secondary transition-colors"
                >
                  Interior Fit-out
                </Link>
              </li>
              <li>
                <Link
                  href="/services/strengthening"
                  className="hover:text-secondary transition-colors"
                >
                  Structural Strengthening
                </Link>
              </li>
              <li>
                <Link
                  href="/services/geolining"
                  className="hover:text-secondary transition-colors"
                >
                  HDPE Geolining
                </Link>
              </li>
              <li>
                <Link
                  href="/services/flooring"
                  className="hover:text-secondary transition-colors"
                >
                  Flooring & Coatings
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-2xl font-medium mb-6">Address</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@lelacons.com"
                  className="hover:text-secondary transition-colors"
                >
                  info@lelacons.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:lelaconsult@gmail.com"
                  className="hover:text-secondary transition-colors"
                >
                  lelaconsult@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+251115577215"
                  className="hover:text-secondary transition-colors"
                >
                  +251-115-577215
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+251912506754"
                  className="hover:text-secondary transition-colors"
                >
                  +251-912-506754
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          Copyright © {new Date().getFullYear()} trieste
        </div>
      </div>
    </footer>
  );
}
