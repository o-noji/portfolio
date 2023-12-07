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
    tag: ['React.js', 'Next.js', 'TypeScript', 'Mantine'],
    github: 'https://github.com/o-noji/portfolio',
  },
  {
    title: 'ポートフォリオ用サイト（スポーツジム）',
    images: 'img02.jpg',
    link: 'https://portfolio-gym.vercel.app',
    description:
      '勉強中のReactを使用してスポーツジムをイメージたページを作成しました。',
    tag: ['React.js', 'Next.js', 'TypeScript', 'Mantine'],
    github: 'https://github.com/o-noji/portfolio_Gym',
  },
  {
    title: 'ALMA TERRA',
    images: 'img03.jpg',
    link: 'http://agave-jp.com/',
    description: '株式会社アルマテラのホームページの構築をしました。',
    tag: ['JavaScript', 'jQuery'],
  },
  {
    title: 'WORKO',
    images: 'img04.jpg',
    link: 'https://www.asahi.com/ads/worko/',
    description: '朝日新聞デジタル WORKOのページの構築をしました。',
    tag: ['JavaScript', 'jQuery'],
  },
  {
    title: 'practice Three.js',
    images: 'img05.jpg',
    link: 'https://pictures-threejs.vercel.app/',
    description:
      'Three.jsを使用してスクロールに応じて背景が動くページを作成しました。',
    tag: ['React.js', 'Three.js'],
    github: 'https://github.com/o-noji/pictures_threejs',
  },
];
