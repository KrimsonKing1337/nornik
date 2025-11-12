import { useEffect } from 'react';

import { Slider } from 'components';

import styles from './App.scss';

export const App = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <div className={styles.Wrapper}>
      <Slider />
    </div>
  );
};
