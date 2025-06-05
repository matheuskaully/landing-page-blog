import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

type ActiveLinkProps = {
  children: ReactNode
} & LinkProps

export default function ActiveLink({
  children,
  href,
  ...rest
}: ActiveLinkProps) {
  const router = useRouter()
  const isCurrentPath =
    router.asPath === href ||
    router.asPath.startsWith(String(rest.as)) ||
    router.asPath === rest.as

  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-blue-600',
        isCurrentPath ? 'text-blue-500' : 'text-[#9CA3AF]',
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}
