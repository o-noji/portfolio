import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/layouts/Portfolios.module.scss';
import Github from 'public/img/github.svg';
import { PortfolioData } from '@/pages/api/portfolioData';

export default function Portfolios(): JSX.Element {
  const tagStyles: Record<string, string> = {
    'React.js': styles.tag01,
    'Next.js': styles.tag02,
    TypeScript: styles.tag03,
    Mantine: styles.tag04,
    JavaScript: styles.tag05,
    jQuery: styles.tag06,
    'Three.js': styles.tag07,
  };

  return (
    <>
      <h1 className={styles.h1}>Portfolios</h1>
      <div className={styles.column3}>
        <div className={styles.column3__inner}>
          {PortfolioData.map((items) => {
            return (
              <div key={items.title}>
                <h2 className={styles.h2}>{items.title}</h2>
                <a className={styles.link} href={items.link} target={'_blank'}>
                  <Image
                    src={`/img/portfolios/${items.images}`}
                    alt={items.title}
                    width={352}
                    height={234}
                  />
                </a>
                <p className={styles.description}>{items.description}</p>
                <ul className={styles.tag}>
                  {items.tag.map((tagItem) => (
                    <li key={tagItem} className={`${tagStyles[tagItem] || ''}`}>
                      {tagItem}
                    </li>
                  ))}
                </ul>
                {items.github && (
                  <a
                    className={styles.github}
                    href={items.github}
                    target={'_blank'}
                  >
                    <Image src={Github} alt="Github" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
