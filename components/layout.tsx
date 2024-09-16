import Myfooter from './myfooter'
import Meta from './meta'
import { IBM_Plex_Sans_JP, IBM_Plex_Sans } from "next/font/google";
import Script from 'next/script'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const IBMPlexSansJP = IBM_Plex_Sans_JP({
  variable: '--font-IBMjp',
  weight: '400',
  subsets: ['latin'],
});
const IBMPlexSans = IBM_Plex_Sans({
  variable: '--font-IBM',
  weight: '400',
  subsets: ['latin'],
});

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="bg-c1">
        <div className="flex flex-col min-h-screen">
          <main className={`${IBMPlexSansJP.variable} ${IBMPlexSans.variable}`}>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
