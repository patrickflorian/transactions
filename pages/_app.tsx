import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Provider } from "react-redux";
import store from "../store";
import Layout from '../layout'
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return <Provider store={store}>
    <Head>
      <Link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
    </Head>
    {!router.pathname.includes("api-doc") ? <Layout><Component {...pageProps} /></Layout> : <Component {...pageProps} />}
  </Provider>
}
