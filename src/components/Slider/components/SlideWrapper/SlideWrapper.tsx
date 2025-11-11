import { PropsWithChildren } from 'react';

import classNames from 'classnames';

import styles from './SlideWrapper.scss';

export type SlideWrapperProps = PropsWithChildren & {
  className?: string;
};

export const SlideWrapper = ({ children, className = '' }: SlideWrapperProps) => {
  const wrapperClassNames = classNames({
    [styles.Wrapper]: true,
    [className]: !!className,
  });

  return (
    <div className={wrapperClassNames}>
      {children}
    </div>
  );
};
