import { Avatar } from '@/components/avatar'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import formatDate from '@/utils/format-date'
import { allPosts } from 'contentlayer/generated'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Markdown } from '@/components/markdown'
import { Facebook, Linkedin, LinkIcon, Share2, Slack } from 'lucide-react'
import { ShareLink } from '@/components/share-link'
import { Button } from '@/components/ui/button'

export default function PostPage() {
  const router = useRouter()
  const slug = router.query.slug as string
  const post = allPosts.find((post) => post.slug === slug)!
  const dateFormatted = post && formatDate(post?.date)
  const avatarFormatted = post.author.avatar.trim()
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post?.title ?? '', active: true },
  ]

  return (
    <main className="container flex flex-col gap-8 py-8 text-gray-100 md:py-12">
      <Breadcrumb items={items} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
        <div className="flex items-center justify-end gap-2 md:hidden">
          <div className="flex items-center gap-2">
            <div>
              <Share2 className="size-3 text-gray-100" />
            </div>
            <span className="text-body-xs">Compartilhar</span>
          </div>
          <ShareLink icon={Linkedin} title="Linkedin" url="/" />
          <ShareLink icon={Facebook} title="Facebook" url="/" />
          <ShareLink icon={Slack} title="Slack" url="/" />
          <ShareLink
            icon={LinkIcon}
            title="Copiar link"
            url={`/blog/${post.slug}`}
          />
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
                  Publicado em <time dateTime={post.date}>{dateFormatted}</time>
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
            {[{ key: '1', providerName: 'LinkedIn' }].map((provider) => (
              <Button
                key={provider.key}
                variant="outline"
                className="w-full justify-start gap-2 rounded-lg px-3 py-2"
              >
                {provider.providerName}
              </Button>
            ))}
          </div>
        </aside>
      </div>
    </main>
  )
}
