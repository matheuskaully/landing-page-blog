import { ReactNode } from 'react'

interface AvatarContainerProps {
  children: ReactNode
}

export function AvatarContainer({ children }: AvatarContainerProps) {
  return <div className="flex items-center gap-2">{children}</div>
}
