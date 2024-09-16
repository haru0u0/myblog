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
import Seo from '../components/seo';
import Title from '../components/title'

export default function About() {
  return (
    <>
      <Layout>
        <Seo
          title={`about haru`}
          emoji={''}
          date={''}
          path={'about'}
          desc={'haruの自己紹介記事'}
        />
        <Head>
          <title>{`haru blog`}</title>
        </Head>
        <Container>
          <div className="flex-grow max-w-full min-h-screen">
            <Header />
            <Title 
              text="だれ？" />
            <img className="h-auto mx-auto rounded-lg max-w-xs border-2 border-black" src="/assets/profile.png"></img>
            <div className="my-8 font-IBMjp text-center flex justify-center">
              97年うまれです。<br /><br />
              22年09月からイギリスで暮らしています。<br /><br />
              チーズと犬が好きです。<br /><br />
            </div>
            <Title text="プライバシーポリシー" />
            <div className="my-8 font-IBMjp text-center flex justify-center">
              当サイトは、Googleによるアクセス解析ツール Google Analytics を使用しています。データはCookieを使用し、匿名で収集されています。データ収集を停止したい場合は、お使いのブラウザでCookieを無効に設定してください。この規約に関しての詳細は、Googleアナリティクスサービス利用規約のページをご覧ください。<br /><br />
            </div>
          </div>
          <Myfooter />
        </Container>
      </Layout>
    </>
  )
}
