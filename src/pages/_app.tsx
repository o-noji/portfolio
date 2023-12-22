import React from 'react';
import '@/styles/reset.css';
import '@/styles/globals.scss';
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import { useTransitionFix } from '@/utils/useTransitionFix';
import Head from 'next/head';
import Sidebar from '@/compornents/Sidebar';

const PAGE_VARIANTS = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

function App({ Component, pageProps, router }: AppProps) {
  const transitionCallback = useTransitionFix();
  return (
    <MantineProvider>
      <Head>
        {!!process.env.GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
            ></script>
            <script>
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GA_MEASUREMENT_ID}', { send_page_view: false });
            `}
            </script>
          </>
        )}

        <title>Onoji Portfolio</title>
        <meta name="description" content="岡田拓也のポートフォリオです！" />
        <meta name="robots" content="noindex" />
      </Head>
      <Sidebar />
      <main className="main">
        <div className="main__inner">
          <AnimatePresence mode="wait" onExitComplete={transitionCallback}>
            <motion.div
              key={router.route}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={PAGE_VARIANTS}
            >
              <Component {...pageProps} key={router.asPath} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </MantineProvider>
  );
}
export default App;
