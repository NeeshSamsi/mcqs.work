import { z } from "zod"

const optionsType = z.enum(["1-4", "A-D"])
export type TypeOfOptions = z.infer<typeof optionsType>
export const settingsSchema = z
  .object({
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
