import Link from 'next/link'
import { Button } from '../../ui/button'
import ActiveLink from '../../active-link/active-link'
import { Logo } from '../../logo'

export function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/[0.01] fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="flex items-center gap-6">
            <ActiveLink href={'/'}>Início</ActiveLink>
            <ActiveLink href={'/blog'}>Blog</ActiveLink>
            <Button variant={'secondary'} asChild>
              <Link href={'/'}>Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
