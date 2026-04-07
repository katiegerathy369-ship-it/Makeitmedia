import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import WorkHero from '@/components/work/WorkHero'
import WorkSection from '@/components/work/WorkSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Website Design Portfolio | Make It Media',
  description:
    'Custom websites built for Australian small businesses. See real client work across health, finance, real estate and more.',
}

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main>
        <WorkHero />
        <WorkSection />
      </main>
      <Footer />
    </>
  )
}
