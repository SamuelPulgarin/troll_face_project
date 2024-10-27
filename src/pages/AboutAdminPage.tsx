import TestimonialsSlider from "@/components/admin/TestimonialSlider"
import { Footer } from "@/components/common/Footer"
import { NavBar } from "@/components/common/NavBar"
import Particles from "@/components/home/Particles"


export const AboutAdminPage = () => {

  const testimonials = [
    {
      img: 'https://www.perkosis.com/uploads/staffs/big/9.jpg',
      quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
      name: 'Jessie J',
      role: 'Acme LTD'
    },
    {
      img: 'https://www.perkosis.com/uploads/staffs/big/9.jpg',
      quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
      name: 'Nick V',
      role: 'Malika Inc.'
    },
    {
      img: 'https://www.perkosis.com/uploads/staffs/big/9.jpg',
      quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
      name: 'Amelia W',
      role: 'Panda AI'
    }
  ]
  return (
    <>
      <NavBar />
      <TestimonialsSlider testimonials={testimonials} />
      <Particles className="absolute inset-0 pointer-events-none" quantity={50} />
      <Footer />
    </>
  )
}
