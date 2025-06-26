import { useCallback, useMemo } from 'react'
import {
  ShareConfig,
  SOCIAL_PROVIDERS,
  SocialProvider,
} from './social-providers'
import { useClipboard } from '../use-clipboard'
import { Copy, LinkIcon } from 'lucide-react'
import { toast } from 'sonner'

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number
}

export function useShare({
  text,
  title,
  url,
  clipboardTimeout = 2000,
}: UseShareProps) {
  const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout })
  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [text, title, url],
  )

  const share = useCallback(
    async (provider: SocialProvider) => {
      try {
        if (provider === 'clipboard') {
          return await handleCopy(url)
        }

        const providerConfig = SOCIAL_PROVIDERS[provider]

        if (!providerConfig) {
          throw new Error(`Provider não suportado: ${provider}`)
        }

        const shareUrl = providerConfig.shareUrl(shareConfig)
        const shareWindow = window.open(
          shareUrl,
          '_blank',
          'width=600,height=600,location=yes,status=yes',
        )

        return !!shareWindow
      } catch (error) {
        console.error(error)

        return false
      }
    },
    [shareConfig, handleCopy, url],
  )

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })),
      {
        provider: 'clipboard',
        name: isCopied ? (
          <span className="text-gray-300">Link copiado!</span>
        ) : (
          'Copiar link'
        ),
        icon: isCopied ? (
          <Copy className="size-4 text-gray-300" />
        ) : (
          <LinkIcon className="size-4" />
        ),
        action: () => {
          share('clipboard')
          toast.success('Link copiado!')
        },
      },
    ],
    [share, isCopied],
  )

  return { shareButtons }
}
