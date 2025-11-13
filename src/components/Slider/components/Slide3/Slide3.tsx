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
        <div className={styles.ModalContent}>
          <div>
            <div className={styles.ModalContentLine}>
              Активных пользователей КАСУД: 4000
            </div>

            <div className={styles.ModalContentLine}>
              Средняя зарплата: 50 тысяч рублей
            </div>

            <div className={styles.ModalContentLine}>
              Стоимость 1 минуты простоя сотрудника:
              <br />
              156,25 ₽ / 30 мин = 5,21 ₽/мин
            </div>

            <div className={styles.ModalContentLine}>
              Простой в месяц:
              <br />
              280 мин × 5,21 ₽ = 1 458,8 ₽/сотрудника в месяц
            </div>

            <div className={styles.ModalContentLine}>
              Количество сотрудников:
              <br />
              1 458,8 ₽ × 4 000 = 5 835 200 ₽/мес
            </div>

            <div className={styles.ModalContentLine}>
              За год:
              <br />
              5 835 200 ₽ × 12 = 70 022 400 ₽/год
            </div>

            <div className={styles.ModalContentLine}>
              Включая налоги (≈ 30%):
              <br />
              90 988 800 ₽/год
            </div>
          </div>
        </div>
      </Modal>

      <div className={styles.MoreDetails} onClick={() => setModalIsActive(true)}>
        Подробнее
      </div>

      <img src={curveImage} alt="" className={imgClassNames} />

      <div className={titleClassNames}>
        Плохой UI/UX
      </div>

      <div className={textClassNames}>
        Простой сотрудника, вызванный плохим UI/UX даже на 10 минут в день
        <br />
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
        Хороший дизайн — это не просто "красиво", это окупаемая инвестиция
      </div>

      <ArrowButton onClick={arrowButtonClickHandler} />
    </SlideWrapper>
  );
};
