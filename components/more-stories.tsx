import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid sm:grid-cols-1 place-items-center gap-y-8 mb-8 md:grid-cols-2 gap-x-8 md:place-items-stretch lg:grid-cols-4 gap-x-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            emoji={post.emoji}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            tags={post.tags}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
