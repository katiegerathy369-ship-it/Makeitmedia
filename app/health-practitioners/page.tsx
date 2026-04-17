import type { Metadata } from 'next'
import PractitionersHero from '@/components/practitioners/PractitionersHero'
import PractitionersProblem from '@/components/practitioners/PractitionersProblem'
import PractitionersServices from '@/components/practitioners/PractitionersServices'
import PractitionersPortfolio from '@/components/practitioners/PractitionersPortfolio'
import PractitionersAbout from '@/components/practitioners/PractitionersAbout'
import PractitionersFAQ from '@/components/practitioners/PractitionersFAQ'
import PractitionersNewBusiness from '@/components/practitioners/PractitionersNewBusiness'
import PractitionersContact from '@/components/practitioners/PractitionersContact'
import ExitIntentModal from '@/components/practitioners/ExitIntentModal'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Health Practitioner Website Design | Make It Media',
  description:
    'Custom websites for naturopaths and health practitioners, built by a practitioner using AI tools for faster delivery and better SEO. Book a free call.',
}

export default function HealthPractitioners() {
  return (
    <>
      <Nav />
      <main>
        <PractitionersHero />
        <PractitionersProblem />
        <PractitionersServices />
        <PractitionersNewBusiness />
        <PractitionersPortfolio />
        <PractitionersAbout />
        <PractitionersFAQ />
        <PractitionersContact />
      </main>
      <Footer />
      <ExitIntentModal />
    </>
  )
}
