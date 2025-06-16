import Link from 'next/link'
import { Logo } from '../logo'

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
          </nav>
        </div>
      </div>
    </footer>
  )
}
