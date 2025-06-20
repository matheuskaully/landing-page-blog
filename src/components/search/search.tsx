import { cn } from '@/lib/utils'
import { Search as SearchIcon } from 'lucide-react'
import { useState } from 'react'

export function Search() {
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <div
      className={cn(
        'group flex h-fit w-full items-center gap-3 rounded-lg px-4 py-2 ring-1 focus-within:ring-blue-200 md:w-fit',
        searchQuery.length > 0 ? 'ring-blue-200' : 'ring-gray-400',
      )}
    >
      <div>
        <SearchIcon
          className={'size-5 text-gray-300 group-focus-within:text-blue-200'}
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
