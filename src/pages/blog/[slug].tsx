import { Avatar } from '@/components/avatar'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import formatDate from '@/utils/format-date'
import { allPosts } from 'contentlayer/generated'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function PostPage() {
  const router = useRouter()
  const slug = router.query.slug as string
  const post = allPosts.find(
    (post) => post.slug.toLowerCase() === slug.toLowerCase(),
  )!
  const dateFormatted = post && formatDate(post?.date)

  const items = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post?.title ?? '', active: true },
  ]

  return (
    <main className="container py-10 text-gray-100 md:gap-14 md:py-12">
      <Breadcrumb items={items} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
        <article className="overflow-hidden rounded-lg border border-gray-400 bg-gray-600">
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            <Image
              src={post?.image ?? ''}
              alt={''}
              quality={100}
              priority
              fill
              className="object-cover"
            />
          </figure>
          <header className="p-4 pb-0 md:p-6 lg:p-12">
            <h1 className="mb-6 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
              {post?.title}
            </h1>

            <Avatar.Container>
              <Avatar.Image
                src={post?.author.avatar ?? ''}
                alt={`Imagem do autor ${post?.author.name}`}
              />
              <Avatar.Content>
                <Avatar.Title>{post?.author.name}</Avatar.Title>
                <Avatar.Description>
                  Publicado em {dateFormatted}
                </Avatar.Description>
              </Avatar.Content>
            </Avatar.Container>
          </header>
        </article>
        <aside>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eaque
          totam sapiente eveniet qui hic explicabo. Facere corporis aperiam
          nesciunt! Exercitationem quae suscipit ducimus accusamus vero tenetur
          tempora natus laborum?
        </aside>
      </div>
    </main>
  )
}
