import React, { FormEvent, useRef } from 'react';
import Router from 'next/router';
import { motion } from 'framer-motion';
import styles from '@/layouts/Contact.module.scss';

export default function Contact(): JSX.Element {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const registerUser: React.FormEventHandler<HTMLFormElement> = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    await fetch('/api/sendMail', {
      body: JSON.stringify({
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        message: messageRef.current?.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  };

  const handler = (path: any) => {
    Router.push(path);
  };

  return (
    <>
      <h1 className={styles.h1}>Contact</h1>
      <p className={styles.p}>
        お問い合わせがありましたら、
        <br />
        下のフォームからお問い合わせください。
      </p>

      <form className={styles.form} onSubmit={registerUser}>
        <label className={styles.label}>
          名前<span>*</span>
          <input
            className={styles.input}
            type="text"
            name="name"
            ref={nameRef}
            required
          />
        </label>
        <label className={styles.label}>
          メールアドレス<span>*</span>
          <input
            className={styles.input}
            type="email"
            name="email"
            ref={emailRef}
            required
          />
        </label>
        <label className={styles.label}>
          お問い合わせ内容<span>*</span>
          <textarea
            className={styles.textarea}
            name="message"
            ref={messageRef}
            required
          />
        </label>
        <button
          className={styles.button}
          type="submit"
          onClick={() => handler('/thanks')}
        >
          送信
        </button>
      </form>
    </>
  );
}
