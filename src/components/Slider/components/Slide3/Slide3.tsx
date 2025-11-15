import { useState } from 'react';

import classNames from 'classnames';

import badUxImage from 'assets/good-vs-bad-ux.jpg';

import { ArrowButton, BgImg, Content, Modal, MoreButton, Shadow, Text, Title } from 'components';

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

  const prevArrowButtonClickHandler = () => {
    simulateWheel(-1);
  };

  const nextArrowButtonClickHandler = () => {
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
      <BgImg src={badUxImage} className={imgClassNames} />
      <Shadow />

      <Modal isActive={modalDetailsIsActive} setIsActive={setModalDetailsIsActive}>
        <div className={styles.ModalContentWrapper}>
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
        </div>
      </Modal>

      <Modal isActive={modalDesignIsActive} setIsActive={setModalDesignIsActive}>
        <div className={styles.ModalContentWrapper}>
          <div className={styles.ModalContent}>
            <div>
              <div className={styles.ModalContentTitle}>
                Почему хороший дизайн важен?
              </div>

              <div className={styles.ModalContentSubTitle}>
                → Меньше потерь времени сотрудников
              </div>

              <div className={styles.ModalContentLine}>
                Каждый лишний клик, поиск кнопки или непонятная форма
                — это потерянные секунды, которые на масштабе превращаются
                в часы и миллионы рублей.
              </div>

              <div className={styles.ModalContentLine}>
                Пример: если улучшение интерфейса экономит 5 секунд на задаче,
                а сотрудник делает таких задач 100 в день, то это уже 8 минут экономии в день.
                <br />
                При 4 000 сотрудниках это <b>~21 млн рублей</b> в год экономии.
              </div>

              <div className={styles.ModalContentSubTitle}>
                → Снижение ошибок и затрат на исправление
              </div>

              <div className={styles.ModalContentLine}>
                Плохой UX = ошибки при вводе данных, пропуски, дублирование.
              </div>

              <div className={styles.ModalContentLine}>
                Каждая ошибка требует времени на исправление, иногда вовлекает другие отделы.
              </div>

              <div className={styles.ModalContentLine}>
                Хороший UX (чёткая структура, валидация, понятные статусы) снижает количество ошибок в разы,
                уменьшая расходы на повторные действия и техподдержку.
              </div>

              <div className={styles.ModalContentSubTitle}>
                → Меньше обращений в поддержку и обучение
              </div>

              <div className={styles.ModalContentLine}>
                Когда интерфейс интуитивный, падает нагрузка на линию поддержки.
              </div>

              <div className={styles.ModalContentLine}>
                Не нужно тратить часы на обучение новым сотрудникам:
                хороший UX = обучение через использование.
              </div>

              <div className={styles.ModalContentLine}>
                По опыту крупных компаний,
                внедрение современного UI снижает количество тикетов на 20–40%,
                что может означать десятки человеко-месяцев экономии в год.
              </div>

              <div className={styles.ModalContentSubTitle}>
                → Повышение вовлечённости и удовлетворённости
              </div>

              <div className={styles.ModalContentLine}>
                Люди чаще и охотнее пользуются системой, где всё работает плавно и понятно.
              </div>

              <div className={styles.ModalContentLine}>
                Это повышает производительность, снижает саботаж
                и "теневые" обходные пути (Excel, личные чаты и т.п.),
                которые создают хаос в данных и потери контроля.
              </div>

              <div className={styles.ModalContentSubTitle}>
                → Ускорение внедрения изменений
              </div>

              <div className={styles.ModalContentLine}>
                Когда интерфейс унифицирован и логичен,
                внедрять новые функции можно быстрее - меньше тестирования
                и меньше шансов "сломать" привычные сценарии.
              </div>

              <div className={styles.ModalContentLine}>
                Это напрямую снижает затраты на разработку и сопровождение.
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <MoreButton className={moreDetailsClassNames} onClick={() => setModalDetailsIsActive(true)}>
        Расчёты
      </MoreButton>

      <MoreButton className={aboutDesignClassNames} onClick={() => setModalDesignIsActive(true)}>
        О дизайне
      </MoreButton>

      <Content>
        <Title className={titleClassNames}>
          Плохой UI/UX
        </Title>

        <Text className={textClassNames}>
          Простой сотрудника, вызванный плохим UI/UX даже на 10 минут в день,
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
          Плохой дизайн - это не просто "не красиво", - это большие потери для компании
        </Text>
      </Content>

      <ArrowButton isPrev onClick={prevArrowButtonClickHandler} />
      <ArrowButton onClick={nextArrowButtonClickHandler} />
    </SlideWrapper>
  );
};
