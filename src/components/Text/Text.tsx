import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import styles from './Text.scss';

export type TextProps = PropsWithChildren & {
  className?: string;
};

export const Text = ({ children, className = '' }: TextProps) => {
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
