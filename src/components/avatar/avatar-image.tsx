import Image, { ImageProps } from 'next/image'

type AvatarImageProps = ImageProps

export function AvatarImage({
  src,
  alt,
  height = 40,
  width = 40,
  ...rest
}: AvatarImageProps) {
  return <Image {...rest} src={src} alt={alt} height={height} width={width} />
}
