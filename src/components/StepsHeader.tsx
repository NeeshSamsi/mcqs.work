"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Steps = {
  id: 1 | 2 | 3
  title: string
  path: string
}[]

const steps: Steps = [
  {
    id: 1,
    title: "Solve Questions",
    path: "questions",
  },
  {
    id: 2,
    title: "Add Answer Key",
    path: "answer-key",
  },
  {
    id: 3,
    title: "Review Results",
    path: "results",
  },
]

type Props = {
  sessionId: string
}

export default function StepsHeader({ sessionId }: Props) {
  const pathname = usePathname()

  return (
    <header className="my-12 grid grid-cols-3 gap-6 md:gap-12">
      {steps.map(({ id, title, path }) => (
        <Link href={`/${sessionId}/${path}`}>
          <Step
            key={id}
            step={id}
            title={title}
            accent={path === pathname.split("/").slice(-1).toString()}
          />
        </Link>
      ))}
    </header>
  )
}

const Step = ({
  step,
  title,
  accent,
}: {
  step: number
  title: string
  accent: boolean
}) => {
  return (
    <div>
      <hr
        className={cn("mb-4 h-1 bg-muted", {
          "bg-primary": accent,
        })}
      />
      <p className={cn("mb-2 text-lg", { "text-primary": accent })}>
        Step {step}
      </p>
      <p className="text-xl font-semibold md:text-2xl">{title}</p>
    </div>
  )
}
