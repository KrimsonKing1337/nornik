import classNames from 'classnames';

import { SlideWrapper } from '../SlideWrapper';

import styles from './Slide3.scss';

export type Slide3Props = {
  ref: React.Ref<HTMLDivElement>;
  isActive?: boolean;
};

export const Slide3 = ({ ref, isActive }: Slide3Props) => {
  const slideClassNames = classNames({
    [styles.Wrapper]: true,
    'isActive': isActive,
  });

  return (
    <SlideWrapper ref={ref} id="slide3" className={slideClassNames}>
      Slide 3
    </SlideWrapper>
  );
};
