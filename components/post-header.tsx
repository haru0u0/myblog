import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Link from 'next/link';

type Props = {
  title: string
  emoji: string
  date: string
  tags: string[]
}

const PostHeader = ({ title, emoji, date, tags}: Props) => {
  return (
    <>
<div className="bg-white border-8 border-black shadow-md mt-4 m-1 sm:m-8 p-10">
      <div className="mb-3 md:mb-16 sm:mx-i4 flex justify-center">
        <CoverImage title={title} emoji={emoji} />
      </div>
      <PostTitle>{title}</PostTitle>
       <ul className="flex gap-x-2 justify-center">
       {
       tags.map((tag) => <li className="font-bold mb-4 bg-sky-600 text-white border-1 border-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"><Link href={`/tags/${tag}`}># {tag}</Link></li>)
       }
      </ul>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg flex justify-center">
          <DateFormatter dateString={date} />
        </div>
      </div>
</div>
    </>
  )
}

export default PostHeader
