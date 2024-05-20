"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { settingsSchema } from "@/lib/zodSchemas"
import { scoringTypes } from "@/lib/config"
import { createSession } from "@/actions"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "./ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Button } from "./ui/button"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useAuth } from "@clerk/nextjs"
import { useToast } from "./ui/use-toast"

export default function SettingsForm() {
  const form = useForm<z.infer<typeof settingsSchema>>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      scoringType: "Normal",
      minQuestion: 1,
      maxQuestion: 5,
      optionsType: "A-D",
    },
  })

  const router = useRouter()
  const { userId } = useAuth()
  const { toast } = useToast()

  const [loading, setLoading] = useState(false)

  async function onSubmit(settings: z.infer<typeof settingsSchema>) {
    // On a protected page, should always have a user id
    if (!userId) return

    setLoading(true)

    const { success, session } = await createSession({
      userId,
      ...settings,
    })

    if (success) {
      setLoading(false)
      router.push(`/${session?.id}/questions`)
    } else {
      setLoading(false)
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description:
          "Please try again later. If this persists, please reach out.",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="scoringType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-2xl font-medium">
                  Scoring Type
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-fit gap-2 text-lg">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {scoringTypes.map(({ name }) => (
                      <SelectItem className="text-base" value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription className="text-base">
                  {
                    scoringTypes.find(({ name }) => name === field.value)
                      ?.message
                  }
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <p className="text-2xl font-medium">Range of questions</p>
          <div className="flex flex-wrap gap-6">
            <FormField
              control={form.control}
              name="minQuestion"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-wrap items-center gap-4">
                    <FormLabel className="w-fit text-xl font-light">
                      From Q no.:
                    </FormLabel>
                    <FormControl className="w-fit">
                      <Input type="number" placeholder="0" {...field} />
                    </FormControl>
                  </div>
                  <FormDescription className="text-base">
                    Starting question number
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maxQuestion"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-wrap items-center gap-4">
                    <FormLabel className="w-fit text-xl font-light">
                      To Q no.:
                    </FormLabel>
                    <FormControl className="w-fit">
                      <Input type="number" placeholder="5" {...field} />
                    </FormControl>
                  </div>
                  <FormDescription className="text-base">
                    Ending question number
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="optionsType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="mb-4 block text-2xl font-medium">
                Type of options
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex items-center gap-8"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="A-D" />
                    </FormControl>
                    <FormLabel className="text-lg">A - D</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="1-4" />
                    </FormControl>
                    <FormLabel className="text-lg">1 - 4</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={loading} className="text-base">
          {loading ? (
            <span>Creating Session...</span>
          ) : (
            <span>Start Session</span>
          )}
        </Button>
      </form>
    </Form>
  )
}
