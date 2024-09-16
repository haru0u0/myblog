import { useRouter } from 'next/router'
import Link from 'next/link'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Header from '../components/header'
import Myfooter from '../components/myfooter'
import { getAllPosts, getAllTags, getPostsByTag } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Twemoji from '../lib/Twemoji'
import Seo from '../components/seo';
import Title from '../components/title'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const morePosts = allPosts.slice(0, 4)
  return (
    <>
      <Layout>
        <Seo
          title={`haru blog.`}
          emoji={''}
          date={''}
          path={''}
          desc={'haru blogのトップページだよ～。'}
        />
        <Head>
          <title>{`haru blog`}</title>
        </Head>
        <Container>
          <div className="flex-grow">
            <Header />
            <Title text="最近の投稿" />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
          <Myfooter />
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