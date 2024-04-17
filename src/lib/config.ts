export const url =
  process.env.NODE_ENV === "production"
    ? "https://mcqswork.vercel.app"
    : "http://localhost:3000"

export const scoringTypes = [
  {
    name: "Normal",
    message:
      "+1 point for correct answers. No negative marking for wrong answers & empty answers.",
  },
  {
    name: "NEET",
    message:
      "+4 points for correct answers. -1 for wrong answers. No negative marking for empty answers.",
  },
]
