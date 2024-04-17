import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z, type ZodType } from "zod"
import { ScoringType } from "./zodSchemas"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function numericEnum<TValues extends readonly number[]>(
  values: TValues,
) {
  return z.number().superRefine((val, ctx) => {
    if (!values.includes(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_enum_value,
        options: [...values],
        received: val,
      })
    }
  }) as ZodType<TValues[number]>
}

export function getScore(
  type: ScoringType,
  { correct, wrong, empty }: { correct: number; wrong: number; empty: number },
): number {
  switch (type) {
    case "Normal":
      return correct

    case "NEET":
      return correct * 4 - wrong

    // case "default":
    //   return correct - wrong

    default:
      return 0
  }
}
