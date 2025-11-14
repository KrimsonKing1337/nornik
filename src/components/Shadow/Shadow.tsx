import classNames from 'classnames';

import styles from './Shadow.scss';

export type ShadowProps = {
  className?: string;
};

export const Shadow = ({ className = '' }: ShadowProps) => {
  const shadowClassNames = classNames({
    [styles.Wrapper]: true,
    [className]: !!className,
  });

  return (
    <div className={shadowClassNames} />
  );
};
