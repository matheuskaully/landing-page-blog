import React from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
  label: string
  href?: string
  active?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      className={cn(
        'text-muted-foreground flex items-center text-sm',
        className,
      )}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && (
            <ChevronRight className="text-muted-foreground mx-2 h-4 w-4" />
          )}
          {item.href && !item.active ? (
            <Link
              href={item.href}
              className="hover:text-foreground transition-colors hover:text-blue-200"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium text-blue-200 underline underline-offset-4">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}
