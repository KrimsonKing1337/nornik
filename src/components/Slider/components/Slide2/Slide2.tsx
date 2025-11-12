import classNames from 'classnames';

import imageGoals from 'assets/goals.jpg';

import { ArrowButton } from 'components';

import { simulateWheel } from 'utils';

import { SlideWrapper } from '../SlideWrapper';

import styles from './Slide2.scss';

export type Slide2Props = {
  ref: React.Ref<HTMLDivElement>;
  isActive?: boolean;
};

export const Slide2 = ({ ref, isActive }: Slide2Props) => {
  const arrowButtonClickHandler = () => {
    simulateWheel(1);
  };

  const slideClassNames = classNames({
    [styles.Wrapper]: true,
    [styles.isActive]: isActive,
  });

  const imgClassNames = classNames({
    [styles.Img]: true,
    [styles.isActive]: isActive,
  });

  const textWrapperClassNames = classNames({
    [styles.TextWrapper]: true,
    [styles.isActive]: isActive,
  });

  return (
    <SlideWrapper ref={ref} id="slide2" className={slideClassNames}>
      <img src={imageGoals} alt="" className={imgClassNames} />

      <div className={textWrapperClassNames}>
        <div className={styles.Text}>
          Почему меня стоит сохранить в команде
          <br />
          Итоги, эффект для бизнеса и 90-дневный план
          <br />
          Олег - Frontend-разработчик / архитектор
          <br />
          Ноябрь 2025
        </div>
      </div>

      <ArrowButton onClick={arrowButtonClickHandler} />
    </SlideWrapper>
  );
};
