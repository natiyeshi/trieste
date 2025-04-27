import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"
import Image from "next/image"
import img from "@/../public/assets/logo/logo.svg"
export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/refurbishment-maintenance" className="text-gray-300 hover:text-white">
                  Refurbishment & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/water-proofing-thermal-insulation" className="text-gray-300 hover:text-white">
                  Water Proofing & Thermal Insulation
                </Link>
              </li>
              <li>
                <Link href="/services/interior-fit-out" className="text-gray-300 hover:text-white">
                  Interior Fit-out
                </Link>
              </li>
              <li>
                <Link href="/services/structural-strengthening" className="text-gray-300 hover:text-white">
                  Structural Strengthening
                </Link>
              </li>
              <li>
                <Link href="/services/hdpe-geolining" className="text-gray-300 hover:text-white">
                  HDPE Geolining
                </Link>
              </li>
              <li>
                <Link href="/services/flooring-coatings" className="text-gray-300 hover:text-white">
                  Flooring & Coatings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Address</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#D41830]" />
                <a href="mailto:info@lelacons.com" className="text-gray-300 hover:text-white">
                  info@lelacons.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#D41830]" />
                <a href="mailto:lelaconsult@gmail.com" className="text-gray-300 hover:text-white">
                  lelaconsult@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#D41830]" />
                <a href="tel:+251115577215" className="text-gray-300 hover:text-white">
                  +251-115-577215
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#D41830]" />
                <a href="tel:+251912506754" className="text-gray-300 hover:text-white">
                  +251-912-506754
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect with us on Social Media.</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm z-20">
          <div className="flex justify-center items-center mb-4">
            <Image src={img} alt="Logo" width={50} height={50} className="mr-2" priority />
            {/* Logo Text */}
            <span className="text-xl font-bold text-[#D41830] mr-2">TRIESTE</span>
            <span className="text-xs uppercase">Construction Chemicals</span>
          </div>
          <p>&copy; {new Date().getFullYear()} trieste</p>
        </div>
      </div>
    </footer>
  )
}
