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
          <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            About
          </h2>
          <div>
            こんにちは。好きな食べ物はチーズです。
          </div>
        </Container>
      </Layout>
    </>
  )
}
