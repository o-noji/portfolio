import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import Logo from 'public/img/logo.png';
import Github from 'public/img/github.svg';

interface HeaderProps {
  toggle: () => void;
}

export default function Header({ toggle }: HeaderProps): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.logo}>
          <Link href="/" onClick={toggle}>
            <Image src={Logo} alt="logo" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/" onClick={toggle}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolios/" onClick={toggle}>
                Portfolios
              </Link>
            </li>
            <li>
              <Link href="/contact/" onClick={toggle}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/o-noji"
                target={'_blank'}
                onClick={toggle}
              >
                <Image src={Github} alt="Github" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
