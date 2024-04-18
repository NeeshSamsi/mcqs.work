import type { Metadata } from "next"
import "./globals.css"
import { url } from "@/lib/config"
import { cn } from "@/lib/utils"
import { Inter as FontSans } from "next/font/google"

import Wrapper from "@/components/Wrapper"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })

const siteName = "MCQ Practice"
const title = "MCQ Practice"
const description =
  "Practice your MCQs, add your answer key, get a calculated score & review your answers."

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    title,
    description,
    siteName,
    type: "website",
  },
  twitter: {
    title,
    description,
    card: "summary",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "dark bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Wrapper>
          <Navbar />
          {children}
          <Footer />
        </Wrapper>
      </body>
    </html>
  )
}
