import { type ReactNode } from "react"

type Props = {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: Props) {
  return (
    <div className="block rounded-lg border border-secondary p-8 shadow-lg transition hover:border-primary/30 hover:shadow-primary/30">
      {icon}
      <h2 className="mt-4 text-xl font-bold text-slate-100">{title}</h2>
      <p className="mt-1 text-sm text-slate-400">{description}</p>
    </div>
  )
}
