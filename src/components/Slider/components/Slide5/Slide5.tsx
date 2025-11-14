import classNames from 'classnames';

import RiskImage from 'assets/risk.jpg';

import { ArrowButton } from 'components/ArrowButton';

import { simulateWheel } from 'utils';

import styles from './Slide5.scss';

import { SlideWrapper } from '../SlideWrapper';
import { Shadow } from '../../../Shadow';

export type Slide5Props = {
  ref: React.Ref<HTMLDivElement>;
  isActive?: boolean;
};

export const Slide5 = ({ ref, isActive }: Slide5Props) => {
  const prevArrowButtonClickHandler = () => {
    simulateWheel(-1);
  };

  const nextArrowButtonClickHandler = () => {
    simulateWheel(1);
  };

  const titleClassNames = classNames({
    [styles.Title]: true,
    [styles.isActive]: isActive,
  });

  const textClassNames = classNames({
    [styles.Text]: true,
    [styles.isActive]: isActive,
  });

  const imageClassNames = classNames({
    [styles.Img]: true,
    [styles.isActive]: isActive,
  });

  return (
    <SlideWrapper ref={ref} id="slide5" className={styles.Wrapper}>
      <img src={RiskImage} alt="" className={imageClassNames} />
      <Shadow />

      <div className={titleClassNames}>
        Риски
      </div>

      <div className={textClassNames}>
        Уход фронтенд-эксперта приведёт к росту затрат и задержкам развития продукта.
        <br />
        <br />
        + потеря экспертизы и понимания архитектуры
        <br />
        + рост технического долга
        <br />
        + замедление обновлений
        <br />
        + повышение нагрузки на других разработчиков
        <br />
        + увеличение простоев пользователей и расходов на поддержку
      </div>

      <ArrowButton isPrev onClick={prevArrowButtonClickHandler} />
      <ArrowButton onClick={nextArrowButtonClickHandler} />
    </SlideWrapper>
  );
};
