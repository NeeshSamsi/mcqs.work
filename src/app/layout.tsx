import type { Metadata } from "next"
import "./globals.css"
import { url } from "@/lib/config"
import { cn } from "@/lib/utils"
import { Inter as FontSans } from "next/font/google"

import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

import { Toaster } from "@/components/ui/toaster"
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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorBackground: "hsl(222.2 84% 4.9%)",
          colorInputBackground: "hsl(222.2 84% 4.9%)",
          colorText: "hsl(210 40% 98%)",
          colorTextSecondary: "rgb(148 163 184)",
          colorPrimary: "hsl(217.2 91.2% 59.8%)",
        },
      }}
    >
      <html lang="en">
        {process.env.NODE_ENV === "production" && (
          <Script
            strategy="lazyOnload"
            src="https://umami.neeshsamsi.com/script.js"
            data-website-id="4adaf4c4-4b15-4253-8cf1-eee28c36b20b"
          />
        )}

        <body
          className={cn(
            "dark bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
