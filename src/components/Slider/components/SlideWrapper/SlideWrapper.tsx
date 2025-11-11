import { PropsWithChildren } from 'react';

import classNames from 'classnames';

import styles from './SlideWrapper.scss';

export type SlideWrapperProps = PropsWithChildren & {
  id?: string;
  className?: string;
};

export const SlideWrapper = ({ children, id = '', className = '' }: SlideWrapperProps) => {
  const wrapperClassNames = classNames({
    [styles.Wrapper]: true,
    [className]: !!className,
  });

  return (
    <div id={id} className={wrapperClassNames}>
      {children}
    </div>
  );
};
