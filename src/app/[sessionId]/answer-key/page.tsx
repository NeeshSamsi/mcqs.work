type Props = {
  params: { sessionId: string }
}

export default function AnswerKey({ params }: Props) {
  console.log(params)

  return (
    <main>
      <h1>Answer Key</h1>
    </main>
  )
}
