"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import img from "@/../public/assets/logo/logo.svg"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const getLinkClass = (path: string) => {
    const baseClass = "text-sm font-medium transition-colors duration-200"
    if (isActive(path)) {
      return `${baseClass} text-[#D41830]`
    }
    return `${baseClass} text-gray-600 hover:text-[#D41830]`
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-8 md:px-16">
        <Link href="/" className="flex items-center">
          <Image src={img} alt="Logo" width={50} height={50} className="mr-2" priority />
          {/* Logo Text */}
          <span className="text-2xl font-bold text-[#D41830]">TRIESTE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            About Us
          </Link>
          <Link href="/services" className={getLinkClass("/services")}>
            Core services
          </Link>
          <Link href="/projects" className={getLinkClass("/projects")}>
            Projects
          </Link>
          <Link href="/contact" className={getLinkClass("/contact")}>
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-8 py-4 flex flex-col gap-4 bg-white">
            <Link href="/" className={getLinkClass("/")} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className={getLinkClass("/about")} onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/services" className={getLinkClass("/services")} onClick={() => setIsMenuOpen(false)}>
              Core services
            </Link>
            <Link href="/projects" className={getLinkClass("/projects")} onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/contact" className={getLinkClass("/contact")} onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
