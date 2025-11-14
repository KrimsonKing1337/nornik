import classNames from 'classnames';

import avaImage from 'assets/ava.jpg';

import { ArrowButton } from 'components';

import { simulateWheel } from 'utils';

import { SlideWrapper } from '../SlideWrapper';

import styles from './Slide2.scss';

export type Slide2Props = {
  ref: React.Ref<HTMLDivElement>;
  isActive?: boolean;
};

export const Slide2 = ({ ref, isActive }: Slide2Props) => {
  const nextArrowButtonClickHandler = () => {
    simulateWheel(1);
  };

  const prevArrowButtonClickHandler = () => {
    simulateWheel(-1);
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
      <img src={avaImage} alt="" className={imgClassNames} />

      <div className={textWrapperClassNames}>
        <div className={styles.Text}>
          Риски и последствия
          <br />
          при отсутствии FE-разработчика
          <br />
          <br />
          Олег Шилов
          <br />
          Ноябрь 2025
        </div>
      </div>

      <ArrowButton isPrev onClick={prevArrowButtonClickHandler} />
      <ArrowButton onClick={nextArrowButtonClickHandler} />
    </SlideWrapper>
  );
};
