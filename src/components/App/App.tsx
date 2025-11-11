import { Logo, Slider } from 'components';

import styles from './App.scss';

export const App = () => {
  return (
    <div className={styles.Wrapper}>
      <Logo />
      <Slider />
    </div>
  );
};
