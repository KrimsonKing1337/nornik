import classNames from 'classnames';

import { simulateWheel } from 'utils';

import { SlideWrapper } from '../SlideWrapper';

import styles from './Slide1.scss';

export type Slide1Props = {
 ref: React.Ref<HTMLDivElement>;
 isActive?: boolean;
};

export const Slide1 = ({ ref, isActive = false }: Slide1Props) => {
  const buttonDownClickHandler = () => {
    simulateWheel(1);
  };

  const slideClassNames = classNames({
    [styles.Wrapper]: true,
    'isActive': isActive,
  });

  return (
    <SlideWrapper ref={ref} id="slide1" className={slideClassNames}>
      Почему я нужен команде (почему frontend-разработчик нужен команде)?

      <div className={styles.ButtonDown} onClick={buttonDownClickHandler} />
    </SlideWrapper>
  );
};
