import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import Logo from "public/img/logo.png";
import Github from "public/img/github.svg";

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/portfolios/">Portfolios</Link>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
            <li>
              <Link href="https://github.com/o-noji" target={"_blank"}>
                <Image src={Github} alt="Github" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
