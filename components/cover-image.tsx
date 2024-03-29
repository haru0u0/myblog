import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import twemoji from 'twemoji'

type Props = {
  title: string
  emoji: string
  slug?: string
}

const CoverImage = ({ title, emoji, slug }: Props) => {
  const codePoint = twemoji.convert.toCodePoint(emoji);
  //const url = `https://twemoji.maxcdn.com/v/latest/svg/${codePoint.split('-')[0]}.svg`;
  const url = `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codePoint.split('-')[0]}.svg`;
  const image = (
    <Image
      src={url}
      alt={`Cover Image for ${title}`}
      className={cn('sm', {
        'hover:lg transition-shadow duration-200': slug,
      })}
      width={200}
      height={100}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
