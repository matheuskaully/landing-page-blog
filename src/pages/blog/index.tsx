import { Search } from '@/components/search'
import { CallToActionSection } from '@/templates/landing-page/sections'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <section className="flex flex-col gap-14">
      <div className="container flex flex-col gap-10 py-10 md:gap-14 md:py-20">
        <header className="flex flex-col items-end justify-between gap-6 md:flex-row md:gap-0">
          <div className="flex flex-col gap-3">
            <span className="w-fit rounded-md bg-cyan-300 px-4 py-2 text-center text-body-tag font-light tracking-wider text-cyan-100 md:text-left">
              BLOG
            </span>

            <h1 className="max-w-2xl text-start text-heading-lg text-gray-100 md:text-balance md:text-left md:text-heading-xl">
              Dicas e estratégias para impulsionar seu negócio
            </h1>
          </div>

          <Search />
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Link
              href={`/blog/post/${index + 1}`}
              key={index}
              className="relative max-w-[368px] overflow-hidden rounded-xl border border-gray-400 bg-gray-600 p-3"
            >
              <Image
                src="/assets/primeiro-post.png"
                alt="Imagem do post"
                className="h-40 w-full rounded-md object-cover"
                width={368}
                height={200}
              />
              <div className="absolute right-0 top-0 rounded-xl bg-gray-600 px-2 py-1">
                <span className="text-body-xs text-gray-300">20/12/2024</span>
              </div>

              <div className="flex flex-col justify-between gap-2 px-2 pt-3">
                <div>
                  <h3 className="line-clamp-2 text-heading-xs text-gray-100">
                    Transformando seu negócio em uma loja virtual
                  </h3>
                  <p className="mt-2 line-clamp-3 text-body-xs text-gray-300">
                    Se você está buscando uma maneira simples e eficaz de vender
                    seus produtos online, o Site.Set é a solução perfeita para
                    você. Criar uma loja virtual de sucesso nunca foi tão fácil.
                    Com nossa plataforma intuitiva, você pode criar um site
                    profissional para sua loja em minutos, sem precisar de
                    conhecimentos técnicos.
                  </p>
                </div>
                <div className="h-px w-full bg-gray-400" />
                <div className="flex items-center gap-2">
                  <Image
                    src="/Brand-icon.svg"
                    alt="Autor"
                    className="h-5 w-5 rounded-full border border-blue-200 object-cover"
                    width={20}
                    height={20}
                  />
                  <span className="text-body-xs text-gray-300">
                    Aspen Dokidis
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CallToActionSection />
    </section>
  )
}
