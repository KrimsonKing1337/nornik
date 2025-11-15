import classNames from 'classnames';

import { ArrowButton, Logo, Title } from 'components';

import { simulateWheel } from 'utils';

import { SlideWrapper } from '../SlideWrapper';

import styles from './Slide1.scss';

export type Slide1Props = {
 ref: React.Ref<HTMLDivElement>;
 isActive?: boolean;
};

export const Slide1 = ({ ref, isActive = false }: Slide1Props) => {
  const arrowButtonClickHandler = () => {
    simulateWheel(1);
  };

  const slideClassNames = classNames({
    [styles.Wrapper]: true,
    'isActive': isActive,
  });

  return (
    <SlideWrapper ref={ref} id="slide1" className={slideClassNames}>
      <Logo className={styles.Logo} />

      <Title className={styles.Title}>
        Без FE-разработчика
        <br />
        не очень-то
      </Title>

      <ArrowButton onClick={arrowButtonClickHandler} />
    </SlideWrapper>
  );
};
