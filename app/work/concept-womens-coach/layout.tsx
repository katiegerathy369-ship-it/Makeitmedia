import { Lora, Raleway } from 'next/font/google'
import styles from '@/components/work/she-thrives/she-thrives.module.css'

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})
const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'She Thrives Co. - Concept by Make It Media',
  description:
    "Women's naturopathy-led wellness retreat concept site designed by Make It Media.",
}

export default function SheThrivesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${lora.variable} ${raleway.variable} ${styles.sheThrivesRoot}`}>
      {children}
    </div>
  )
}
