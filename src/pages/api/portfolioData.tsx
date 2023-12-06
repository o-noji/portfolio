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
    images: 'img01.jpg',
    link: 'https://portfolio-o-noji.vercel.app',
    description:
      'ポートフォリオ用に作成したページをまとめるために作成しました。',
    tag: ['React.js', 'Next.js', 'TypeScript'],
    github: 'https://github.com/o-noji/portfolio',
  },
  {
    title: 'ポートフォリオ用サイト（スポーツジム）',
    images: 'img02.jpg',
    link: 'https://portfolio-gym.vercel.app',
    description: 'スポーツジムをイメージして作成しました。',
    tag: ['React.js', 'Next.js', 'TypeScript'],
    github: 'https://github.com/o-noji/portfolio_Gym',
  },
];
