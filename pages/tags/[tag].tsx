
import { getAllTags, getPostsByTag } from "../../lib/api";
import Post from "../../interfaces/post";
import Head from "next/head";
import Header from '../../components/header'
import Layout from "../../components/layout";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import Myfooter from '../../components/myfooter';
import Seo from '../../components/seo';
import Title from '../../components/title';

type Props = {
  posts: Post[],
  tag: string
}

export default function Index({ posts, tag }: Props) {
  return (
    <>
      <Layout>
        <Seo
          title={`${tag}の記事一覧`}
          emoji={''}
          date={''}
          path={`tags/${tag}`}
          desc={`${tag}についての記事一覧だよ～。`}
        />
        <Head>
          <title>{tag}</title>
        </Head>
        <Container>
          <div className="flex-grow min-h-screen">
            <Header />
            <Title text={tag} />
            <MoreStories posts={posts} />
          </div>
          <Myfooter />
        </Container>
      </Layout>
    </>
  )
}

type Params = {
  params: {
    tag: string
  }
}


export async function getStaticProps({ params }: Params) {
  const posts = await getPostsByTag(params.tag, [
    'title',
    'date',
    'slug',
    'emoji',
    'tag'
  ])

  return {
    props: {
      posts: posts,
      tag: params.tag
    },
  }
}



export async function getStaticPaths() {
  const tags = await getAllTags();

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag,
        },
      }
    }),
    fallback: false,
  }
}
