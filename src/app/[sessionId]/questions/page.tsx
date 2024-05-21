type Props = {
  params: { sessionId: string }
}

export default function Answers({ params: { sessionId } }: Props) {
  return (
    <main>
      <h1>Questions - {sessionId}</h1>
    </main>
    // <MCQForm />
  )
}
