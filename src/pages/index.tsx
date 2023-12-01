import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from 'src/layouts/Home.module.scss';
import Mv from 'public/img/mv.jpg';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }} // アンマウント時
      layout
      transition={{ duration: 0.5 }}
    >
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
        大学中退後、職業訓練校でwebデザインを勉強して2018年にweb制作会社に就職。5年勤めて退社。
      </p>
    </motion.div>
  );
}
