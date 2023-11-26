import { useRouter } from 'next/router'
import Link from 'next/link'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Header from '../components/header'
import { getAllPosts, getAllTags, getPostsByTag } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Twemoji from '../lib/Twemoji'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const morePosts = allPosts.slice(0, 4)
  return (
  <>
      <Layout>
	  <Header />
        <Head>
          <title>{`senharu blog`}</title>
        </Head>
        <Container>
          <Intro />
                <h2 className="mb-8 text-5xl md:text-7xl tracking-tighter leading-tight">
        Categories
      </h2>
          <div className="flex flex-wrap  mb-16 gap-4 justify-items-center">
<Link href="/tags/イギリスお仕事" className="bg-pink-50 hover:bg-pink-200 text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"><Twemoji emoji="🇬🇧" />イギリスお仕事</Link>
<Link href="/tags/イギリス42" className="bg-pink-50 hover:bg-pink-200 text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"><Twemoji emoji="🇬🇧" />イギリス42</Link>
<Link href="/tags/イギリス大学院" className="bg-pink-50 hover:bg-pink-200 text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"><Twemoji emoji="🇬🇧" />イギリス大学院</Link>
<Link href="/tags/アメリカ交換留学" className="bg-pink-50 hover:bg-pink-200  text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"><Twemoji emoji="🇺🇸" />アメリカ交換留学</Link>
<Link href="/tags/SWY" className="bg-pink-50 hover:bg-pink-200 text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"><Twemoji emoji="🛳 " />SWY</Link>
<Link href="/tags/旅行" className="bg-pink-50 hover:bg-pink-200 text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"><Twemoji emoji="🎒" />旅行</Link>
<Link href="/tags/paper" className="bg-pink-50 hover:bg-pink-200  text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"><Twemoji emoji="📚" />読書メモ</Link>
          </div>
                <h2 className="mb-8 text-5xl md:text-7xl tracking-tighter leading-tight">
        Latest Posts
      </h2>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}


export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'emoji',
    'tags',
  ])

  return {
    props: { allPosts },
  }
}
