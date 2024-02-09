"use client"

import "@/app/globals.css"
import { Button } from "@/components/ui/button"

import { Inter as FontSans } from "next/font/google"
import Link from "next/link"
const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })

export default function NotFound() {
  return (
    <main className={`${fontSans.variable} text-center`}>
      <h1 className="my-12 text-5xl font-semibold">
        404 - This page does not exist.
      </h1>

      <div className="space-y-6">
        <p className="text-3xl font-medium">Start a new session here</p>
        <Link href="/new" className="inline-block">
          <Button className="text-lg">New Session</Button>
        </Link>
      </div>
    </main>
  )
}
