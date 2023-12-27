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
        <Head>
          <Link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css" rel="stylesheet" />
          <title>{`haru blog`}</title>
        </Head>
        <Container>
          <Header />
          <div className="flex-grow">
            <h1 className="mb-8 text-lg font-IBMjp font-bold tracking-tighter leading-tight tag flex justify-center">
              # about
            </h1>
            <div>
              こんにちは！97年うまれのharuです。<br /><br />
              22年09月からイギリスで暮らしています。<br /><br />
              好きな食べ物はチーズと納豆とズッキーニです。<br /><br />
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
