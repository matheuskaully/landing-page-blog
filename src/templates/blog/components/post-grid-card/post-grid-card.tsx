import { ReactNode } from 'react'

interface PostGridCardProps {
  children: ReactNode
}

export function PostGridCard({ children }: PostGridCardProps) {
  return (
    <div className="mx-auto grid w-full grid-cols-1 gap-6 md:mx-0 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  )
}
