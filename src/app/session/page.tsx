import { type Metadata } from "next"
import { z } from "zod"
import { settingsSchema } from "@/lib/zodSchemas"
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

type PageProps = {
  params: {}
  searchParams: z.infer<typeof settingsSchema>
}

export default function Session(props: PageProps) {
  return <SessionForm {...props.searchParams} />
}
