import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CaseStudyHero from '@/components/work/amy-angus/CaseStudyHero'
import StatsBar from '@/components/work/amy-angus/StatsBar'
import Overview from '@/components/work/amy-angus/Overview'
import BeforeAfter from '@/components/work/amy-angus/BeforeAfter'
import Deliverables from '@/components/work/amy-angus/Deliverables'
import CaseStudyProcess from '@/components/work/amy-angus/CaseStudyProcess'
import CaseStudyCTA from '@/components/work/amy-angus/CaseStudyCTA'

export const metadata: Metadata = {
  title: 'Amy Angus Naturopathy - Case Study | Make It Media',
  description: 'Bespoke website for a Brisbane naturopath specialising in hormonal health. Custom-coded, editorial design, Simple Clinic integration, full blog system, and SEO foundations.',
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
        <CaseStudyCTA />
      </main>
      <Footer />
    </>
  )
}
