import { AppProps } from 'next/app'
import Script from "next/script";
import { useEffect } from 'react';
import { useRouter } from "next/router";
import '../styles/index.css'
//import 'zenn-content-css'
import '../components/zenn-content-css.css'
//import 'flowbite';
import { initFlowbite } from "flowbite";
import * as gtag from "../lib/gtag.js";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    //import('flowbite');
    initFlowbite();
    import("zenn-embed-elements");
  });
  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${gtag.GA_MEASUREMENT_ID}');
           `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
