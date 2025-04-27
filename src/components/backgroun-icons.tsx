"use client"

import type React from "react"

import { useEffect, useState } from "react"
import {
  Droplet,
  Home,
  Building,
  Hammer,
  Wrench,
  PaintBucket,
  Ruler,
  HardHat,
  Warehouse,
  Layers,
  Shield,
  PenToolIcon as Tool,
} from "lucide-react"

interface IconProps {
  icon: React.ReactNode
  top: string
  left: string
  size: string
  delay: string
  duration: string
}

export function BackgroundIcons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const icons: IconProps[] = [
    {
      icon: <Droplet />,
      top: "10%",
      left: "5%",
      size: "h-8 w-8",
      delay: "0s",
      duration: "15s",
    },
    {
      icon: <Home />,
      top: "15%",
      left: "85%",
      size: "h-10 w-10",
      delay: "2s",
      duration: "18s",
    },
    {
      icon: <Building />,
      top: "25%",
      left: "15%",
      size: "h-12 w-12",
      delay: "1s",
      duration: "20s",
    },
    {
      icon: <Hammer />,
      top: "35%",
      left: "90%",
      size: "h-8 w-8",
      delay: "0.5s",
      duration: "17s",
    },
    {
      icon: <Wrench />,
      top: "45%",
      left: "8%",
      size: "h-9 w-9",
      delay: "3s",
      duration: "19s",
    },
    {
      icon: <PaintBucket />,
      top: "60%",
      left: "92%",
      size: "h-10 w-10",
      delay: "2.5s",
      duration: "16s",
    },
    {
      icon: <Ruler />,
      top: "70%",
      left: "20%",
      size: "h-8 w-8",
      delay: "1.5s",
      duration: "18s",
    },
    {
      icon: <HardHat />,
      top: "80%",
      left: "80%",
      size: "h-11 w-11",
      delay: "0.8s",
      duration: "22s",
    },
    {
      icon: <Warehouse />,
      top: "85%",
      left: "40%",
      size: "h-9 w-9",
      delay: "3.5s",
      duration: "21s",
    },
    {
      icon: <Layers />,
      top: "20%",
      left: "60%",
      size: "h-10 w-10",
      delay: "1.2s",
      duration: "19s",
    },
    {
      icon: <Shield />,
      top: "50%",
      left: "75%",
      size: "h-8 w-8",
      delay: "2.8s",
      duration: "17s",
    },
    {
      icon: <Tool />,
      top: "65%",
      left: "30%",
      size: "h-9 w-9",
      delay: "1.8s",
      duration: "20s",
    },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`absolute ${icon.size} text-gray-100 opacity-0 ${
            isVisible ? "animate-float" : ""
          } transition-opacity duration-1000`}
          style={{
            top: icon.top,
            left: icon.left,
            animationDelay: icon.delay,
            animationDuration: icon.duration,
            opacity: isVisible ? 0.15 : 0,
          }}
        >
          {icon.icon}
        </div>
      ))}
    </div>
  )
}
