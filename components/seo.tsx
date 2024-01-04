import Head from 'next/head';
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
export const PROD_URL = process.env.PROD_URL;

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
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:url" content={`${PROD_URL}/${path}`} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={`${PROD_URL}/api/og?title=${title}&emoji=${emoji}&date=${date}`} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="haru-blog-chi.vercel.app" />
            <meta property="twitter:url" content={`${PROD_URL}/${path}`} />
            <meta name="twitter:title" content="{title}" />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${PROD_URL}/api/og?title=${title}&emoji=${emoji}&date=${date}`} />
        </Head>
    );
};

export default Seo;
