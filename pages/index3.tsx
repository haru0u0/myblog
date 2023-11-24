import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts, getAllTags, getPostsByTag } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import React from 'react'
import Twemoji from '../lib/Twemoji'

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`senharu blog`}</title>
        </Head>
        <Container>
          <Intro />
<div className="grid grid-cols-1 text-center gap-y-5 md:grid-cols-4 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          <a href="/tags/アメリカ交換留学" className="bg-pink-50 hover:bg-pink-200  text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">アメリカ交換留学 <Twemoji emoji="🇺🇸" /></a>
<a href="/tags/イギリス大学院留学" className="bg-pink-50 hover:bg-pink-200 text-pink-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">イギリス大学院留学 <Twemoji emoji="🇬🇧" /></a>
</div>
        </Container>
      </Layout>
    </>
  )
}
