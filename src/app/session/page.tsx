import { type Metadata } from "next"
import { Suspense } from "react"
import SessionForm from "@/components/SessionForm"

const title = "Practice Session"
const description =
  "Solve your questions, add your answer key, get a calculated score & review your answers."
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, url: "/session", description },
  twitter: { title, description },
  alternates: {
    canonical: "/session",
  },
}

export default function Session() {
  return (
    <Suspense fallback={<p className="text-3xl">Error loading form</p>}>
      <SessionForm />
    </Suspense>
  )
}
