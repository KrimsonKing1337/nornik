import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import styles from './Content.scss';

export type ContentProps = PropsWithChildren & {
  className?: string;
};

export const Content = ({ children, className = '' }: ContentProps) => {
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
