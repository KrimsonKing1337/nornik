import classNames from 'classnames';

import { ArrowButton } from 'components';

import { simulateWheel } from 'utils';

import { SlideWrapper } from '../SlideWrapper';

import styles from './Slide4.scss';

export type Slide4Props = {
  ref: React.Ref<HTMLDivElement>;
  isActive?: boolean;
};

export const Slide4 = ({ ref, isActive }: Slide4Props) => {
  const arrowButtonClickHandler = () => {
    simulateWheel(1);
  };

  const slideClassNames = classNames({
    [styles.Wrapper]: true,
    'isActive': isActive,
  });

  return (
    <SlideWrapper ref={ref} id="slide3" className={slideClassNames}>
      Slide 4

      <ArrowButton onClick={arrowButtonClickHandler} />
    </SlideWrapper>
  );
};
