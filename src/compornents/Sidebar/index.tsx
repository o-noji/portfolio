import React from "react";
import styles from "@/compornents/Sidebar/Sidebar.module.scss";
import { Footer } from "@/compornents/Footer";
import { Header } from "@/compornents/Header";

export function Sidebar(): JSX.Element {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__inner}>
        <Header />
        <Footer />
      </div>
    </div>
  );
}
