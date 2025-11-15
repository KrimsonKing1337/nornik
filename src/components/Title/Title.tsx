import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import styles from './Title.scss';

export type TitleProps = PropsWithChildren & {
  className?: string;
};

export const Title = ({ children, className = '' }: TitleProps) => {
  const contentClassNames = classNames({
    [styles.Wrapper]: true,
    [className]: !!className,
  });

  return (
    <div className={contentClassNames}>
      {children}
    </div>
  );
};
