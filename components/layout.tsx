import Footer from './footer'
import Meta from './meta'
import { M_PLUS_Rounded_1c } from "next/font/google";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const  MPLUSRounded1cFont =   M_PLUS_Rounded_1c({ weight: "400", subsets: ["latin"] });

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main className={MPLUSRounded1cFont.className}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
