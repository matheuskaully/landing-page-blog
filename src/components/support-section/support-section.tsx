import { HeartHandshake, PaintbrushVertical, Store } from 'lucide-react'
import bgSupport from '../../../public/background.png'
import { SupportCard } from './support-card'

export function SupportSection() {
  return (
    <section
      style={{ backgroundImage: `url(${bgSupport.src})` }}
      className="bg-gradient-to-r from-gray-500 to-gray-700 bg-cover bg-center bg-no-repeat"
    >
      <div className="container my-32 flex flex-col gap-12 bg-contain bg-center">
        <h2 className="mx-auto max-w-[488px] text-center text-heading-xl text-gray-100">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <SupportCard
            icon={PaintbrushVertical}
            text={
              'Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara.'
            }
            title={'Personalize seu site'}
            variant="primary"
          />
          <SupportCard
            icon={Store}
            text={
              ' Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado.'
            }
            title={'Venda de qualquer loja'}
            variant="secondary"
          />
          <SupportCard
            icon={HeartHandshake}
            text={
              'Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.'
            }
            title={'Receba suporte amigável'}
            variant="primary"
          />
        </div>
      </div>
    </section>
  )
}
