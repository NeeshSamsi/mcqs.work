import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import Wrapper from "@/components/Wrapper"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

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
      <body className={`{inter.variable} font-inter`}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}
