import { BlogList } from '@/templates/blog'
import { allPosts } from 'contentlayer/generated'

function fakeDelay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function BlogListPage() {
  await fakeDelay(500)

  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return <BlogList posts={sortedPosts} />
}
