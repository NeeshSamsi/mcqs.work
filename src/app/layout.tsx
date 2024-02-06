import type { Metadata } from "next"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Inter as FontSans } from "next/font/google"

import { ThemeProvider } from "@/components/ThemeProvider"
import Wrapper from "@/components/Wrapper"
import Navbar from "@/components/Navbar"

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "MCQ Practice",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Wrapper>
            <Navbar />
            {children}
          </Wrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
