import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { Layout } from '@/components/layout'
import { Toaster } from 'sonner'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Toaster richColors />
      <Component {...pageProps} />
    </Layout>
  )
}
