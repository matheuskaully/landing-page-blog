import { Avatar } from '@/components/avatar'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import formatDate from '@/utils/format-date'
import { Post } from 'contentlayer/generated'
import Image from 'next/image'
import { Markdown } from '@/components/markdown'
import { CallToActionSection } from '@/templates/landing-page/sections'
import { PostShare } from './components/post-share'

export interface PostPageProps {
  post: Post
}

export function PostPage({ post }: PostPageProps) {
  const dateFormatted = formatDate(post?.date)
  const avatarFormatted = post.author.avatar.trim()

  const postUrl = `https://site-set-today.vercel.app/blog/${post.slug}`

  const items = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post?.title ?? '', active: true },
  ]

  return (
    <>
      <main className="container flex flex-col gap-8 py-8 text-gray-100 md:py-12">
        <Breadcrumb items={items} />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
          <PostShare
            description={post.description}
            title={post.title}
            url={postUrl}
            smartphone={true}
          />
          <article className="overflow-hidden rounded-lg border border-gray-400 bg-gray-600">
            <figure className="relative aspect-[16/10] h-[145px] w-full overflow-hidden rounded-t-lg md:h-[265px]">
              <Image
                src={post.image}
                alt={''}
                quality={100}
                fill
                className="object-cover"
              />
            </figure>
            <header className="px-6 pb-0 pt-8 md:p-6 lg:p-12">
              <h1 className="mb-6 text-heading-md md:text-heading-xl lg:text-heading-xl">
                {post.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  size="sm"
                  src={avatarFormatted}
                  alt={`Imagem do autor ${post.author.name}`}
                />
                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em{' '}
                    <time dateTime={post.date}>{dateFormatted}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prove-invert max-w-none px-6 pt-8 md:p-12 md:pt-0">
              <Markdown content={post.body.raw} />
            </div>
          </article>
          <PostShare
            description={post.description}
            title={post.title}
            url={postUrl}
            smartphone={false}
          />
        </div>
      </main>
      <section className="pt-16">
        <CallToActionSection />
      </section>
    </>
  )
}
