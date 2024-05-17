type Props = {
  params: { sessionId: string }
}

export default function Results({ params }: Props) {
  console.log(params)

  return (
    <main>
      <h1>Results</h1>
    </main>
  )
}
