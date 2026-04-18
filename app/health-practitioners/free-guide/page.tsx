import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import GuideHero from '@/components/practitioners/free-guide/GuideHero'
import GuideWhatsInside from '@/components/practitioners/free-guide/GuideWhatsInside'
import GuideAuthor from '@/components/practitioners/free-guide/GuideAuthor'
import GuideFAQ from '@/components/practitioners/free-guide/GuideFAQ'
import GuideClosingCTA from '@/components/practitioners/free-guide/GuideClosingCTA'

export const metadata: Metadata = {
  title: '5 Website Mistakes Costing Health Practitioners Clients | Free Guide',
  description:
    'Free PDF guide for Australian health practitioners. The 5 silent conversion killers on practice websites, and exactly how to fix them this weekend.',
  openGraph: {
    title: '5 Website Mistakes Costing Health Practitioners Clients',
    description:
      'Free PDF guide for naturopaths, nutritionists and health practitioners. Fix the 5 mistakes losing you bookings.',
    type: 'article',
  },
}

export default function FreeGuidePage() {
  return (
    <>
      <Nav />
      <main>
        <GuideHero />
        <GuideWhatsInside />
        <GuideAuthor />
        <GuideFAQ />
        <GuideClosingCTA />
      </main>
      <Footer />
    </>
  )
}
