import { z } from "zod"

export const settingsSchema = z
  .object({
    minQuestions: z.coerce.number(),
    maxQuestions: z.coerce.number({
      invalid_type_error: "Testing number validation",
    }),
    optionsType: z.enum(["1-4", "A-D"]),
  })
  .refine(({ minQuestions, maxQuestions }) => maxQuestions > minQuestions, {
    message: "Ending question should be greater than starting question",
    path: ["maxQuestions"],
  })
