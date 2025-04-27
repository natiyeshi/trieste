"use client"

import { MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export function FloatingContactButton() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  // Add a small delay before showing the button to prevent it from flashing during page transitions
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    router.push("/contact")
  }

  if (!isVisible) return null

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-[#D41830] text-white p-4 rounded-full shadow-lg hover:bg-[#B01528] transition-all duration-300 hover:scale-110 group"
      aria-label="Contact Us"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#D41830] text-white py-2 px-3 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Contact Us
      </span>
    </button>
  )
}
