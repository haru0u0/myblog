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
import { Button } from 'flowbite-react';

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`senharu blog`}</title>
        </Head>
        <Container>
          <Header />
		  <div className="mb-8 text-lg font-IBMjp tracking-tighter leading-tight flex justify-center">お探しのページが見つかりませんでした。</div>
		  <div className="flex justify-center">
		  <Button href="/" className="transition ease-in-out delay-150 hover:translate-y-2 hover:shadow-[0px_0px_0px_rgba(0,0,0,0)] focus:ring-0 bg-white text-black border-2 border-black shadow-sm">ホームへ戻る</Button></div>
        </Container>
      </Layout>
    </>
  )
}
