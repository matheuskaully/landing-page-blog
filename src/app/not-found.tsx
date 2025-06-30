import Image from 'next/image'
import Link from 'next/link'
import notFoundImg from '../../public/404..svg'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center bg-gray-700 px-6 py-12 lg:flex-row">
      <div className="w-full text-center lg:w-1/2 lg:text-left">
        <div className="relative mb-3 inline-block font-sans">
          <span className="pr-4 text-lg font-bold tracking-widest text-gray-100">
            ERRO
          </span>
          <span className="inline-block -translate-x-1 -translate-y-2 -rotate-12 transform text-8xl font-bold text-white">
            4
          </span>
          <span className="inline-block text-8xl font-bold text-white">0</span>
          <span className="inline-block text-8xl font-bold text-white">4</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold text-gray-100">
          Página não encontrada
        </h1>
        <p className="mb-6 text-lg text-gray-300">
          Ops! A página que você está procurando não existe.
        </p>

        <div className="mb-8 mt-4 h-px w-full bg-gray-400" />

        <div className="flex gap-4">
          <Button
            variant={'default'}
            asChild
            className="inline-block rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 md:w-fit"
          >
            <Link href={'/'} className="flex items-center gap-2">
              <ArrowLeft className="size-5 text-gray-100" />
              <span>Voltar para a página inicial</span>
            </Link>
          </Button>

          <Button variant="secondary" asChild>
            <Link href="/blog?q=">
              <Search size={16} />
              Pesquisar posts
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-10 flex w-full justify-center lg:mt-0 lg:w-1/2">
        <Image
          src={notFoundImg}
          alt="Página não encontrada"
          className="h-auto max-w-full"
        />
      </div>
    </div>
  )
}
