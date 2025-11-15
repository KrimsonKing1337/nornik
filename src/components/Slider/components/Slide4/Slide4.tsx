import { useState } from 'react';

import classNames from 'classnames';

import burningMoneyImage from 'assets/burning_money.jpg';

import { ArrowButton, BgImg, Content, Modal, Shadow } from 'components';

import { simulateWheel } from 'utils';

import { SlideWrapper } from '../SlideWrapper';

import styles from './Slide4.scss';

export type Slide4Props = {
  ref: React.Ref<HTMLDivElement>;
  isActive?: boolean;
};

export const Slide4 = ({ ref, isActive }: Slide4Props) => {
  const [modalIsActive, setModalIsActive] = useState(false);

  const nextArrowButtonClickHandler = () => {
    simulateWheel(1);
  };

  const prevArrowButtonClickHandler = () => {
    simulateWheel(-1);
  };

  const slideClassNames = classNames({
    [styles.Wrapper]: true,
    'isActive': isActive,
  });

  const imgClassNames = classNames({
    [styles.Img]: true,
    [styles.important]: true,
    [styles.isActive]: isActive,
  });

  const shadowClassNames = classNames({
    [styles.Shadow]: true,
    [styles.important]: true,
  });

  const titleClassNames = classNames({
    [styles.Title]: true,
    [styles.isActive]: isActive,
  });

  const tableWrapperClassNames = classNames({
    [styles.TableWrapper]: true,
    [styles.isActive]: isActive,
  });

  const calculationsClassNames = classNames({
    [styles.Calculations]: true,
    [styles.isActive]: isActive,
  });

  const textClassNames = classNames({
    [styles.Text]: true,
    [styles.isActive]: isActive,
  });

  return (
    <SlideWrapper ref={ref} id="slide4" className={slideClassNames}>
      <BgImg src={burningMoneyImage} className={imgClassNames} />
      <Shadow className={shadowClassNames} />

      <Modal isActive={modalIsActive} setIsActive={setModalIsActive}>
        <div className={styles.ModalContentWrapper}>
          <div className={styles.ModalContent}>
            <div className={styles.ModalContentSubTitle}>
              Исходные данные:
            </div>

            <div className={styles.ModalContentLine}>
              Два Backend-разработчика
            </div>

            <div className={styles.ModalContentLine}>
              Зарплата каждого: 250 000 ₽/мес
            </div>

            <div className={styles.ModalContentLine}>
              Вместе: 500 000 ₽/мес
            </div>

            <div className={styles.ModalContentLine}>
              +30% взносы и налоги = 650 000 ₽/мес
            </div>

            <div className={styles.ModalContentLine}>
              За год: 650 000 × 12 = 7 800 000 ₽
            </div>

            <div className={styles.ModalContentSubTitle}>
              Потери эффективности:
            </div>

            <div className={styles.ModalContentLine}>
              Без профильных знаний во фронтенде (React, Redux, webpack и т.д.)
            </div>

            <div className={styles.ModalContentLine}>
              3–4 месяца (в лучшем случае) — обучение, ошибки, медленная скорость: ~2 млн ₽ вхолостую
            </div>

            <div className={styles.ModalContentLine}>
              оставшиеся месяцы — низкая производительность (в 2–3 раза ниже): ещё 2–3 млн ₽ потерь
            </div>

            <div className={styles.ModalContentLine}>
              итоговая стоимость при переписывании кода через год: ещё +3–5 млн ₽
            </div>
          </div>
        </div>
      </Modal>

      <div className={calculationsClassNames} onClick={() => setModalIsActive(true)}>
        Подробнее
      </div>

      <Content>
        <div className={titleClassNames}>
          Замена на двух BE
        </div>

        <div className={tableWrapperClassNames}>
          <table>
            <thead>
              <tr>
                <th>
                Компонент
                </th>

                <th>
                Потери
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                &nbsp;
                </td>

                <td>
                &nbsp;
                </td>
              </tr>

              <tr>
                <td>
                Зарплаты и налоги
                </td>

                <td>
                7 800 000
                </td>
              </tr>

              <tr>
                <td>
                Обучение и ошибки
                </td>

                <td>
                2 000 000
                </td>
              </tr>

              <tr>
                <td>
                Низкая эффективность
                </td>

                <td>
                2 500 000
                </td>
              </tr>

              <tr>
                <td>
                Техдолг и переписывание
                </td>

                <td>
                4 000 000
                </td>
              </tr>

              <tr>
                <td>
                &nbsp;
                </td>

                <td>
                &nbsp;
                </td>
              </tr>

              <tr>
                <td>
                Совокупные потери за год
                </td>

                <td>
                ≈16 млн ₽
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={textClassNames}>
          Компания потратит в 4–5 раз больше, чем стоит экспертиза FE-разработчика.
          <br />
          И при этом получит хуже результат и долгосрочный убыток.
        </div>
      </Content>

      <ArrowButton isPrev onClick={prevArrowButtonClickHandler} />
      <ArrowButton onClick={nextArrowButtonClickHandler} />
    </SlideWrapper>
  );
};
