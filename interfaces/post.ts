import type Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  emoji: string
  ogImage: {
    url: string
  }
  content: string,
  tags: string[]
}

export default PostType
