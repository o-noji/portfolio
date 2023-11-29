import React from 'react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Burger, Drawer } from '@mantine/core';
import styles from '@/compornents/Sidebar/Sidebar.module.scss';
import Header from '@/compornents/Header';
import Footer from '@/compornents/Footer';

export default function Sidebar(): JSX.Element {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {isMobile && (
        <Burger
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
        />
      )}
      {isMobile ? (
        <Drawer opened={opened} onClose={toggle} withCloseButton={true}>
          <div className={styles.sidebar}>
            <div className={styles.sidebar__inner}>
              <Header toggle={toggle} />
              <Footer />
            </div>
          </div>
        </Drawer>
      ) : (
        <div className={styles.sidebar}>
          <div className={styles.sidebar__inner}>
            <Header toggle={toggle} />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
