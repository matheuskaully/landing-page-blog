import { cn } from '@/lib/utils'
import { Search as SearchIcon } from 'lucide-react'
import { useState } from 'react'

export function Search() {
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <div
      className={cn(
        'group flex h-fit w-full items-center gap-3 rounded-lg border px-4 py-2 focus-within:border-blue-200 md:w-fit',
        searchQuery.length > 0 ? 'border-blue-200' : 'border-gray-400',
      )}
    >
      <div>
        <SearchIcon
          className={
            (cn('size-4 group-focus-within:border-blue-200'),
            searchQuery.length > 0 ? 'text-blue-200' : 'text-gray-300')
          }
        />
      </div>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="search"
        placeholder="Buscar..."
        className="bg-transparent text-gray-100 outline-none placeholder:text-gray-300"
      />
    </div>
  )
}
