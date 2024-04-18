import Link from "next/link"
import { GitHubLogoIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons"

export default function Footer() {
  return (
    <footer className="mt-8 py-8 text-lg">
      <div className="flex justify-between gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-xl">
            <QuestionMarkCircledIcon className="size-7" />
            <strong className="font-semibold">mcqs.work</strong>
          </Link>
          <p className="max-w-[40ch] text-balance text-slate-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
            cupiditate quae nam molestias.
          </p>
        </div>

        <div className="flex flex-col items-end gap-4">
          <Link
            href="https://github.com/NeeshSamsi/mcqs.work"
            className="text-slate-400 transition hover:opacity-75"
          >
            <span className="sr-only">Facebook</span>
            <GitHubLogoIcon className="size-6" />
          </Link>

          <nav className="flex flex-col gap-4 text-end md:flex-row md:text-start">
            <Link
              href="/"
              className="text-slate-400 transition hover:opacity-75"
            >
              Home
            </Link>
            <Link
              href="/new"
              className="text-slate-400 transition hover:opacity-75"
            >
              New Session
            </Link>
          </nav>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between text-base text-slate-400">
        <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>

        <p>
          Made with ❤️ by{" "}
          <Link
            href="https://neeshsamsi.com"
            rel="noreferrer"
            target="_blank"
            className="underline transition hover:opacity-75"
          >
            Neesh
          </Link>
        </p>
      </div>
    </footer>
  )
}
