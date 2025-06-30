'use client'

import { Button } from '@/components/ui/button'
import { useShare } from '@/hooks/use-share'
import { Share2 } from 'lucide-react'

interface PostShareProps {
  url: string
  title: string
  description: string
  smartphone: boolean
}

export function PostShare({
  description,
  title,
  url,
  smartphone,
}: PostShareProps) {
  const { shareButtons } = useShare({
    url,
    title,
    text: description,
  })

  if (!smartphone) {
    return (
      <aside className="hidden flex-col gap-5 md:flex">
        <div className="flex items-center gap-2">
          <div>
            <Share2 className="size-5 text-gray-100" />
          </div>
          <h2 className="text-heading-xs text-gray-100">Compartilhar</h2>
        </div>

        <div className="flex flex-col gap-2">
          {shareButtons.map((provider) => {
            return (
              <Button
                key={provider.provider}
                onClick={() => provider.action()}
                variant="outline"
                className="w-full justify-start gap-2 rounded-lg"
                size={'sharedButton'}
              >
                {provider.icon}
                {provider.name}
              </Button>
            )
          })}
        </div>
      </aside>
    )
  } else {
    return (
      <div className="flex items-center justify-end gap-2 md:hidden">
        <div className="flex items-center gap-2">
          <div>
            <Share2 className="size-3.5 text-gray-100 md:size-3" />
          </div>
          <span className="hidden text-body-xs md:flex">Compartilhar</span>
          <span className="text-body-xs md:hidden">Comp.</span>
        </div>
        {shareButtons.map((provider) => {
          return (
            <Button
              key={provider.provider}
              onClick={() => provider.action()}
              variant="outline"
              className="w-full justify-center gap-2 rounded-lg md:justify-start"
              size={'sharedButton'}
            >
              {provider.icon}
              <span className="hidden md:flex">{provider.name}</span>
            </Button>
          )
        })}
      </div>
    )
  }
}
