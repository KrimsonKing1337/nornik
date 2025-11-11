import classNames from 'classnames';

import IconArrowRight from 'assets/i-arrow-right.svg';

import styles from './ArrowButton.scss';

export type ArrowButtonProps = {
  className?: string;
  onClick?: () => void;
};

export const ArrowButton = ({ className = '', onClick }: ArrowButtonProps) => {
  const buttonClassNames = classNames({
    [styles.Wrapper]: true,
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
