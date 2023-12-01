import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styles from '@/layouts/Thanks.module.scss';

export default function Thanks(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      // exit={{ opacity: 0 }} // アンマウント時
    >
      <h1 className={styles.h1}>お問い合わせありがとうございました。</h1>
      <p className={styles.p}>
        この度はお問い合わせいただき、誠にありがとうございます。
        <br />
        3日以内にご返信させていただきます。
      </p>

      <p className={styles.p}>しばらく経ってもメールが届かない場合、</p>
      <p className={styles.p}>
        ・迷惑メールフォルダに振り分けられていないか
        <br />
        ・別のメールアドレスでお問い合わせされていないか
      </p>

      <p className={styles.p}>をご確認ください。</p>
      <p className={styles.p}>
        5秒後に自動的にトップページにリダイレクトします。
      </p>
    </motion.div>
  );
}
