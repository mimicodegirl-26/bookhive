import HeroSection from '@/components/home/HeroSection'
import FeaturedBooks from '@/components/home/FeaturedBooks'
import PopularCategories from '@/components/home/PopularCategories'
import LatestBooks from '@/components/home/LatestBooks'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedBooks />
      <PopularCategories />
      <LatestBooks />
      <Testimonials />
      <CTASection />
    </>
  )
}