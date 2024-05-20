"use server"

import { getXataClient } from "@/xata"
import { z } from "zod"
import { settingsSchema } from "./lib/zodSchemas"
import { nanoid } from "nanoid"

export async function createSession({
  userId,
  minQuestion,
  maxQuestion,
  optionsType,
  scoringType,
}: z.infer<typeof settingsSchema> & { userId: string }) {
  try {
    const xata = getXataClient()
    const session = await xata.db.Sessions.create(nanoid(12), {
      userId,
      minQuestion,
      maxQuestion,
      optionsType,
      scoringType,
      complete: false,
    })
    return {
      success: true,
      session,
    }
  } catch (err) {
    console.error(err)
    return {
      success: false,
      error: err,
    }
  }
}
