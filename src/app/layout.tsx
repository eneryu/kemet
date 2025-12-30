import type { Metadata } from 'next'
import { Noto_Kufi_Arabic } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  // ... (metadata content unchanged)
  title: {
    default: 'كيمت | رحلة عبر الحضارة المصرية',
    template: '%s | كيمت'
  },
  description: 'موقع تفاعلي يأخذك في رحلة ساحرة عبر الحضارة المصرية العريقة، من الأهرامات إلى العاصمة الإدارية الجديدة.',
  keywords: ['مصر', 'الحضارة المصرية', 'الأهرامات', 'تاريخ مصر', 'المتحف المصري', 'العاصمة الإدارية', 'كيمت'],
  authors: [{ name: 'Eneryu' }],
  openGraph: {
    title: 'كيمت | رحلة عبر الحضارة المصرية',
    description: 'استكشف عظمة مصر عبر العصور في تجربة بصرية فريدة',
    url: 'https://kemet-virid.vercel.app',
    siteName: 'كيمت',
    images: [
      {
        url: '/screenshots/kemet-home.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'كيمت | رحلة عبر الحضارة المصرية',
    description: 'استكشف عظمة مصر عبر العصور في تجربة بصرية فريدة',
    images: ['/screenshots/kemet-home.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1c1917',
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
        <Footer />
      </body>
    </html>
  )
} 