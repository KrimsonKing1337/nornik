import classNames from 'classnames';

import RiskImage from 'assets/eco.jpg';

import { ArrowButton } from 'components/ArrowButton';

import { simulateWheel } from 'utils';

import styles from './Slide6.scss';

import { SlideWrapper } from '../SlideWrapper';

export type Slide6Props = {
  ref: React.Ref<HTMLDivElement>;
  isActive?: boolean;
};

export const Slide6 = ({ ref, isActive }: Slide6Props) => {
  const prevArrowButtonClickHandler = () => {
    simulateWheel(-1);
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
      <div className={styles.Shadow} />

      <div className={titleClassNames}>
        Заключение
      </div>

      <div className={textClassNames}>
        Инвестиции в экспертизу — это не траты, а экономия.
        <br />
        <br />
        Один сильный специалист может сэкономить компании десятки миллионов рублей и годы времени.
      </div>

      <ArrowButton isPrev onClick={prevArrowButtonClickHandler} />
    </SlideWrapper>
  );
};
