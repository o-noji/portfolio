import React from "react";
import styles from "@/compornents/Sidebar/Sidebar.module.scss";
import Header from "@/compornents/Header";
import Footer from "@/compornents/Footer";


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
