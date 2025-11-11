import { simulateWheel } from 'utils';

import { SlideWrapper } from '../SlideWrapper';

import styles from './Slide1.scss';

export type Slide1Props = {
 ref: React.Ref<HTMLDivElement>;
};

export const Slide1 = ({ ref }: Slide1Props) => {
  const buttonDownClickHandler = () => {
    simulateWheel(1);
  };

  return (
    <SlideWrapper ref={ref} id="slide1" className={styles.Wrapper}>
      Slide 1

      <div className={styles.ButtonDown} onClick={buttonDownClickHandler} />
    </SlideWrapper>
  );
};
