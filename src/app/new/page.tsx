import { type Metadata } from "next"
import { Suspense } from "react"
import SettingsForm from "@/components/SettingsForm"

const title = "New Session"
const description =
  "Start a new MCQ Practice Session. Solve your questions, add your answer key, get a calculated score & review your answers."
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, url: "/new", description },
  twitter: { title, description },
  alternates: {
    canonical: "/new",
  },
}

export default function New() {
  return (
    <main>
      <h1 className="my-12 text-5xl font-semibold">Configure Settings</h1>

      <Suspense fallback={<p className="text-3xl">Loading form...</p>}>
        <SettingsForm />
      </Suspense>
    </main>
  )
}
