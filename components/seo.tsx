import Head from 'next/head';
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'

type Props = {
    title: string
    emoji: string
    date: string
    path: string
    desc: string
}

const Seo = ({
    title,
    emoji,
    date,
    path,
    desc
}: Props) => {
    const defaultTitle = 'haru blog.';
    const defaultDescription = 'haruのブログです。';

    const posttitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
    const description = desc ? desc : defaultDescription;

    return (
        <Head>
            <title>{title}</title>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={imgUrl} />
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:url" content={`https://blog.haru.ing/${path}`} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={`https://haru-blog-chi.vercel.app/api/og?title=${title}`} />
        </Head>
    );
};

export default Seo;
