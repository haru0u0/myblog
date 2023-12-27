import Myfooter from './myfooter'
import Meta from './meta'
import { IBM_Plex_Sans_JP, IBM_Plex_Sans, Dela_Gothic_One, Rampart_One, DotGothic16 } from "next/font/google";
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
const DelaGothicOne = Dela_Gothic_One({
  variable: '--font-DELA',
  weight: '400',
  subsets: ['latin'],
});
const RampartOne = Rampart_One({
  variable: '--font-RAMPART',
  weight: '400',
  subsets: ['latin'],
});
const Dot = DotGothic16({
  variable: '--font-DOT',
  weight: '400',
  subsets: ['latin'],
});

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="bg-mypink">
        <div className="flex flex-col min-h-screen">
          <main className={`${Dot.variable} ${RampartOne.variable} ${DelaGothicOne.variable} ${IBMPlexSansJP.variable} ${IBMPlexSans.variable}`}>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
