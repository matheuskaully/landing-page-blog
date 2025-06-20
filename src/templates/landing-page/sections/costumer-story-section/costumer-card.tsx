import Image from 'next/image'

export interface CustomerTestimonial {
  name: string
  title: string
  description: string
  image: string
}

export function CostumerCard({
  description,
  image,
  name,
  title,
}: CustomerTestimonial) {
  return (
    <div className="flex flex-col justify-between gap-6 rounded-xl border border-gray-400 bg-gray-600 p-8 md:gap-10 md:p-10">
      <p className="text text-body-md italic text-gray-200">{description}</p>

      <div className="flex gap-3">
        <Image
          src={image}
          width={48}
          height={48}
          alt={`Foto da pessoa ${name}`}
        />

        <div className="flex flex-col">
          <p className="text-gray-200">{name}</p>
          <span className="text-xs text-gray-300">{title}</span>
        </div>
      </div>
    </div>
  )
}
