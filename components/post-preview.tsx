import CoverImage from './cover-image'
import Link from 'next/link'

type Props = {
  title: string
  emoji: string
  date: string
  slug: string
  tag: string
}

const PostPreview = ({
  title,
  emoji,
  date,
  slug,
  tag
}: Props) => {
  return (
    <>
      <div className="bg-c2 font-IBMjp transition ease-in-out delay-150 hover:translate-y-5 hover:shadow-[0px_0px_0px_rgba(0,0,0,0)] grid grid-cols-1 w-full max-w-sm border-2 md:border-4 border-black shadow-sm md:shadow-md rounded-lg">
        <div className="w-full h-32 bg-white border-b-2 border-black rounded-t-lg">
          <div className="w-24 h-24 m-auto my-5">
            <CoverImage slug={slug} title={title} emoji={emoji} />
          </div>
        </div>
        <div className=" w-full h-full">
          <h3 className="m-5 text-xl font-bold text-center gray-900 dark:text-white">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
            >
              {title}
            </Link>
          </h3>
          <ul className="flex justify-center w-full">
            <li className="font-bold mb-1 bg-c3 font-black border-2 border-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded"># {tag}</li>
          </ul>
          <div className="flex justify-center w-full text-sm text-black mt-2">{date}</div>
        </div>
      </div>
    </>
  )
}

export default PostPreview