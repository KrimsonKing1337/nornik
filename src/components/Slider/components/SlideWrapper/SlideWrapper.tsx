import type { PropsWithChildren, HTMLAttributes } from 'react';

import classNames from 'classnames';

import styles from './SlideWrapper.scss';

export type SlideWrapperProps = PropsWithChildren & HTMLAttributes<HTMLDivElement> & {
  ref?: React.Ref<HTMLDivElement>;
};

export const SlideWrapper = ({ ref, children, id = '', className = '' }: SlideWrapperProps) => {
  const wrapperClassNames = classNames({
    [styles.Wrapper]: true,
    [className]: !!className,
  });

  return (
    <div ref={ref} id={id} className={wrapperClassNames}>
      {children}
    </div>
  );
};
