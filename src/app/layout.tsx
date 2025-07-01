import { Layout } from '@/components/layout'
import '@/styles/globals.css'

export const metadata = {
  title: 'Site.Set',
  description: 'Venda seus produtos como afiliado em um único lugar!',
  openGraph: {
    title: 'Site.Set',
    url: 'https://site-set-today.vercel.app/og-image.jpg',
    siteName: 'Site.Set',
    description: 'Venda seus produtos como afiliado em um único lugar!',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://site-set-today.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.Set',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
