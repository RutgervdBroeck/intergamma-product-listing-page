import styles from './Image.module.css';

export interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

export const Image = ({ alt, ...props}: ImageProps) => (
  <img className={styles.image} alt={alt} {...props} />
);