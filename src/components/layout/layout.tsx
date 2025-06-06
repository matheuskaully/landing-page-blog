import { ReactNode } from 'react'
import { Header } from '../header'
import { Footer } from '../footer'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="dark relative flex min-h-screen flex-col">
      <Header />
      <main className="mb-12 flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}
