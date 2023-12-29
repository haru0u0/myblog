import Head from 'next/head';
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'

type Props = {
    title: string
    date: string
    slug: string
}

const Seo = ({
    title,
    date,
    slug,
}: Props) => {
    const defaultTitle = 'haru blog.';
    const defaultDescription = 'haruのブログです。';
    const defautlImg = 'https://blog.haru.ing/assets/blog/preview/cover.jpg';

    const posttitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
    const description = date ? date : defaultDescription;
    const imgUrl = defautlImg;

    return (
        <Head>
            <title>{title}</title>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={imgUrl} />
        </Head>
    );
};

export default Seo;
