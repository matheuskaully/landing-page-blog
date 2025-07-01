import { BlogList } from '@/templates/blog'
import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Dicas e estratégias para impulsionar seu negócio',
  robots: 'index, follow',
  openGraph: {
    title: 'Blog',
    url: 'https://site-set-today.vercel.app/og-image.jpg',
    description: 'Dicas e estratégias para impulsionar seu negóci',
    siteName: 'Site.Set',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://site-set-today.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.Set',
      },
    ],
  },
}

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
