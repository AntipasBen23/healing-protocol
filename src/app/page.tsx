import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Positioning from '@/components/Positioning'
import Services from '@/components/Services'
import Journey from '@/components/Journey'
import Membership from '@/components/Membership'
import Corporate from '@/components/Corporate'
import Academy from '@/components/Academy'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import Booking from '@/components/Booking'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ScrollReveal from '@/components/ScrollReveal'

export default function Page() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Positioning />
        <Services />
        <Journey />
        <Membership />
        <Corporate />
        <Academy />
        <Products />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
