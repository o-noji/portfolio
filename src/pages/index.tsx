import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from 'src/layouts/Home.module.scss';
import Mv from 'public/img/mv.jpg';

export default function Home() {
  return (
    <>
      <h1 className={styles.h1}>Portfolio</h1>
      <div className={styles.mv}>
        <div className={styles.mv__inner}>
          <Image src={Mv} alt="mv" />
        </div>
      </div>
      <h2 className={styles.h2}>About</h2>
      <p>
        岡田拓也 | Okada Takuya <br />
        1994年5月11日生まれ。 <br />
        埼玉県生まれ埼玉育ち。 <br />
        小学3年から高校3年まで野球をしていました。中学時代は市内の選抜チームに選ばれ、全国大会で3位まで行くことができました。
        <br />
        職業訓練校でwebデザインを勉強して2018年にweb制作会社に就職。5年勤めて退社。
        <br />
        現在はReact、Next.js、TypeScriptを勉強中。
        <br />
        趣味は対戦ゲームと筋トレです。
      </p>
    </>
  );
}
