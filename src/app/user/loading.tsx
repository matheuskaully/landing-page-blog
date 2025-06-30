import { Skeleton } from '@/components/skeleton'

export default function LoadingUserPage() {
  return (
    <section className="container mt-20 flex flex-col gap-8">
      <Skeleton className="h-12 max-w-md rounded-full" />

      <Skeleton className="h-px w-full" />

      <div className="flex flex-col gap-2">
        {Array.from({ length: 5 }).map((_, index) => {
          return <Skeleton key={index} className="h-6 max-w-lg rounded-full" />
        })}
      </div>

      <Skeleton className="h-10 max-w-72 rounded-full" />
    </section>
  )
}
