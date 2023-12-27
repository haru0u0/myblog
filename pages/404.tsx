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
import { Button } from 'flowbite-react';

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`haru blog`}</title>
        </Head>
        <Container>
          <Header />
          <div className="flex-grow">
            <h1 className="mb-8 text-lg font-IBMjp font-bold tracking-tighter leading-tight tag flex justify-center">
              <Twemoji emoji="⚠" />&nbsp;404&nbsp;<Twemoji emoji="⚠" />
            </h1>
            <div className="my-8 font-IBMjp tracking-tighter leading-tight flex justify-center">お探しのページが見つかりませんでした。</div>
            <div className="flex justify-center">
              <Button href="/" className="transition ease-in-out delay-150 hover:translate-y-2 hover:shadow-[0px_0px_0px_rgba(0,0,0,0)] focus:ring-0 bg-white text-black border-2 border-black shadow-sm">ホームへ戻る</Button></div>
          </div>
          <Myfooter />
        </Container>
      </Layout>
    </>
  )
}
