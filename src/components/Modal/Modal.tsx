import { type PropsWithChildren } from 'react';

import { createPortal } from 'react-dom';

import classNames from 'classnames';

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
  const wrapperClassNames = classNames({
    [styles.Wrapper]: true,
    [styles.isActive]: isActive,
    [className]: !!className,
  });

  return createPortal(
    <div className={wrapperClassNames}>
      <div onClick={() => {setIsActive(false);}}>
        x
      </div>

      <div>
        {children}
      </div>
    </div>,
    document.body,
  );
};

// todo: крестик
