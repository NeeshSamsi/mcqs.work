import type { Metadata } from "next"
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import Wrapper from "@/components/Wrapper"
import { cn } from "@/lib/utils"

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "NEET MCQ Practice",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}
