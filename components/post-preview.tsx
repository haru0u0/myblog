import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

type Props = {
  title: string
  emoji: string
  date: string
  slug: string
  tags: string[]
}

const PostPreview = ({
  title,
  emoji,
  date,
  slug,
  tags
}: Props) => {
  return (
    <div className="font-IBMjp transition ease-in-out delay-150 hover:translate-y-5 hover:shadow-[0px_0px_0px_rgba(0,0,0,0)] grid grid-cols-1 place-items-center w-full max-w-sm bg-myyellow border-4 border-black shadow-md rounded-lg dark:bg-gray-800 dark:border-gray-700 pt-5 pb-4">
      <div className="w-24 h-24 mb-3">
        <CoverImage slug={slug} title={title} emoji={emoji} />
      </div>
      <h3 className="m-4 text-xl font-bold text-center gray-900 dark:text-white">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <ul className="flex">
        {
          tags.map((tag) => <li className="font-bold mb-1 bg-mysky font-black border-2 border-black shadow-sm text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{tag}</li>)
        }
      </ul>
      <div className="text-sm text-black">
        <DateFormatter dateString={date} />
      </div>
    </div>
  )
}

export default PostPreview
