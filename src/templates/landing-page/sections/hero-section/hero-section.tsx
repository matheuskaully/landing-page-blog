import Image from 'next/image'

import heroImg from '../../../../../public/hero-section.svg'

import { Clock, Store } from 'lucide-react'
import CreateFreeStoreButton from '@/components/ui/create-free-store-button'

export function HeroSection() {
  return (
    <section className="container relative flex items-center justify-center">
      <div className="grid min-h-[20rem] grid-cols-1 items-center gap-8 pb-16 pt-8 md:h-[36rem] md:grid-cols-2 md:py-0">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start md:gap-8 lg:items-start">
          <h1 className="font-alt text-center text-heading-hg text-gray-100 md:text-left">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Clock className="h-4 w-4 text-cyan-100" />
                <span className="text-gray-200">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm md:text-base">
                <Store className="h-4 w-4 text-cyan-100" />
                <span className="text-gray-200">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center gap-2 text-white md:items-start lg:items-start">
              <CreateFreeStoreButton />

              <p className="text-body-xs text-gray-300">
                Não precisa de cartão de crédito
              </p>
            </div>
          </div>
        </div>

        <div className="relative order-first hidden h-[20rem] items-center justify-center md:order-last md:flex md:h-full lg:flex">
          <Image
            src={heroImg}
            alt="Ilustração com ícones de store, tag e sacola"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
