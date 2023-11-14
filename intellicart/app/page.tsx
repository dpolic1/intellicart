import ContactForm from '@/components/pages/home/ContactForm'
import HeroSection from '@/components/pages/home/HeroSection'
import OneLiner from '@/components/pages/home/OneLiner'
import Testimonials from '@/components/pages/home/Testimonials'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="min-h-screen p-5 md:p-8 xl:p-24">
      <HeroSection />
      <OneLiner />
      <Testimonials />
      <ContactForm />
    </main>
  )
}
