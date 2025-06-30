import { Button } from '@/components/ui/button'
import { allPosts, Post } from 'contentlayer/generated'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

async function UserList() {
  const allAuthors: Post[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(allPosts)
    }, 2000)
  })

  return (
    <div className="text-gray-100">
      <ul className="list-inside list-decimal">
        {allAuthors.map((user: Post) => (
          <li key={user._id}>{user.author.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default function UserListPage() {
  return (
    <section className="container mt-20 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-heading-hg text-gray-100">Lista de criadores</h2>
        <span className="text-body-xs text-gray-300">
          (Encontre todos os autores dos posts do blog na listagem a seguir)
        </span>
      </div>

      <div className="h-px w-full bg-gray-400" />

      <div>
        {/* Como UserList é async, precisa ser chamada corretamente */}
        {/* Pode usar suspense ou transformar a página toda em async */}
        <UserList />
      </div>

      <Button asChild className="w-fit rounded-full">
        <Link href={'/'} className="flex items-center gap-2">
          <ArrowLeft className="size-5 text-gray-100" />
          <span>Voltar para página inicial</span>
        </Link>
      </Button>
    </section>
  )
}
