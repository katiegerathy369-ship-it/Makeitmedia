import type { Metadata } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import NourishNav from '@/components/work/concept-nutritionist/NourishNav'
import NourishHero from '@/components/work/concept-nutritionist/NourishHero'
import NourishPainStrip from '@/components/work/concept-nutritionist/NourishPainStrip'
import NourishServices from '@/components/work/concept-nutritionist/NourishServices'
import NourishAbout from '@/components/work/concept-nutritionist/NourishAbout'
import NourishTestimonial from '@/components/work/concept-nutritionist/NourishTestimonial'
import NourishProcess from '@/components/work/concept-nutritionist/NourishProcess'
import NourishContact from '@/components/work/concept-nutritionist/NourishContact'
import NourishFooter from '@/components/work/concept-nutritionist/NourishFooter'
import FallingBlueberries from '@/components/work/concept-nutritionist/FallingBlueberries'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans-nourish',
  display: 'swap',
})

// Zigzag clip-path strings — verbatim from prototype
const ZIGZAG = 'polygon(0% 0%, 2.5% 100%, 5% 0%, 7.5% 100%, 10% 0%, 12.5% 100%, 15% 0%, 17.5% 100%, 20% 0%, 22.5% 100%, 25% 0%, 27.5% 100%, 30% 0%, 32.5% 100%, 35% 0%, 37.5% 100%, 40% 0%, 42.5% 100%, 45% 0%, 47.5% 100%, 50% 0%, 52.5% 100%, 55% 0%, 57.5% 100%, 60% 0%, 62.5% 100%, 65% 0%, 67.5% 100%, 70% 0%, 72.5% 100%, 75% 0%, 77.5% 100%, 80% 0%, 82.5% 100%, 85% 0%, 87.5% 100%, 90% 0%, 92.5% 100%, 95% 0%, 97.5% 100%, 100% 0%, 100% 0%, 0% 0%)'
const ZIGZAG_REVERSE = 'polygon(0% 100%, 2.5% 0%, 5% 100%, 7.5% 0%, 10% 100%, 12.5% 0%, 15% 100%, 17.5% 0%, 20% 100%, 22.5% 0%, 25% 100%, 27.5% 0%, 30% 100%, 32.5% 0%, 35% 100%, 37.5% 0%, 40% 100%, 42.5% 0%, 45% 100%, 47.5% 0%, 50% 100%, 52.5% 0%, 55% 100%, 57.5% 0%, 60% 100%, 62.5% 0%, 65% 100%, 67.5% 0%, 70% 100%, 72.5% 0%, 75% 100%, 77.5% 0%, 80% 100%, 82.5% 0%, 85% 100%, 87.5% 0%, 90% 100%, 92.5% 0%, 95% 100%, 97.5% 0%, 100% 100%, 100% 100%, 0% 100%)'

export const metadata: Metadata = {
  title: 'Nourish & Co. - Nutritionist | Concept Design by Make It Media',
  description: 'A concept design for a Brisbane nutritionist. Retro-playful aesthetic with lemon palette, Fraunces typography, and full service site.',
}

export default function NourishPage() {
  return (
    <div className={`${fraunces.variable} ${dmSans.variable}`}>
      <NourishNav />
      <main>
        <NourishHero />
        {/* Green zigzag — hero → pain strip */}
        <div style={{ width: '100%', height: '28px', background: '#e8a882', clipPath: ZIGZAG, display: 'block' }} />
        <NourishPainStrip />
        {/* Reverse zigzag — pain strip → services */}
        <div style={{ width: '100%', height: '28px', background: '#e8a882', clipPath: ZIGZAG_REVERSE, display: 'block' }} />
        <NourishServices />
        <div style={{ position: 'relative' }}>
          <FallingBlueberries />
          <NourishAbout />
          <NourishTestimonial />
          <NourishProcess />
          <NourishContact />
        </div>
        {/* Scalloped bite edge above footer */}
        <div style={{ background: '#f5f0e8', lineHeight: 0, display: 'block' }}>
          <svg width="100%" viewBox="0 0 1440 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,40 L0,20 Q10,0 20,20 Q30,40 40,20 Q50,0 60,20 Q70,40 80,20 Q90,0 100,20 Q110,40 120,20 Q130,0 140,20 Q150,40 160,20 Q170,0 180,20 Q190,40 200,20 Q210,0 220,20 Q230,40 240,20 Q250,0 260,20 Q270,40 280,20 Q290,0 300,20 Q310,40 320,20 Q330,0 340,20 Q350,40 360,20 Q370,0 380,20 Q390,40 400,20 Q410,0 420,20 Q430,40 440,20 Q450,0 460,20 Q470,40 480,20 Q490,0 500,20 Q510,40 520,20 Q530,0 540,20 Q550,40 560,20 Q570,0 580,20 Q590,40 600,20 Q610,0 620,20 Q630,40 640,20 Q650,0 660,20 Q670,40 680,20 Q690,0 700,20 Q710,40 720,20 Q730,0 740,20 Q750,40 760,20 Q770,0 780,20 Q790,40 800,20 Q810,0 820,20 Q830,40 840,20 Q850,0 860,20 Q870,40 880,20 Q890,0 900,20 Q910,40 920,20 Q930,0 940,20 Q950,40 960,20 Q970,0 980,20 Q990,40 1000,20 Q1010,0 1020,20 Q1030,40 1040,20 Q1050,0 1060,20 Q1070,40 1080,20 Q1090,0 1100,20 Q1110,40 1120,20 Q1130,0 1140,20 Q1150,40 1160,20 Q1170,0 1180,20 Q1190,40 1200,20 Q1210,0 1220,20 Q1230,40 1240,20 Q1250,0 1260,20 Q1270,40 1280,20 Q1290,0 1300,20 Q1310,40 1320,20 Q1330,0 1340,20 Q1350,40 1360,20 Q1370,0 1380,20 Q1390,40 1400,20 Q1410,0 1420,20 Q1430,40 1440,20 L1440,40 Z"
              fill="#ffebae"
            />
          </svg>
        </div>
      </main>
      <NourishFooter />
    </div>
  )
}
