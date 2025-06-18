import { CostumerCard } from './costumer-card'

const costumerStories = [
  {
    id: 1,
    name: 'Annabelle Smith',
    title: 'CEO na Anne Corp',
    description:
      'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos. A',
    image: '/customer-01.png',
  },
  {
    id: 2,
    name: 'Jackie Johnson',
    title: 'CEO na JJ Org',
    description:
      'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!',
    image: '/customer-02.png',
  },
]

export function CustomerStorySection() {
  return (
    <section className="container my-32 flex flex-col gap-12">
      <h2 className="text-center text-heading-xl text-gray-100">
        Quem utiliza, aprova!
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {costumerStories.map(({ description, id, image, name, title }) => {
          return (
            <CostumerCard
              key={id}
              description={description}
              image={image}
              name={name}
              title={title}
            />
          )
        })}
      </div>
    </section>
  )
}
