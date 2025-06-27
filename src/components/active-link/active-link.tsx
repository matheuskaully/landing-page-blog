'use client'

import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type ActiveLinkProps = {
  children: ReactNode
} & LinkProps

export default function ActiveLink({
  children,
  href,
  ...rest
}: ActiveLinkProps) {
  const pathname = usePathname()
  const linkPath = typeof href === 'string' ? href : href.pathname
  const isActive = pathname === linkPath || pathname?.startsWith(`${linkPath}/`)

  return (
    <Link
      href={href}
      className={cn(
        'text-action-sm transition-colors hover:text-blue-600',
        isActive ? 'text-blue-200' : 'text-gray-100',
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}
