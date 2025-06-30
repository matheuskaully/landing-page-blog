import Link from 'next/link'
import { Logo } from '../../logo'
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-8 py-8 md:flex-row">
          <Logo />

          <nav className="flex flex-col items-center gap-4 text-sm text-blue-100 md:flex-row">
            <Link href={'/termos-de-uso'} className="hover:text-blue-200">
              Termos de Uso
            </Link>
            <Link
              href={'/politica-de-privacidade'}
              className="hover:text-blue-200"
            >
              Política de Privacidade
            </Link>
            <Link href={'/feedback'} className="hover:text-blue-200">
              Enviar Feedback
            </Link>

            <div className="flex flex-col rounded-xl border border-white/5 bg-gray-400 px-2 py-1 text-xs">
              <span className="tracking-wide">Coded by</span>
              <Link
                href="https://matheuskaully.site"
                className="flex items-center gap-1 font-semibold tracking-wide underline-offset-4 hover:underline"
                target="_blank"
              >
                Matheus Kaúlly
                <ArrowUpRight className="size-3" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}
