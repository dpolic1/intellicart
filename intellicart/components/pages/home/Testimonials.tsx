/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6KBhKBw
 */
import { CardContent, CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"
import { testimonialsData } from "@/lib/constants"
import TestimonialCard from "./TestimonialCard"

export default function Testimonials() {
  return (
    testimonialsData.map((testimonial) => <TestimonialCard cardText={testimonial.cardText} />)
  )
}
