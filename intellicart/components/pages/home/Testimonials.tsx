
import { testimonialsData } from "@/lib/constants"
import TestimonialCard from "./TestimonialCard"

export default function Testimonials() {
  return (
    testimonialsData.map((testimonial) => <TestimonialCard cardText={testimonial.cardText} />)
  )
}
