import { ReactNode } from 'react'

interface AvatarDescriptionProps {
  children: ReactNode
}

export function AvatarDescription({ children }: AvatarDescriptionProps) {
  return <div className="text-body-xs text-gray-300">{children}</div>
}
