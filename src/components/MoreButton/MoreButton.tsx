import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import styles from './MoreButton.scss';

export type MoreButtonProps = PropsWithChildren & {
  className?: string;
  onClick?: () => void;
};

export const MoreButton = ({ children, className = '', onClick }: MoreButtonProps) => {
  const contentClassNames = classNames({
    [styles.Wrapper]: true,
    [className]: !!className,
  });

  return (
    <div className={contentClassNames} onClick={onClick}>
      {children}
    </div>
  );
};
