import classNames from 'classnames';

import { SlideWrapper } from '../SlideWrapper';

import styles from './Slide2.scss';

export type Slide2Props = {
  ref: React.Ref<HTMLDivElement>;
  isActive?: boolean;
};

export const Slide2 = ({ ref, isActive }: Slide2Props) => {
  const slideClassNames = classNames({
    [styles.Wrapper]: true,
    [styles.isActive]: isActive,
  });

  const textClassNames = classNames({
    [styles.Text]: true,
    [styles.isActive]: isActive,
  });

  return (
    <SlideWrapper ref={ref} id="slide2" className={slideClassNames}>
      <div className={textClassNames}>
        Slide 2
      </div>
    </SlideWrapper>
  );
};
