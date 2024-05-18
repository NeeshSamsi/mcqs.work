import { type ReactNode } from "react"

import Wrapper from "@/components/Wrapper"
import StepsHeader from "@/components/StepsHeader"

type Props = {
  children: ReactNode
  params: {
    sessionId: string
  }
}

export default function SessionLayout({
  children,
  params: { sessionId },
}: Props) {
  return (
    <Wrapper>
      <h1 className="my-12 text-5xl font-semibold">Practice Session</h1>

      <StepsHeader sessionId={sessionId} />

      {children}
    </Wrapper>
  )
}
