"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { settingsSchema } from "@/lib/zodSchemas"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

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
import { scoringTypes } from "@/lib/config"

export default function SettingsForm() {
  const form = useForm<z.infer<typeof settingsSchema>>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      scoringType: "Normal",
      minQuestions: 1,
      maxQuestions: 5,
      optionsType: "A-D",
    },
  })

  const router = useRouter()

  function onSubmit(settings: z.infer<typeof settingsSchema>) {
    let searchParamsArray = []

    for (const key in settings) {
      searchParamsArray.push([
        key,
        String(settings[key as keyof typeof settings]),
      ])
    }

    const searchParamsString = new URLSearchParams(searchParamsArray).toString()

    router.push(`/session?${searchParamsString}`)
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
          <div className="flex gap-6">
            <FormField
              control={form.control}
              name="minQuestions"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
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
              name="maxQuestions"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
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

        {/* <FormField
          control={form.control}
          name="optionsType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-4 block text-2xl font-medium">
                Type of options
              </FormLabel>

              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-fit text-base">
                    <SelectValue placeholder="Choose type of options" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1-4">1 - 4</SelectItem>
                  <SelectItem value="A-D">A - D</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        /> */}

        <Button type="submit" className="text-base">
          Start Session
        </Button>
      </form>
    </Form>
  )
}
