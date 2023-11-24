import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
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
        <Head>
          <title>{`senharu blog`}</title>
        </Head>
        <Container>
          <Intro />
                <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Categories
      </h2>
          <div className="flex flex-wrap  mb-16 gap-4 justify-items-center">
<a href="/tags/イギリスお仕事" className="bg-pink-50 hover:bg-pink-200 text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">イギリスお仕事<Twemoji emoji="🇬🇧" /></a>
<a href="/tags/イギリス42" className="bg-pink-50 hover:bg-pink-200 text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">イギリス42<Twemoji emoji="🇬🇧" /></a>
<a href="/tags/イギリス大学院留学" className="bg-pink-50 hover:bg-pink-200 text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">イギリス大学院留学<Twemoji emoji="🇬🇧" /></a>
<a href="/tags/アメリカ交換留学" className="bg-pink-50 hover:bg-pink-200  text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">アメリカ交換留学 <Twemoji emoji="🇺🇸" /></a>
<a href="/tags/SWY" className="bg-pink-50 hover:bg-pink-200 text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">SWY<Twemoji emoji="🛳 " /></a>
<a href="/tags/旅行" className="bg-pink-50 hover:bg-pink-200 text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">旅行<Twemoji emoji="🇬🇧" /></a>
<a href="/tags/edtech" className="bg-pink-50 hover:bg-pink-200  text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">edtech<Twemoji emoji="🇺🇸" /></a>
          </div>
                <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
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
