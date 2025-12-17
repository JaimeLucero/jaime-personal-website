import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return
  <>
    <Head>
        <link rel="icon" href="/public/J-logo.svg" />
        <title>My App</title>
    </Head>
   <Component {...pageProps} />;

  </>
}

export default MyApp;