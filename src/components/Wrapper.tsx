import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export default function Wrapper({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn("mx-auto w-[min(1024px,100%-4rem)] font-sans", className)}
    >
      {children}
    </div>
  )
}
