import Link from 'next/link'
import { Button } from './button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CreateFreeStoreButtonProps {
  className?: string
}

export default function CreateFreeStoreButton({
  className,
}: CreateFreeStoreButtonProps) {
  return (
    <Button className={cn('w-fit rounded-full', className)} asChild>
      <Link href="/criar-loja">
        Criar loja grátis
        <ArrowRight />
      </Link>
    </Button>
  )
}
