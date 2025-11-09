import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import Myfooter from '../../components/myfooter'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import { useEffect } from "react";
import Seo from '../../components/seo';

type Props = {
  post: PostType
  preview?: boolean
}

export default function Post({ post, preview }: Props) {
  const router = useRouter()
  const title = `${post.title}`

  if (!router.isFallback && !post?.slug) {

    return <ErrorPage statusCode={404} />
  }

  useEffect(() => {
    import('zenn-embed-elements');
  }, []);

  return (
    <Layout preview={preview}>
      <Seo
        title={post.title}
        emoji={post.emoji}
        date={post.date}
        path={`posts/${post.slug}`}
        desc={`${post.date}に投稿された、${post.tag}についての記事だよ～。`}
      />
      <Container>
        <div className="flex-grow min-h-screen">
          <Header />
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="">
                <Head>
                  <title>{title}</title>
                </Head>
                <PostHeader
                  title={post.title}
                  emoji={post.emoji}
                  date={post.date}
                  tag={post.tag}
                />
                <PostBody content={post.content} />
              </article>
            </>
          )}
        </div>
        <Myfooter />
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

// 記事の詳細をビルド時に取得
export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'emoji',
    'tag',
  ])

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

// 全記事のslugを取得してパス生成
export async function getStaticPaths() {
  const posts = await getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  }
}
