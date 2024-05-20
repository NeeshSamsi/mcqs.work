import { z } from "zod"

const scoringType = z.enum(["Normal", "NEET"])
const optionsType = z.enum(["1-4", "A-D"])

export type OptionsType = z.infer<typeof optionsType>
export type ScoringType = z.infer<typeof scoringType>

export const settingsSchema = z
  .object({
    scoringType,
    minQuestion: z.coerce.number(),
    maxQuestion: z.coerce.number({
      invalid_type_error: "Testing number validation",
    }),
    optionsType,
  })
  .refine(({ minQuestion, maxQuestion }) => maxQuestion > minQuestion, {
    message: "Ending question should be greater than starting question",
    path: ["maxQuestion"],
  })
