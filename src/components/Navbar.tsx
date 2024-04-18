import Link from "next/link"
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <nav className="mb-8 flex items-center justify-between gap-8 py-8">
      <Link href="/" className="flex items-center gap-2 text-xl">
        <QuestionMarkCircledIcon className="size-7" />
        <strong className="font-semibold">mcqs.work</strong>
      </Link>

      <div className="flex items-center gap-4">
        <Button asChild>
          <Link href="/new" className="text-lg font-semibold">
            New Session
          </Link>
        </Button>
      </div>
    </nav>
  )
}
