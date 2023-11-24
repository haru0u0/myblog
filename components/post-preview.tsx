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
    <div className="grid grid-cols-1 place-items-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pt-5 pb-4">
      <div className="w-24 h-24 mb-3">
        <CoverImage slug={slug} title={title} emoji={emoji} />
      </div>
      <h3 className="mb-4 text-xl font-medium text-center gray-900 dark:text-white">
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
       tags.map((tag) => <li className="font-bold mb-1 bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">{tag}</li>)
       }
       </ul>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        <DateFormatter dateString={date} />
      </div>
    </div>
  )
}

export default PostPreview
