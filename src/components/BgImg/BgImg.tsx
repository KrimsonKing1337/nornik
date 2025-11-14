import classNames from 'classnames';

import styles from './BgImg.scss';

export type BgImgProps = {
  src: string;
  className?: string;
};

export const BgImg = ({ src, className = '' }: BgImgProps) => {
  const imgClassNames = classNames({
    [styles.Img]: true,
    [className]: !!className,
  });

  return (
    <img src={src} alt="" className={imgClassNames} />
  );
};
