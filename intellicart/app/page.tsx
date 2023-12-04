import ContactForm from '@/components/pages/home/ContactForm'
import HeroSection from '@/components/pages/home/HeroSection'
import ImageGallery, { TGalleryImage } from '@/components/pages/home/ImageGallery'
import OneLiner from '@/components/pages/home/OneLiner'
import Testimonials from '@/components/pages/home/Testimonials'
import Image from 'next/image'

const images:TGalleryImage[] = [
  {
    src: 'https://img.freepik.com/premium-photo/ai-generated-illustration-special-design-shopping-cart_441362-3497.jpg?w=2000',
    alt: 'Image 1'
  },
  {
    src: "https://cdn.pixabay.com/photo/2023/06/29/10/12/ai-generated-8096114_1280.jpg",
    alt: "Image 2"
  },
  {
    src: "https://thumbs.dreamstime.com/b/retail-store-shopping-cart-buying-indoors-basket-close-up-business-food-generated-ai-retail-store-shopping-cart-buying-indoors-294085285.jpg",
    alt: "Image 3"
  },
  {
    src: "https://img.freepik.com/premium-photo/shopping-offers-online-clothes-store-ai-generated-illustration_145713-8034.jpg",
    alt: "Image 4"
  },
  {
    src: "https://as1.ftcdn.net/v2/jpg/05/82/08/64/1000_F_582086450_LvouBk3yEYLw5y6hfmDaIv5kWREo2ps0.jpg",
    alt: "Image 5"
  }
]

export default function HomePage() {
  return (
    <main className="min-h-screen p-5 md:p-8 xl:p-24">
      <HeroSection />
      <OneLiner />
      <ImageGallery images={images} />
      <Testimonials />
      <ContactForm />
    </main>
  )
}
