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
<div className="font-bold bg-myyellow border-8 border-black shadow-md mt-4 md:m-8 p-10">
      <div className="mb-3 md:mb-16 sm:mx-i4 flex justify-center">
        <CoverImage title={title} emoji={emoji} />
      </div>
      <h1 className="text-2xl flex justify-center md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-8 text-center">{title}</h1>
       <ul className="flex gap-x-2 justify-center">
       {
       tags.map((tag) => <li className="transition ease-in-out delay-150 hover:translate-y-2 hover:shadow-[0px_0px_0px_rgba(0,0,0,0)] font-IBMjp mb-4 bg-mysky text-black shadow-sm border-2 border-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded"><Link href={`/tags/${tag}`}># {tag}</Link></li>)
       }
      </ul>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg flex justify-center font-IBMjp">
          <DateFormatter dateString={date} />
        </div>
      </div>
</div>
    </>
  )
}

export default PostHeader
