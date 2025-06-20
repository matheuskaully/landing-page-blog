import CreateFreeStoreButton from '@/components/ui/create-free-store-button'
import { Store } from 'lucide-react'

export function CallToActionSection() {
  return (
    <section className="relative bg-cover bg-top bg-no-repeat py-24">
      <div className="absolute inset-0 bg-[url(/background-call.png)] bg-cover bg-top bg-no-repeat md:block" />
      <div className="container relative flex flex-col items-center justify-center gap-10">
        <div className="absolute -top-[132px] rounded-full bg-cyan-300 p-5">
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
