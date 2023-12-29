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
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Layout>
        title={`about haru`}
        emoji={''}
        date={''}
        path={'about'}
        desc={'haruの自己紹介記事だよ～。'}
        <Head>
          <title>{`haru blog`}</title>
        </Head>
        <Container>
          <div className="flex-grow max-w-full min-h-screen">
            <Header />
            <h1 className="m-8 text-lg font-IBMjp font-bold tracking-tighter leading-tight tag flex justify-center">
              # about
            </h1>
            <img className="h-auto mx-auto rounded-lg max-w-xs border-2 border-black shadow-sm md:shadow-md" src="/assets/profile.png"></img>
            <div className="my-8 font-IBMjp text-center flex justify-center">
              こんにちは！97年うまれのharuです。<br /><br />
              22年09月からイギリスで暮らしています。<br /><br />
              好きな食べ物はチーズと納豆とズッキーニ。<br /><br />
              好きな動物はお犬です。<br /><br />
              教育とテクノロジーに関心があります。
            </div>
          </div>
          <Myfooter />
        </Container>
      </Layout>
    </>
  )
}
