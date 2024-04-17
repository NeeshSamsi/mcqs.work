import { z } from "zod"

const scoringType = z.enum(["Normal", "NEET"])
const optionsType = z.enum(["1-4", "A-D"])

export type OptionsType = z.infer<typeof optionsType>
export type ScoringType = z.infer<typeof scoringType>

export const settingsSchema = z
  .object({
    scoringType,
    minQuestions: z.coerce.number(),
    maxQuestions: z.coerce.number({
      invalid_type_error: "Testing number validation",
    }),
    optionsType,
  })
  .refine(({ minQuestions, maxQuestions }) => maxQuestions > minQuestions, {
    message: "Ending question should be greater than starting question",
    path: ["maxQuestions"],
  })
