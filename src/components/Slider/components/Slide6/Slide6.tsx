import classNames from 'classnames';

import RiskImage from 'assets/eco.jpg';

import { ArrowButton, Shadow, BgImg, Content, Title, Text } from 'components';

import { simulateWheel } from 'utils';

import { SlideWrapper } from '../SlideWrapper';

import styles from './Slide6.scss';

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
    <SlideWrapper ref={ref} id="slide6" className={styles.Wrapper}>
      <BgImg src={RiskImage} className={imageClassNames} />
      <Shadow />

      <Content>
        <Title className={titleClassNames}>
          Заключение
        </Title>

        <Text className={textClassNames}>
          Инвестиции в экспертизу — это не траты, а экономия.
          <br />
          <br />
          Один сильный специалист может сэкономить компании
          <br />
          десятки миллионов рублей и годы времени.
        </Text>
      </Content>

      <ArrowButton isPrev onClick={prevArrowButtonClickHandler} />
    </SlideWrapper>
  );
};
