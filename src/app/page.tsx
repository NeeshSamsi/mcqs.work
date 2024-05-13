import Link from "next/link"
import {
  Calculator,
  List,
  ListOrdered,
  ListTodo,
  MoveRight,
  Sliders,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/FeatureCard"
import TestimonialCard from "@/components/TestimonialCard"
import Wrapper from "@/components/Wrapper"

export default function Home() {
  return (
    <Wrapper className="grid gap-24">
      <main className="lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance bg-gradient-to-br from-blue-600 via-blue-800 to-blue-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            Ace Your Exams with mcqs.work
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-balance sm:text-xl/relaxed">
            Your personal toolkit for mastering multiple-choice questions.
            Tailor your practice, track your progress, and triumph in your
            tests.
          </p>

          <Button
            asChild
            className="mx-auto mt-8 block w-full text-lg font-semibold sm:w-fit"
          >
            <Link href="/new">Start Your Session Now</Link>
          </Button>
        </div>
      </main>

      <section>
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Features to Boost Your MCQ Practice
          </h2>
          <p className="mt-4 max-w-[60ch] text-slate-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Sliders className="size-7" />}
            title="Customizable Range"
            description="Choosing your start and end points for your MCQ sessions. Align them with your preferred question bank."
          />
          <FeatureCard
            icon={<ListOrdered className="size-7" />}
            title="Choose Option Types"
            description="Select your preferred option format: A-D or 1-4. Practice with the layout you’re most comfortable with."
          />
          <FeatureCard
            icon={<Calculator className="size-7" />}
            title="Flexible Scoring Types"
            description="Opt for traditional +1 for correct answers, or explore complex calculations for Competitive Exams like NEET or JEE."
          />
          <FeatureCard
            icon={<List className="size-7" />}
            title="Ready-to-Use Inputs"
            description="Get pre-filled questions based on your selected range and options. Fill in your answers using your answer key."
          />
          <FeatureCard
            icon={<ListTodo className="size-7" />}
            title="Session Summary"
            description="Review your performance. See correct, wrong, and unanswered questions. Get a pre calculated score based on your chosen scoring type."
          />
        </div>
      </section>

      <section>
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Read trusted reviews from our customers
        </h2>

        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          <TestimonialCard
            name="Paul Starr"
            quote="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
          <TestimonialCard
            name="Paul Starr"
            quote="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad mollitia rerum quo unde
            neque atque molestias quas pariatur! Sint, maxime?"
          />
          <TestimonialCard
            name="Paul Starr"
            quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit esse delectus,
            maiores fugit, reiciendis culpa inventore sint accusantium libero dolore eos quasi a ex
            aliquam molestiae. Tenetur hic delectus maxime."
          />
          <TestimonialCard
            name="Paul Starr"
            quote="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus
            blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi
            quae atque perspiciatis?"
          />
          <TestimonialCard
            name="Paul Starr"
            quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, fuga?"
          />
          <TestimonialCard
            name="Paul Starr"
            quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum. Nobis laborum
            praesentium necessitatibus vero."
          />
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 rounded-lg bg-primary p-6 text-background shadow-lg sm:flex-row sm:justify-between">
        <strong className="text-xl">Ace Your Exams with mcqs.work!</strong>

        <Button
          variant="secondary"
          asChild
          className="flex items-center gap-2 text-lg"
        >
          <Link href="/new">
            <span>Start Session</span>
            <MoveRight strokeWidth={2} />
          </Link>
        </Button>
      </section>
    </Wrapper>
  )
}
