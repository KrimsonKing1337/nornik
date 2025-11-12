import classNames from 'classnames';

import curveImage from 'assets/curve_red_axes_downward_transparent.png';

import { ArrowButton } from 'components';

import { simulateWheel } from 'utils';

import { SlideWrapper } from '../SlideWrapper';

import styles from './Slide4.scss';

export type Slide4Props = {
  ref: React.Ref<HTMLDivElement>;
  isActive?: boolean;
};

export const Slide4 = ({ ref, isActive }: Slide4Props) => {
  const arrowButtonClickHandler = () => {
    simulateWheel(1);
  };

  const slideClassNames = classNames({
    [styles.Wrapper]: true,
    'isActive': isActive,
  });

  const imgClassNames = classNames({
    [styles.Img]: true,
    [styles.isActive]: isActive,
  });

  const tableWrapperClassNames = classNames({
    [styles.TableWrapper]: true,
    'isActive': isActive,
  });

  return (
    <SlideWrapper ref={ref} id="slide3" className={slideClassNames}>
      <img src={curveImage} alt="" className={imgClassNames} />

      <div>
        Затраты в первый год.
        <br />
        Заменим FE двумя BE.
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

      <ArrowButton onClick={arrowButtonClickHandler} />
    </SlideWrapper>
  );
};
