'use client'

import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

interface ErrorBoundaryProps {
  error: Error
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="relative mb-6 inline-block">
          <AlertTriangle className="mx-auto size-16 text-gray-100" />

          <div className="absolute left-1/2 top-1/2 h-1 w-16 -translate-x-1/2 -translate-y-1/2 -rotate-12 transform bg-red-500 opacity-80" />
        </div>

        <h2 className="mb-2 text-heading-xl text-gray-100">
          Something went wrong!
        </h2>

        {error.message && (
          <p className="mb-2 max-h-24 overflow-hidden text-ellipsis px-4 text-body-md text-gray-200">
            {error.message}
          </p>
        )}

        <Button className="mt-4" onClick={reset}>
          Try again
        </Button>
      </div>
    </div>
  )
}
