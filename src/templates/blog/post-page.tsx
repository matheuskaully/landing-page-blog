import { Avatar } from '@/components/avatar'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import formatDate from '@/utils/format-date'
import { Post } from 'contentlayer/generated'
import Image from 'next/image'
import { Markdown } from '@/components/markdown'
import { Share2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/skeleton'
import { useShare } from '@/hooks/use-share'
import { CallToActionSection } from '@/templates/landing-page/sections'

export interface PostPageProps {
  post: Post
}

export function PostPage({ post }: PostPageProps) {
  const dateFormatted = formatDate(post?.date)
  const avatarFormatted = post.author.avatar.trim()

  const postUrl = `https://site.set/blog/${post.slug}`

  const { shareButtons } = useShare({
    url: postUrl,
    title: post?.title,
    text: post?.description,
  })

  const items = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post?.title ?? '', active: true },
  ]

  return (
    <>
      <main className="container flex flex-col gap-8 py-8 text-gray-100 md:py-12">
        <Breadcrumb items={items} />

        {post ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
            <div className="flex items-center justify-end gap-2 md:hidden">
              <div className="flex items-center gap-2">
                <div>
                  <Share2 className="size-3.5 text-gray-100 md:size-3" />
                </div>
                <span className="hidden text-body-xs md:flex">
                  Compartilhar
                </span>
                <span className="text-body-xs md:hidden">Comp.</span>
              </div>
              {shareButtons.map((provider) => {
                return (
                  <Button
                    key={provider.provider}
                    onClick={() => provider.action()}
                    variant="outline"
                    className="w-full justify-center gap-2 rounded-lg md:justify-start"
                    size={'sharedButton'}
                  >
                    {provider.icon}
                    <span className="hidden md:flex">{provider.name}</span>
                  </Button>
                )
              })}
            </div>
            <article className="overflow-hidden rounded-lg border border-gray-400 bg-gray-600">
              <figure className="relative aspect-[16/10] h-[145px] w-full overflow-hidden rounded-t-lg md:h-[265px]">
                <Image
                  src={post?.image ?? ''}
                  alt={''}
                  quality={100}
                  fill
                  className="object-cover"
                />
              </figure>
              <header className="px-6 pb-0 pt-8 md:p-6 lg:p-12">
                <h1 className="mb-6 text-heading-md md:text-heading-xl lg:text-heading-xl">
                  {post?.title}
                </h1>

                <Avatar.Container>
                  <Avatar.Image
                    size="sm"
                    src={avatarFormatted ?? ''}
                    alt={`Imagem do autor ${post?.author.name}`}
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
            <aside className="hidden flex-col gap-5 md:flex">
              <div className="flex items-center gap-2">
                <div>
                  <Share2 className="size-5 text-gray-100" />
                </div>
                <h2 className="text-heading-xs text-gray-100">Compartilhar</h2>
              </div>

              <div className="flex flex-col gap-2">
                {shareButtons.map((provider) => {
                  return (
                    <Button
                      key={provider.provider}
                      onClick={() => provider.action()}
                      variant="outline"
                      className="w-full justify-start gap-2 rounded-lg"
                      size={'sharedButton'}
                    >
                      {provider.icon}
                      {provider.name}
                    </Button>
                  )
                })}
              </div>
            </aside>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
            <div className="flex items-center justify-end gap-2 md:hidden">
              <div className="flex items-center gap-2">
                <div>
                  <Share2 className="size-3 text-gray-100" />
                </div>
                <span className="text-body-xs">Compartilhar</span>
              </div>
              <Skeleton className="rounded-lg p-3" />
              <Skeleton className="rounded-lg p-3" />
              <Skeleton className="rounded-lg p-3" />
              <Skeleton className="rounded-lg p-3" />
            </div>
            <article className="flex flex-col gap-6 overflow-hidden rounded-lg bg-gray-600">
              <figure className="relative aspect-[16/10] h-[140px] w-full overflow-hidden rounded-t-lg md:h-[265px]">
                <Skeleton className="rounded-lg" />
              </figure>

              <Skeleton className="h-[520px] w-full rounded-lg" />
            </article>
            <aside className="hidden flex-col gap-5 md:flex">
              <div className="flex items-center gap-2">
                <div>
                  <Share2 className="size-5 text-gray-100" />
                </div>
                <h2 className="text-heading-xs text-gray-100">Compartilhar</h2>
              </div>

              <div className="flex flex-col gap-2">
                {Array.from({ length: 5 }).map((_, index) => {
                  return (
                    <Skeleton key={index} className="h-10 w-full rounded-lg" />
                  )
                })}
              </div>
            </aside>
          </div>
        )}
      </main>
      <section className="pt-16">
        <CallToActionSection />
      </section>
    </>
  )
}
