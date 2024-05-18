type Props = {
  params: { sessionId: string }
}

export default function Answers({ params }: Props) {
  console.log(params)

  return (
    <main>
      <h1>Answers</h1>
    </main>
  )
}
