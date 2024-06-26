# MCQ Practice App

The all in one app to practice MCQ Questions including support for the marking schemes of common competitive exams.

## Features

- **Custom range for start and end of MCQS**

  Choose how where you want your questions to start so they line up with the Question Bank you may be referring you to.

- **Pick the type of options**

  Choose between A-D & 1-4 option types

- **Custom Scoring Types**

  Choose the way your score is calculated. Normal scoring is just +1 point for correct answers and no negative marking. We also more have complex calculations like +4 for correct & -1 for wrong answers

- **Get readymade inputs for the range of questions and options you selected**

- **Fill in your answers from your answer key**

- **Summary of the Session**

  Get an overview of your correct, wrong & empty questions. Calculated score based on the Scoring Type you selected. Check all the questions you got right, wrong and left empty.

## Built With

1. Next.js 14 - The react meta framework I'm comfortable with.
1. Tailwind CSS - The best way I know how to CSS.
1. Shadcn UI - The only reason I can deal with forms.
1. HyperUI.dev - Some of the most convenient Tailwind CSS Components - Completely Free & Opensource.

## Dev Notes

**To add a new Scoring Type:**

- Add object to `config.ts`

  ```ts
  {
    name: "Name",
    message: "Describe the marking scheme here."
  }
  ```

- Update the `lib/zodSchemas.ts` file

  ```ts
  const scoringType = z.enum(["Normal", "NEET"])
  ```

- Add your scoring type's calculation function to the `lib/utils.ts` file under the `getScore()` function
  ```ts
  case "Name":
      return correct
  ```
