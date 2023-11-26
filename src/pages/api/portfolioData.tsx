import React from 'react';

interface PortfolioData {
  title: string;
  images: string;
  link: string;
  description: string;
  tag: string[];
  github: string;
}

export const PortfolioData = [
  {
    title: 'ポートフォリオ',
    images: '',
    link: 'https://portfolio-o-noji.vercel.app/portfolios',
    description: 'ポートフォリオ用に作成しました。',
    tag: ['React.js', 'Next.js', 'TypeScript'],
    github: 'https://github.com/o-noji/portfolio',
  },
  {
    title: 'ポートフォリオ用サイト（スポーツジム）',
    images: '',
    link: 'https://portfolio-gym.vercel.app',
    description:
      'ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト',
    tag: ['React.js', 'Next.js', 'TypeScript'],
    github: 'https://github.com/o-noji/portfolio_Gym',
  },
];
