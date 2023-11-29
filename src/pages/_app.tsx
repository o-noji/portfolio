import React from 'react';
import '@/styles/reset.css';
import '@/styles/globals.scss';
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Sidebar from '@/compornents/Sidebar';

function App({ Component, pageProps, router }: AppProps) {
  return (
    <MantineProvider>
      <Head>
        <title>Onoji Portfolio</title>
        <meta name="description" content="岡田拓也のポートフォリオです！" />
      </Head>
      <Sidebar />
      <main className="main">
        <div className="main__inner">
          <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </div>
      </main>
    </MantineProvider>
  );
}
export default App;
