import classNames from 'classnames';

import IconArrowRight from 'assets/i-arrow-right.svg';

import styles from './ArrowButton.scss';

export type ArrowButtonProps = {
  isPrev?: boolean;
  className?: string;
  onClick?: () => void;
};

export const ArrowButton = ({ isPrev = false, className = '', onClick }: ArrowButtonProps) => {
  const buttonClassNames = classNames({
    [styles.Wrapper]: true,
    [styles.isPrev]: isPrev,
    [className]: !!className,
  });

  return (
    <img
      src={IconArrowRight}
      alt=""
      className={buttonClassNames}
      onClick={onClick}
    />
  );
};
