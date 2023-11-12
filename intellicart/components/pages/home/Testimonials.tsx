import { testimonialsData } from "@/lib/constants";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <div className="mb-48 flex gap-5 overflow-x-auto pb-4 flex-nowrap">
      {testimonialsData.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          cardText={testimonial.cardText}
          cardPerson={testimonial.cardPerson}
        />
      ))}
    </div>
  );
}
