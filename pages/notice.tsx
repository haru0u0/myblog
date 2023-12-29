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

export default function Notice() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`haru blog`}</title>
        </Head>
        <Header />
        <Container>
          <div className="flex-grow">
            <h1 className="m-8 text-lg font-IBMjp font-bold tracking-tighter leading-tight tag flex justify-center">
              # notice
            </h1>
          </div>
          <Myfooter />
        </Container>
      </Layout>
    </>
  )
}