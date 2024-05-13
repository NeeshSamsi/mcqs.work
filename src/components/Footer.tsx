import Link from "next/link"
import { GitHubLogoIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons"
import Wrapper from "./Wrapper"

export default function Footer() {
  return (
    <Wrapper>
      <footer className="mt-8 py-8 text-base sm:text-lg">
        <div className="flex justify-between gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl">
              <QuestionMarkCircledIcon className="size-7" />
              <strong className="font-semibold">mcqs.work</strong>
            </Link>
            <p className="max-w-[50ch] text-slate-400">
              The all in one app to practice MCQ Questions including support for
              the marking schemes of common competitive exams.
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

        <div className="mt-8 flex items-center justify-between text-sm text-slate-400 sm:text-base">
          <p>
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>

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
    </Wrapper>
  )
}
