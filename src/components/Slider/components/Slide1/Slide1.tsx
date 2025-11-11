import { scrollToElement } from 'utils';

import { SlideWrapper } from '../SlideWrapper';


import styles from './Slide1.scss';

export const Slide1 = () => {
  const buttonDownClickHandler = () => {
    const slideElement = document.querySelector('#slide2') as HTMLDivElement;

    scrollToElement(slideElement, 1200);
  };

  return (
    <SlideWrapper id="slide1" className={styles.Wrapper}>
      Slide 1

      <div className={styles.ButtonDown} onClick={buttonDownClickHandler} />
    </SlideWrapper>
  );
};
