import { AtSign, Facebook, Linkedin, Slack, Twitter } from 'lucide-react'

export type ShareConfig = {
  url: string
  title?: string
  text?: string
}

export type SocialProvider =
  | 'linkedin'
  | 'facebook'
  | 'facebook'
  | 'twitter'
  | 'threads'
  | 'clipboard'

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: 'Linkedin',
    icon: <Linkedin className="size-4" />,

    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`,
  },
  facebook: {
    name: 'Facebook',
    icon: <Facebook className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        config.url,
      )}`,
  },
  slack: {
    name: 'Slack',
    icon: <Slack className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(
        config.url,
      )}&text=${encodeURIComponent(config.title || '')}`,
  },
  twitter: {
    name: 'Twitter',
    icon: <Twitter className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://x.com/intent/tweet?url=${encodeURIComponent(
        config.url,
      )}&text=${encodeURIComponent(config.title || '')}`,
  },
  threads: {
    name: 'Threads',
    icon: <AtSign className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://threads.net/intent/post?text=${encodeURIComponent(
        `${config.title || ''} ${config.url}`,
      )}`,
  },
}
