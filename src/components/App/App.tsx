import { useEffect } from 'react';

import { Slider } from 'components';

import styles from './App.scss';

export const App = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      const defaultValue = window.history.scrollRestoration;

      window.history.scrollRestoration = 'manual';

      window.scrollTo(0, 0);

      return () => {
        window.history.scrollRestoration = defaultValue;
      };
    } else {
      return () => {
        window.scrollTo(0, 0);
      };
    }
  }, []);

  return (
    <div className={styles.Wrapper}>
      <Slider />
    </div>
  );
};
