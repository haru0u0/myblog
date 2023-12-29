import { AppProps } from 'next/app'
import { useEffect } from 'react';
import '../styles/index.css'
//import 'zenn-content-css'
import '../components/zenn-content-css.css'
//import 'flowbite';
import { initFlowbite } from "flowbite";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    //import('flowbite');
    initFlowbite();
    import("zenn-embed-elements");
  });
  return <Component {...pageProps} />
}
