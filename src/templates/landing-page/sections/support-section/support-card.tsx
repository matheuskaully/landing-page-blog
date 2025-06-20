import { cn } from '@/lib/utils'
import { ElementType } from 'react'

interface SupportCardProps {
  title: string
  text: string
  icon: ElementType
  variant?: 'primary' | 'secondary'
}

export function SupportCard({
  icon: Icon,
  text,
  title,
  variant = 'primary',
}: SupportCardProps) {
  const containerClasses = cn(
    'flex flex-col gap-4 rounded-xl p-6',
    variant === 'primary' ? 'bg-blue-400' : 'bg-cyan-300',
  )

  const iconContainerClasses = cn(
    'flex size-9 items-center justify-center rounded-md',
    variant === 'primary' ? ' bg-blue-300' : 'bg-cyan-200',
  )

  return (
    <div className={containerClasses}>
      <div className={iconContainerClasses}>
        <Icon className="size-5 text-white" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-heading-sm text-gray-100">{title}</h2>
        <p className="text-body-md text-gray-200">{text}</p>
      </div>
    </div>
  )
}
