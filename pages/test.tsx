// pages/index.tsx
import Link from 'next/link';
import { client } from '../lib/microcms';

type Blog = {
    slug: string;
    title: string;
};

type Props = {
    blog: Blog[];
};

export default function Home({ blog }: Props) {
    return (
        <main>
            <h1>ブログ記事一覧</h1>
            <ul>
                {blog.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

// Page Router で非同期データを取得
export async function getStaticProps() {
    const data = await client.get({ endpoint: 'blog', queries: { limit: 5 } });

    return {
        props: {
            blog: data.contents,
        },
        revalidate: 10, // ISR対応
    };
}
