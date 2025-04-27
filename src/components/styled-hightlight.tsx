import type React from "react"
interface StyledHighlightProps {
  children: React.ReactNode
  className?: string
}

export function StyledHighlight({ children, className = "" }: StyledHighlightProps) {
  return (
    <span className={`inline-block bg-[#D41830] text-white px-2 py-1 transform -skew-x-6 ${className}`}>
      {children}
    </span>
  )
}
