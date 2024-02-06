import Link from "next/link"
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons"
import { ModeToggle } from "./ModeToggle"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-8 py-8">
      <Link href="/" className="flex items-center gap-2 text-xl">
        <QuestionMarkCircledIcon className="size-7" />
        <span>MCQ Practice</span>
      </Link>

      <ModeToggle />
    </nav>
  )
}
