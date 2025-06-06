import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/Brand-Logo.svg'

export function Logo() {
  return (
    <Link href={'/'} title="Página inicial">
      <Image src={logo} width={116} height={32} alt="site.set" />
    </Link>
  )
}
