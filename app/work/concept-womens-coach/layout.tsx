import { Rozha_One, Lato } from 'next/font/google'
import styles from '@/components/work/she-thrives/she-thrives.module.css'

const rozha = Rozha_One({ weight: '400', subsets: ['latin'], variable: '--font-display' })
const lato = Lato({ weight: ['300', '400', '700'], subsets: ['latin'], variable: '--font-body' })

export const metadata = {
  title: 'She Thrives Co. — Concept by Make It Media',
  description:
    "Women's health coaching concept site designed by Make It Media.",
}

export default function SheThrivesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${rozha.variable} ${lato.variable} ${styles.sheThrivesRoot}`}>
      {children}
    </div>
  )
}
