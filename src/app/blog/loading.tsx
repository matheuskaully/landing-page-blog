import { Skeleton } from '@/components/skeleton'
import { PostGridCard } from '@/templates/blog/components/post-grid-card'

export default function LoadingPageBlog() {
  return (
    <section className="mt-20 space-y-32">
      <div className="container flex flex-col gap-16 text-heading-hg text-gray-100">
        <div className="flex flex-col gap-6">
          <Skeleton className="h-6 w-20 rounded-md" />

          <div className="flex w-full flex-col justify-between space-y-4 md:flex-row">
            <div className="flex w-full flex-col gap-2">
              <Skeleton className="h-6 w-full rounded-md md:max-w-sm" />
              <Skeleton className="h-6 w-full rounded-md md:max-w-sm" />
            </div>

            <Skeleton className="h-10 w-full rounded-md md:max-w-xs" />
          </div>
        </div>
        <PostGridCard>
          {Array.from({ length: 6 }).map((_, index) => {
            return <Skeleton key={index} className="h-80 w-full rounded-lg" />
          })}
        </PostGridCard>
      </div>
      <Skeleton className="h-[348px] w-full" />
    </section>
  )
}
