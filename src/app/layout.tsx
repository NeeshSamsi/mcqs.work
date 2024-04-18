import type { Metadata } from "next"
import "./globals.css"
import { url } from "@/lib/config"
import { cn } from "@/lib/utils"
import { Inter as FontSans } from "next/font/google"

import Wrapper from "@/components/Wrapper"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Script from "next/script"

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })

const siteName = "MCQS.work"
const title = "MCQS.work | Customizable MCQ Practice Sessions"
const description =
  // "Customizable MCQ Practice to Boost Exam Prep. Master MCQs & Ace your Exams!"
  "Ace your exams with mcqs.work! Customize your MCQ practice sessions, choose option types, and track your progress. Get ready-to-use inputs and a session summary. Start practicing now!"

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
    images: ["/og.jpg"],
    siteName,
    type: "website",
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Script
        strategy="lazyOnload"
        src="https://umami.neeshsamsi.com/script.js"
        data-website-id="4adaf4c4-4b15-4253-8cf1-eee28c36b20b"
      />

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
