import { HeartHandshake, PaintbrushVertical, Store } from 'lucide-react'
import bgSupport from '../../../public/background.png'

export function SupportSection() {
  return (
    <section
      style={{ backgroundImage: `url(${bgSupport.src})` }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <div className="container my-32 flex flex-col gap-12 bg-contain bg-center">
        <h2 className="mx-auto max-w-[488px] text-center text-heading-xl text-gray-100">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-xl bg-blue-400 p-6">
            <div className="flex size-9 items-center justify-center rounded-md bg-blue-300">
              <PaintbrushVertical className="size-5 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-heading-sm text-gray-100">
                Personalize seu site
              </h2>
              <p className="text-body-md text-gray-200">
                Adicione sua logo, favicon, cores no seu catalago e tenha tudo
                com a sua cara.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-xl bg-cyan-300 p-6">
            <div className="flex size-9 items-center justify-center rounded-md bg-cyan-200">
              <Store className="size-5 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-heading-sm text-gray-100">
                Venda de qualquer loja
              </h2>
              <p className="text-body-md text-gray-200">
                Não importa a loja, o Site.Set permite que você insera qualquer
                link de afiliado.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-xl bg-blue-400 p-6">
            <div className="flex size-9 items-center justify-center rounded-md bg-blue-300">
              <HeartHandshake className="size-5 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-heading-sm text-gray-100">
                Receba suporte amigável
              </h2>
              <p className="text-body-md text-gray-200">
                Nossa equipe estará sempre pronta para te atender para ajudar no
                que for preciso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
