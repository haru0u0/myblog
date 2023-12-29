import markdownStyles from './markdown-styles.module.css'
import { Button } from 'flowbite-react';

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <>
      <div className="rounded-lg znc font-IBMjp border-2 md:border-4 border-black bg-white p-4 md:p-10 mt-4 md:m-8">
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  )
}

export default PostBody
