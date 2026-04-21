import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import MarqueeBanner from '@/components/MarqueeBanner'
import Services from '@/components/Services'
import StudentDiscount from '@/components/StudentDiscount'
import PortfolioPreview from '@/components/PortfolioPreview'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import CalSection from '@/components/CalSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MarqueeBanner />
        <Services />
        <StudentDiscount />
        <PortfolioPreview />
        <Process />
        <FAQ />
        <CalSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
