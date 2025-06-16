import { ReactNode } from 'react'
import { Header } from '../header'
import { Footer } from '../footer'
import { Inter } from 'next/font/google'

type LayoutProps = {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
})

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.className} relative flex min-h-screen flex-col bg-gray-700`}
    >
      <Header />
      <main className="mb-12 flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}
