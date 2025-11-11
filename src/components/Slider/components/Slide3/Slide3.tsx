import { SlideWrapper } from '../SlideWrapper';

import styles from './Slide3.scss';

export type Slide3Props = {
  ref: React.Ref<HTMLDivElement>;
};

export const Slide3 = ({ ref }: Slide3Props) => {
  return (
    <SlideWrapper ref={ref} id="slide3" className={styles.Wrapper}>
      Slide 3
    </SlideWrapper>
  );
};
