import React from 'react';
import styles from './styles.module.css';
import Cards, { CardInterface } from './components/Cards';

const cards: CardInterface[] = [
  {
    title: 'NFTs',
    description:
      'Learn everything about NFTs',
    to: 'docs/introduction#centralize',
    imagePath: 'img/pages/landing/software_engineer.svg',
  },
  {
    title: 'Rust',
    description:
      'The crab will teach you some Rust as well.',
    to: 'docs/introduction#flexible',
    imagePath: 'img/pages/landing/teaching.svg',
  },
  {
    title: 'Easy to Follow',
    description:
      'You don’t need a technical background to follow the Crab. ',
    to: 'docs/introduction#easy-to-use',
    imagePath: 'img/pages/landing/science.svg',
  },
  {
    title: 'DeFi',
    description:
      'Learn how to use DeFi protocols to earn some passive income.',
    to: 'https://coveralls.io/github/agile-ts/agile?branch=master',
    imagePath: 'img/pages/landing/engineer.svg',
  },
  {
    title: 'Security',
    description:
      'Star with making a hardware wallet to keep your money safe.',
    to: 'docs/introduction#typescript',
    imagePath: 'img/pages/landing/typescript.svg',
  },
];

const OtherFeaturesView: React.FC = () => {
  return (
    <div className={styles.Container}>
      <Cards cards={cards} />
    </div>
  );
};

export default OtherFeaturesView;
