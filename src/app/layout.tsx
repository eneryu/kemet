import type { Metadata } from 'next'
import { Noto_Kufi_Arabic } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const notoKufiArabic = Noto_Kufi_Arabic({ 
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'كيمت | أرض الفراعنة',
  description: 'اكتشف عظمة الحضارة المصرية القديمة والحديثة',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={notoKufiArabic.className}>
        <Header />
        {children}
      </body>
    </html>
  )
} 