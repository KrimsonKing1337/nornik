import { type PropsWithChildren } from 'react';

import { createPortal } from 'react-dom';

import classNames from 'classnames';

import crossIcon from 'assets/i-cross.svg';

import styles from './Modal.scss';

export type ModalProps = PropsWithChildren & {
  isActive?: boolean;
  setIsActive?: (value: boolean) => void;
  className?: string;
};

export const Modal = ({
  children,
  isActive = false,
  setIsActive = () => {},
  className = '',
}: ModalProps) => {
  const contentClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const modalWheelHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const extraWrapperClassNames = classNames({
    [styles.ExtraWrapper]: true,
    [styles.isActive]: isActive,
    [className]: !!className,
  });

  const wrapperClassNames = classNames({
    [styles.Wrapper]: true,
    [styles.isActive]: isActive,
  });

  return createPortal(
    <div className={extraWrapperClassNames} onClick={() => {setIsActive(false);}} onWheel={modalWheelHandler}>
      <div className={wrapperClassNames} onClick={contentClickHandler}>
        <div className={styles.CloseButtonWrapper} onClick={() => {setIsActive(false);}}>
          <img src={crossIcon} alt="" />
        </div>

        <div className={styles.Content}>
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};
