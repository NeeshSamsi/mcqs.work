import { SignIn } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Wrapper from "@/components/Wrapper"

export default function Page() {
  const { userId } = auth()

  if (userId) {
    return redirect("/")
  }

  return (
    <Wrapper className="flex justify-center">
      <SignIn path="/sign-in" />
    </Wrapper>
  )
}
