import { Avatar } from '@/components/avatar'
import formatDate from '@/utils/format-date'
import Image from 'next/image'
import Link from 'next/link'

interface Author {
  name: string
  avatar: string
}

interface PostCardProps {
  slug: string
  title: string
  description: string
  image: string
  date: string
  author: Author
}

export function PostCard({
  author,
  date,
  description,
  image,
  slug,
  title,
}: PostCardProps) {
  const formattedDate = formatDate(date)
  const imageFormatted = decodeURIComponent(image)

  return (
    <Link
      href={`/blog/${slug}`}
      className="relative flex max-w-[368px] flex-col overflow-hidden rounded-xl border border-gray-400 bg-gray-600 p-3 duration-200 ease-in-out hover:scale-[1.01] hover:brightness-105"
    >
      <Image
        src={imageFormatted}
        alt={`Imagem do post ${title}`}
        className="h-40 w-full rounded-md object-cover"
        width={368}
        height={200}
      />
      <div className="absolute right-0 top-0 rounded-xl bg-gray-600 px-2.5 py-1.5">
        <span className="text-body-xs text-gray-300">{formattedDate}</span>
      </div>

      <div className="flex min-h-[160px] flex-1 flex-col justify-between px-2 pt-3">
        <div>
          <h3 className="line-clamp-2 text-heading-xs text-gray-100">
            {title}
          </h3>
          <p className="mt-2 line-clamp-3 text-body-xs text-gray-300">
            {description}
          </p>
        </div>

        <div className="mt-4">
          <div className="h-px w-full bg-gray-400" />
          <div className="mt-2 flex items-center gap-2">
            <Avatar.Container>
              <Avatar.Image src={author.avatar} alt={author.name} size="xs" />
              <Avatar.Title>{author.name}</Avatar.Title>
            </Avatar.Container>
          </div>
        </div>
      </div>
    </Link>
  )
}
