import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import Header from '../components/header'
import Myfooter from '../components/myfooter'
import Head from 'next/head'
import Post from '../interfaces/post'
import Seo from '../components/seo';
import Title from '../components/title'
import { getAllPosts } from '../lib/api'

type Props = {
    posts: Post[];
};

export default function Index2({ posts }: Props) {
    const morePosts = posts.slice(0, 4)
    return (
        <>
            <Layout>
                <Seo
                    title={`haru blog.`}
                    emoji={''}
                    date={''}
                    path={''}
                    desc={'haru blogのトップページ'}
                />
                <Head>
                    <title>{`haru blog`}</title>
                </Head>
                <Container>
                    <div className="flex-grow">
                        <Header />
                        <Title text="最近の投稿" />
                        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                    </div>
                    <Myfooter />
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllPosts([
        'title',
        'date',
        'slug',
        'emoji',
        'tag',
    ])


    return {
        props: { posts },
    }
}