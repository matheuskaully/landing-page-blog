import { Search as SearchIcon } from 'lucide-react'
import { useSearchParams, useRouter } from 'next/navigation'

import { ChangeEvent, FormEvent, useCallback } from 'react'

export function Search() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams?.get('q') ?? ''
  const hasQuery = !!searchParams?.has('q')

  const handleSearch = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      if (query.trim() === '') {
        return
      }
      router.push(`/blog?q=${encodeURIComponent(query)}`)
    },
    [query, router],
  )

  function handleQueryChange(e: ChangeEvent<HTMLInputElement>) {
    const newQuery = e.target.value

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, {
      scroll: false,
    })
  }

  return (
    <form
      onSubmit={handleSearch}
      className="group flex h-fit w-full items-center gap-3 rounded-lg px-4 py-2 ring-1 ring-gray-400 focus-within:ring-blue-200 md:w-fit"
    >
      <div>
        <SearchIcon
          className={'size-5 text-gray-300 group-focus-within:text-blue-200'}
        />
      </div>
      <input
        onChange={handleQueryChange}
        type="search"
        autoFocus={hasQuery}
        placeholder="Buscar..."
        className="bg-transparent text-gray-100 outline-none duration-200 placeholder:text-body-sm placeholder:text-gray-300"
      />
    </form>
  )
}
