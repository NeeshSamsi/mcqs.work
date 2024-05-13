import { type Metadata } from "next"
import { Suspense } from "react"
import SessionForm from "@/components/SessionForm"
import Wrapper from "@/components/Wrapper"

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
    <Wrapper>
      <Suspense fallback={<p className="text-3xl">Loading form...</p>}>
        <SessionForm />
      </Suspense>
    </Wrapper>
  )
}
