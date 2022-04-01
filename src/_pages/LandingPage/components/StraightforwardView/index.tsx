import React from 'react';
import styles from './styles.module.css';
import Spacer from '../../../../components/other/Spacer';
import SectionScroller, {
  SectionInterface,
} from './components/SectionScroller';
import PlainButton from '../../../../components/buttons/PlainButton';

const sections: SectionInterface[] = [
  {
    code: `
const MY_STATE = createState("Jeff"); // <-
MY_STATE.set("Frank"); // Update State value
    `,
    codeWithComment: `
// Instantiate a global States with a single line of code
const MY_STATE = createState("Jeff"); // <-
MY_STATE.set("Frank"); // Update State value
    `,
    title: 'Create a wallet',
    description: 'Learn how to secure your funds in a hardware wallet.',
    icon: 'zap',
  },
  {
    code: `
// MyComponent.whatever
const myState = useAgile(MY_STATE);
    `,
    codeWithComment: `
// Dynamically bind State to UI-Components for reactivity
const myState = useAgile(MY_STATE);
    `,
    title: 'Mint your own NFTs',
    description: 'Learn how to mint an NFT and let it live forever on the chain.',
    icon: 'repeat',
  },
  {
    code: `
MY_STATE.persist();
    `,
    codeWithComment: `
// Permanently store State in the appropriate local Storage
MY_STATE.persist();
    `,
    title: 'Make some Trades',
    description: 'Learn how to research crypto projects and invest early on.',
    icon: 'server',
  },
  {
    code: `
const USERS = createCollection(); // <-
USERS.collect({id: 1, name: "Jeff"}, ['teamA']);
    `,
    codeWithComment: `
// Create a dynamic and reactive set of States
const USERS = createCollection(); // <-
USERS.collect({id: 1, name: "Jeff"}, ['teamA']);
    `,
    title: 'Rust',
    description: 'Crab(b) loves Rust more than you think.',
    icon: 'users',
  },
  {
    code: `
const IS_AUTH = createComputed(() => {
   return AUTH_TOKEN.exists && EXPIRATION_TIME.value > 0;
});
    `,
    codeWithComment: `
// Compute State depending on other States  
const IS_AUTH = createComputed(() => {
   return AUTH_TOKEN.exists && EXPIRATION_TIME.value > 0;
});
    `,
    title: 'DeFi',
    description: 'Understand DeFi protocols to make some passive income.',
    icon: 'edit',
  },
];

const StraightforwardView: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.HeaderContainer}>
          <h3 className={styles.Tagline}>Why follow the Crab?</h3>
          <h1 className={styles.Title}>Straightforward</h1>
          <Spacer height={20} />
          <p className={styles.Description}>
            Crab(b) comes from a future where crypto went full mainstream and made all other forms of money obselete. Crab(b) is here to teach you his ways.
          </p>
        </div>
        <Spacer height={60} />
        <SectionScroller sections={sections} startIndex={0} />
        <PlainButton
          to={'docs/introduction'}
          name={'Learn more'}
          className={styles.LearnMoreButton}
        />
      </div>
    </div>
  );
};

export default StraightforwardView;
