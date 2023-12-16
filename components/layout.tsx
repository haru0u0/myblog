import Myfooter from './myfooter'
import Meta from './meta'
import { IBM_Plex_Sans_JP, IBM_Plex_Sans } from "next/font/google";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const IBMPlexSansJP = IBM_Plex_Sans_JP({
  weight: '400',
  subsets: ['latin'],
});
const IBMPlexSans = IBM_Plex_Sans({
  weight: '400',
  subsets: ['latin'],
});

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-rose-200">
        <main className={`${IBMPlexSansJP.className} ${IBMPlexSans.className}`}>{children}</main>
      </div>
      <Myfooter />
    </>
  )
}

export default Layout
