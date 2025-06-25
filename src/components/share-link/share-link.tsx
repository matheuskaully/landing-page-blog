import Link from 'next/link'
import { ElementType } from 'react'

interface ShareLinkProps {
  url: string
  icon: ElementType
  title: string
  asCopy?: boolean
}

export function ShareLink({ icon: Icon, title, url, asCopy }: ShareLinkProps) {
  if (asCopy) {
    return (
      <Link
        href={url}
        className="group flex w-fit items-center gap-2 rounded-lg border border-gray-400 px-3 py-3 duration-200 ease-in-out hover:border-blue-200 md:w-full md:px-5"
      >
        <div>
          <Icon className="size-4 text-gray-100 duration-200 ease-in-out group-hover:text-blue-200" />
        </div>
        <span className="hidden text-gray-200 duration-200 ease-in-out group-hover:text-blue-200 md:block">
          {title}
        </span>
      </Link>
    )
  } else {
    return (
      <Link
        href={url}
        className="group flex w-fit items-center gap-2 rounded-lg border border-gray-400 px-3 py-3 duration-200 ease-in-out hover:border-blue-200 md:w-full md:px-5"
      >
        <div>
          <Icon className="size-4 text-gray-100 duration-200 ease-in-out group-hover:text-blue-200" />
        </div>
        <span className="hidden text-gray-200 duration-200 ease-in-out group-hover:text-blue-200 md:block">
          {title}
        </span>
      </Link>
    )
  }
}
