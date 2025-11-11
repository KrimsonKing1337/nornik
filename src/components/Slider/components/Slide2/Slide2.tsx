import { SlideWrapper } from '../SlideWrapper';

import styles from './Slide2.scss';

export type Slide2Props = {
  ref: React.Ref<HTMLDivElement>;
};

export const Slide2 = ({ ref }: Slide2Props) => {
  return (
    <SlideWrapper ref={ref} id="slide2" className={styles.Wrapper}>
      Slide 2
    </SlideWrapper>
  );
};
