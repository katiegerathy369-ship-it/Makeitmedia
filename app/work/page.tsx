import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import WorkHero from '@/components/work/WorkHero'
import WorkSection from '@/components/work/WorkSection'
import Footer from '@/components/Footer'
import OtherWorkStrip from '@/components/work/OtherWorkStrip'

export const metadata: Metadata = {
  title: 'Naturopath Website Portfolio | Make It Media',
  description:
    'Real websites built for Australian health practitioners. See naturopath, nutritionist and health coach website examples.',
}

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main>
        <WorkHero />
        <WorkSection />
      </main>
      <OtherWorkStrip />
      <Footer />
    </>
  )
}
