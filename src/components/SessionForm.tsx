"use client"

import { z } from "zod"
import { cn, getScore, numericEnum } from "@/lib/utils"
import { settingsSchema, type TypeOfOptions } from "@/lib/zodSchemas"
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Button } from "./ui/button"
import Link from "next/link"

type Options = 0 | 1 | 2 | 3 | 4

type Steps = {
  id: 1 | 2 | 3
  title: string
}[]

type FormType = "questionAnswers" | "answerKey"

interface MCQFormProps extends z.infer<typeof settingsSchema> {
  formType: FormType
  setCurrentStep: Dispatch<SetStateAction<0 | 1 | 2 | 3 | null>>
}

interface ResultType {
  submittedAnswer: Options
  keyAnswer: Options
  result: "correct" | "wrong" | "empty"
}

const options = {
  "1-4": ["Empty", "1", "2", "3", "4"],
  "A-D": ["Empty", "A", "B", "C", "D"],
}

function handleReset() {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.clear()
  }
}

export default function SessionForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const steps: Steps = [
    {
      id: 1,
      title: "Solve Questions",
    },
    {
      id: 2,
      title: "Add Answer Key",
    },
    {
      id: 3,
      title: "Review Results",
    },
  ]

  const [currentStep, setCurrentStep] = useState<0 | 1 | 2 | 3 | null>(1)
  const [settings, setSettings] = useState<z.infer<
    typeof settingsSchema
  > | null>(null)

  useEffect(() => {
    const validate = settingsSchema.safeParse({
      minQuestions: searchParams.get("minQuestions"),
      maxQuestions: searchParams.get("maxQuestions"),
      optionsType: searchParams.get("optionsType"),
    })

    if (!validate.success) {
      setCurrentStep(0)
      setTimeout(() => {
        router.push("/new")
      }, 2000)
    } else {
      setSettings(validate.data)
      if (!currentStep) {
        setCurrentStep(1)
      }
    }
  }, [searchParams, router, currentStep])

  return (
    <>
      <h1 className="my-12 text-5xl font-semibold">
        {currentStep === 0 || !currentStep
          ? "Invalid Settings"
          : "Practice Session"}
      </h1>

      {!!currentStep && (
        <header className="my-12 grid grid-cols-3 gap-12">
          {steps.map(({ id, title }) => (
            <Step
              key={id}
              step={id}
              title={title}
              accent={id === currentStep}
              onClick={() => setCurrentStep(id)}
            />
          ))}
        </header>
      )}

      <main>
        {currentStep === 0 ? (
          <p className="text-3xl">Redirecting to settings page...</p>
        ) : (
          currentStep &&
          !settings && <p className="text-2xl font-light">Loading form ...</p>
        )}

        {settings && (
          <>
            {currentStep === 1 && (
              <MCQForm
                formType="questionAnswers"
                {...settings}
                setCurrentStep={setCurrentStep}
              />
            )}
            {currentStep === 2 && (
              <MCQForm
                formType="answerKey"
                {...settings}
                setCurrentStep={setCurrentStep}
              />
            )}
            {currentStep === 3 && (
              <div className="space-y-8">
                <Results optionsType={settings.optionsType} />
                <Link href="/new " className="block" onClick={handleReset}>
                  <Button>Reset</Button>
                </Link>
              </div>
            )}
          </>
        )}
      </main>
    </>
  )
}

const Step = ({
  step,
  title,
  accent,
  onClick,
}: {
  step: number
  title: string
  accent?: boolean
  onClick: () => void
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <hr
        className={cn("mb-4 h-1 bg-muted", {
          "bg-primary": accent,
        })}
      />
      <p className={cn("mb-2 text-lg", { "text-primary": accent })}>
        Step {step}
      </p>
      <p className="text-2xl font-semibold">{title}</p>
    </div>
  )
}

const MCQForm = ({
  minQuestions,
  maxQuestions,
  optionsType,
  formType,
  setCurrentStep,
}: MCQFormProps) => {
  const numberOfQuestions = maxQuestions - minQuestions + 1
  const Options = [0, 1, 2, 3] as const
  const questionsSchema = numericEnum(Options)
    .optional()
    .array()
    .length(numberOfQuestions)

  const defaultAnswers: z.infer<typeof questionsSchema> = Array(
    numberOfQuestions,
  ).map((_) => undefined)
  const [answers, setAnswers] =
    useState<z.infer<typeof questionsSchema>>(defaultAnswers)

  const handleChange = (index: number, value: string) => {
    const option = options[optionsType].findIndex((el) => el === value)

    const updatedAnswers = [...answers]
    // @ts-ignore I am setting a type of number to a type of 1, 2, 3, or 4. But I know I am getting the right type from the form so I am ignoring
    updatedAnswers[index] = option

    setAnswers(updatedAnswers)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(formType, JSON.stringify(answers))
    } else {
      throw new Error("Unable to access Local Storage")
    }

    if (formType === "questionAnswers") {
      setCurrentStep(2)
    } else {
      setCurrentStep(3)
    }
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)} className="space-y-8">
      <div className="space-y-4">
        {[...Array(numberOfQuestions)].map((_, i) => {
          const number = Number(minQuestions) + Number(i)
          const label = `${formType === "questionAnswers" ? "Q" : "A"}${number}:`

          return (
            <div key={i} className="flex items-center gap-4 space-y-0">
              <p className="w-[4ch] text-xl">{label}</p>

              <Select onValueChange={(value) => handleChange(i, value)}>
                <SelectTrigger className="w-fit text-base">
                  <SelectValue placeholder={`Pick ${optionsType}`} />
                </SelectTrigger>

                <SelectContent>
                  {/* <SelectItem key={i} value="">
                    Empty
                  </SelectItem> */}
                  {options[optionsType].map((option, i) => (
                    <SelectItem key={i} value={options[optionsType][i]}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )
        })}
      </div>

      <Button type="submit" className="text-base">
        Next
      </Button>
    </form>
  )
}

const Results = ({ optionsType }: { optionsType: TypeOfOptions }) => {
  const [localQuestionAnswers, setLocalQuestionAnswers] = useState<
    string | null
  >(null)
  const [localAnswerKey, setLocalAnswerKey] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const questionAnswers = localStorage.getItem("questionAnswers")
      const answerKey = localStorage.getItem("answerKey")

      setLocalQuestionAnswers(questionAnswers)
      setLocalAnswerKey(answerKey)
    }
  }, [])

  if (!localQuestionAnswers || !localAnswerKey) {
    return (
      <div>
        <p>
          Invalid answers or answer key submitted. If you think this is a
          mistake, feel free to reach out.
        </p>
      </div>
    )
  }

  const questionAnswers: Options[] = JSON.parse(localQuestionAnswers)
  const answerKey: Options[] = JSON.parse(localAnswerKey)

  if (questionAnswers.length !== answerKey.length) {
    return (
      <div>
        <p>
          Something went wrong: Length of question answers & answer key do not
          match.
        </p>
      </div>
    )
  }

  const results: ResultType[] = questionAnswers.map((answer, i) => {
    const submittedAnswer = answer
    const keyAnswer = answerKey[i]
    let result: "correct" | "wrong" | "empty"

    if (answer === null) {
      result = "empty"
    } else {
      if (answer === keyAnswer) {
        result = "correct"
      } else {
        result = "wrong"
      }
    }

    return {
      submittedAnswer,
      keyAnswer,
      result,
    }
  })
  const correct = results.filter((result) => result.result === "correct").length
  const wrong = results.filter((result) => result.result === "wrong").length
  const empty = results.filter((result) => result.result === "empty").length

  return (
    <>
      <div className="rounded-xl bg-secondary p-10">
        <h2 className="mb-8 text-4xl font-semibold">Overview</h2>
        <div className="mb-16 grid grid-cols-4 gap-6">
          <Stat
            title="Score"
            stat={getScore("NEET", { correct, wrong, empty })}
          />
          <Stat title="Correct Answers" stat={correct} />
          <Stat title="Wrong Answers" stat={wrong} />
          <Stat title="Empty Answers" stat={empty} />
        </div>

        <h3 className="mb-8 text-4xl font-semibold">Question Comparison</h3>

        <div className="grid overflow-hidden rounded-lg text-center text-xl">
          {results.map((result, i) => (
            <ReviewQuestion
              key={i}
              {...result}
              index={i}
              optionsType={optionsType}
            />
          ))}
        </div>
      </div>
    </>
  )
}

const Stat = ({ title, stat }: { title: string; stat: number }) => {
  return (
    <div className="w-fit space-y-3 rounded-lg border-l border-l-8 border-primary pl-4">
      <p className="text-xl font-medium">{title}</p>
      <p className="text-5xl font-semibold">{stat}</p>
    </div>
  )
}

interface ReviewQuestionType extends ResultType {
  index: number
  optionsType: TypeOfOptions
}
const ReviewQuestion = ({
  submittedAnswer,
  keyAnswer,
  result,
  index,
  optionsType,
}: ReviewQuestionType) => {
  return (
    <div
      className={cn("bg-background p-4", {
        "border-t border-t-secondary": index > 0,
        "bg-destructive": result === "wrong",
      })}
    >
      <div className="grid grid-cols-3 ">
        <p className="flex items-center justify-center gap-2">
          <span className="w-[4ch]">Q{index + 1}:</span>
          <span className="w-fit">
            {options[optionsType][submittedAnswer]
              ? options[optionsType][submittedAnswer]
              : "N/A"}
          </span>
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="w-[4ch]">A{index + 1}:</span>
          <span className="w-fit">{options[optionsType][keyAnswer]}</span>
        </p>
        <p>
          {result === "correct" && "✅"}
          {result === "wrong" && "❌"}
          {result === "empty" && "—"}
          {/* ✖️ */}
        </p>
      </div>
    </div>
  )
}
