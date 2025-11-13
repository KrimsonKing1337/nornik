import { useState } from 'react';

import classNames from 'classnames';

import curveImage from 'assets/curve_red_axes_downward_transparent.png';

import { ArrowButton, Modal } from 'components';

import { simulateWheel } from 'utils';

import { SlideWrapper } from '../SlideWrapper';

import styles from './Slide3.scss';

export type Slide3Props = {
  ref: React.Ref<HTMLDivElement>;
  isActive?: boolean;
};

export const Slide3 = ({ ref, isActive }: Slide3Props) => {
  const [modalDetailsIsActive, setModalDetailsIsActive] = useState(false);
  const [modalDesignIsActive, setModalDesignIsActive] = useState(false);

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

  const moreDetailsClassNames = classNames({
    [styles.MoreDetails]: true,
    [styles.isActive]: isActive,
  });

  const aboutDesignClassNames = classNames({
    [styles.AboutDesign]: true,
    [styles.isActive]: isActive,
  });

  return (
    <SlideWrapper ref={ref} id="slide3" className={slideClassNames}>
      <Modal isActive={modalDetailsIsActive} setIsActive={setModalDetailsIsActive}>
        <div className={styles.ModalContent}>
          <div>
            <div className={styles.ModalContentLine}>
              <b>Активных пользователей КАСУД:</b> 4000
            </div>

            <div className={styles.ModalContentLine}>
              <b>Средняя зарплата:</b> 50 тысяч рублей
            </div>

            <div className={styles.ModalContentLine}>
              <b>Стоимость 1 минуты простоя сотрудника:</b>
              <br />
              156,25 ₽ / 30 мин = 5,21 ₽/мин
            </div>

            <div className={styles.ModalContentLine}>
              <b>Простой в месяц:</b>
              <br />
              280 мин × 5,21 ₽ = 1 458,8 ₽/сотрудника в месяц
            </div>

            <div className={styles.ModalContentLine}>
              <b>Количество сотрудников:</b>
              <br />
              1 458,8 ₽ × 4 000 = 5 835 200 ₽/мес
            </div>

            <div className={styles.ModalContentLine}>
              <b>За год:</b>
              <br />
              5 835 200 ₽ × 12 = 70 022 400 ₽/год
            </div>

            <div className={styles.ModalContentLine}>
              <b>Включая налоги (≈ 30%):</b>
              <br />
              90 988 800 ₽/год
            </div>
          </div>
        </div>
      </Modal>

      <Modal isActive={modalDesignIsActive} setIsActive={setModalDesignIsActive}>
        О дизайне
      </Modal>

      <div className={moreDetailsClassNames} onClick={() => setModalDetailsIsActive(true)}>
        Расчёты
      </div>

      <div className={aboutDesignClassNames} onClick={() => setModalDesignIsActive(true)}>
        О дизайне
      </div>

      <img src={curveImage} alt="" className={imgClassNames} />

      <div className={titleClassNames}>
        Плохой UI/UX
      </div>

      <div className={textClassNames}>
        Простой сотрудника, вызванный плохим UI/UX даже на 10 минут в день
        стоит компании <b>90 млн ₽</b> в год
        <br />
        <br />
        + больше ошибок
        <br />
        + больше поддержки
        <br />
        + медленнее внедрение
        <br />
        <br />
        Плохой дизайн — это не просто "не красиво", это большие потери для компании
      </div>

      <ArrowButton onClick={arrowButtonClickHandler} />
    </SlideWrapper>
  );
};
