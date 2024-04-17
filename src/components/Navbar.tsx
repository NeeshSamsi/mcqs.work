import Link from "next/link"
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-8 py-8">
      <Link href="/" className="flex items-center gap-2 text-xl">
        <QuestionMarkCircledIcon className="size-7" />
        <span>MCQ Practice</span>
      </Link>

      <div className="flex items-center gap-4">
        <Button asChild>
          <Link href="/new" className="text-lg">
            New
          </Link>
        </Button>
      </div>
    </nav>
  )
}
