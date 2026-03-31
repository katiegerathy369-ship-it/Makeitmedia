import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CaseStudyHero from '@/components/work/amy-angus/CaseStudyHero'
import StatsBar from '@/components/work/amy-angus/StatsBar'
import Overview from '@/components/work/amy-angus/Overview'
import BeforeAfter from '@/components/work/amy-angus/BeforeAfter'
import Deliverables from '@/components/work/amy-angus/Deliverables'
import CaseStudyProcess from '@/components/work/amy-angus/CaseStudyProcess'
import Testimonial from '@/components/work/amy-angus/Testimonial'
import CaseStudyCTA from '@/components/work/amy-angus/CaseStudyCTA'

export const metadata: Metadata = {
  title: 'Amy Angus Naturopathy — Case Study | Make It Media',
  description: 'A complete digital rebuild for a Brisbane naturopath — custom website, brand identity, Simple Clinic integration and SEO foundations.',
}

export default function AmyAngusPage() {
  return (
    <>
      <Nav />
      <main>
        <CaseStudyHero />
        <StatsBar />
        <Overview />
        <BeforeAfter />
        <Deliverables />
        <CaseStudyProcess />
        <Testimonial />
        <CaseStudyCTA />
      </main>
      <Footer />
    </>
  )
}
