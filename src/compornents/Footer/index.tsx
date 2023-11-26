import React from "react";
import styles from "@/compornents/Footer/Footer.module.scss";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.copy}>© Onoji All rights reserved.</div>
      </div>
    </footer>
  );
}
