import { Search } from '@/components/search'
import { CallToActionSection } from '@/templates/landing-page/sections'
import { useRouter } from 'next/router'
import { PostGridCard } from './components/post-grid-card/post-grid-card'
import { PostCard } from './components/post-card'
import { allPosts } from 'contentlayer/generated'
import { Inbox } from 'lucide-react'

export function BlogList() {
  const router = useRouter()
  const query = router.query.q as string
  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : 'Dicas e estratégias para impulsionar seu negócio'
  const posts = query
    ? allPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLocaleLowerCase()),
      )
    : allPosts
  const hasPosts = posts.length > 0

  return (
    <section className="flex flex-col gap-14">
      <div className="container flex flex-col gap-10 py-10 md:gap-14 md:py-20">
        <header className="flex flex-col items-end justify-between gap-6 md:flex-row md:gap-0">
          <div className="flex flex-col gap-3">
            <span className="w-fit rounded-md bg-cyan-300 px-4 py-2 text-center text-body-tag font-light tracking-wider text-cyan-100 md:text-left">
              BLOG
            </span>

            <h1 className="max-w-2xl text-start text-heading-lg text-gray-100 md:text-balance md:text-left md:text-heading-xl">
              {pageTitle}
            </h1>
          </div>

          <Search />
        </header>

        <PostGridCard>
          {hasPosts &&
            posts.map((post) => (
              <PostCard
                key={post._id}
                title={post.title}
                date={post.date}
                author={{
                  avatar: post.author?.avatar,
                  name: post.author?.name,
                }}
                description={post.description}
                image={post.image}
                slug={post.slug}
              />
            ))}
        </PostGridCard>

        {!hasPosts && !query && (
          <div className="col-span-3 mx-auto flex min-h-[40vh] items-center text-center">
            <p className="flex flex-col items-center gap-2 text-gray-300">
              <Inbox className="size-8 text-cyan-100" />
              Nenhum post encontrado.
            </p>
          </div>
        )}

        {!hasPosts && query && (
          <div className="col-span-3 mx-auto flex min-h-[40vh] items-center text-center">
            <p className="flex flex-col items-center gap-2 text-gray-300">
              <Inbox className="size-8 text-cyan-100" />
              Não foi encontrado posts com a busca realizada!
            </p>
          </div>
        )}
      </div>

      <CallToActionSection />
    </section>
  )
}
