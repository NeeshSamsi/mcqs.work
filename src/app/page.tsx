import Link from "next/link"
import { MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/FeatureCard"
import TestimonialCard from "@/components/TestimonialCard"

export default function Home() {
  return (
    <div className="grid gap-24">
      <main className=" lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance bg-gradient-to-br from-blue-600 via-blue-800 to-blue-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            Understand User Flow. Increase Conversion.
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <Button
            asChild
            className="mx-auto mt-8 block w-full text-lg font-semibold sm:w-fit"
          >
            <Link href="/new">Get Started</Link>
          </Button>
        </div>
      </main>

      <section>
        <div className="max-w-[60ch]">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Kickstart your marketing
          </h2>
          <p className="mt-4 text-slate-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Digital campaigns"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium."
          />
          <FeatureCard
            title="Digital campaigns"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium."
          />
          <FeatureCard
            title="Digital campaigns"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium."
          />
          <FeatureCard
            title="Digital campaigns"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium."
          />
          <FeatureCard
            title="Digital campaigns"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium."
          />
          <FeatureCard
            title="Digital campaigns"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium."
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
        <strong className="text-xl">Make Your Next Career Move!</strong>

        <Button
          variant="secondary"
          asChild
          className="flex items-center gap-2 text-lg"
        >
          <Link href="/new">
            <span>Something</span>
            <MoveRight strokeWidth={2} />
          </Link>
        </Button>
      </section>
    </div>
  )
}
