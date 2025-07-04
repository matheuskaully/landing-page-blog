import { ReactNode } from 'react'

interface AvatarTitleProps {
  children: ReactNode
}

export function AvatarTitle({ children }: AvatarTitleProps) {
  return <strong className="text-body-sm text-gray-200">{children}</strong>
}
