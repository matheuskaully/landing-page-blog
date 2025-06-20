import { Store } from 'lucide-react'
import bgCallToAction from '../../../public/background-call.png'
import CreateFreeStoreButton from '../ui/create-free-store-button'

export function CallToActionSection() {
  return (
    <section
      className="relative bg-cover bg-top bg-no-repeat py-24"
      style={{ backgroundImage: `url(${bgCallToAction.src})` }}
    >
      <div className="container flex flex-col items-center justify-center gap-10">
        <div className="absolute -top-9 rounded-full bg-cyan-300 p-5">
          <Store className="size-8 text-cyan-100" />
        </div>

        <h2 className="max-w-md text-center text-heading-xl text-gray-100">
          Crie uma loja online e inicie suas vendas ainda hoje
        </h2>
        <CreateFreeStoreButton />
      </div>
    </section>
  )
}
