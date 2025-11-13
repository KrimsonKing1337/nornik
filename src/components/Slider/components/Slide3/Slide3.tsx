import { useState } from 'react';

import classNames from 'classnames';

import curveImage from 'assets/curve_red_axes_transparent.png';

import { ArrowButton, Modal } from 'components';

import { simulateWheel } from 'utils';

import { SlideWrapper } from '../SlideWrapper';

import styles from './Slide3.scss';

export type Slide3Props = {
  ref: React.Ref<HTMLDivElement>;
  isActive?: boolean;
};

export const Slide3 = ({ ref, isActive }: Slide3Props) => {
  const [modalIsActive, setModalIsActive] = useState(false);

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

  const titleClassNames = classNames({
    [styles.Title]: true,
    [styles.isActive]: isActive,
  });

  const textClassNames = classNames({
    [styles.Text]: true,
    [styles.isActive]: isActive,
  });

  return (
    <SlideWrapper ref={ref} id="slide3" className={slideClassNames}>
      <Modal isActive={modalIsActive} setIsActive={setModalIsActive}>
        Модалка слайд 3
      </Modal>

      <img src={curveImage} alt="" className={imgClassNames} />

      <div className={titleClassNames} onClick={() => setModalIsActive(true)}>
        Хороший UI/UX
      </div>

      <div className={textClassNames}>
        Улучшение UI/UX экономит сотруднику 10 минут в день.
        <br />
        4 000 сотрудников x 10 мин x 12 мес = <b>90 млн ₽</b> в год
        <br />
        <br />
        + меньше ошибок
        <br />
        + меньше поддержки
        <br />
        + быстрее внедрение
        <br />
        <br />
        Хороший UX — это не "красиво", а окупаемость инвестиций
      </div>

      <ArrowButton onClick={arrowButtonClickHandler} />
    </SlideWrapper>
  );
};
