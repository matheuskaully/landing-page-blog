import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/Brand-Logo.svg'

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <Link href={'/'}>
            <Image src={logo} alt="site.set" width={116} height={32} />
          </Link>

          <nav className="flex">
            <Link href={'/'}>Termos de Uso</Link>
            <Link href={'/'}>Política de Privacidade</Link>
            <Link href={'/'}>Enviar F eedback</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
