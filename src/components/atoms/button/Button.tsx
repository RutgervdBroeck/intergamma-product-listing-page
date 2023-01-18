import styles from './Button.module.css';
import { MouseEventHandler, PropsWithChildren } from 'react';

export interface ButtonProps extends PropsWithChildren {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
}

export const Button = ({ onClick, isActive, children }: ButtonProps) => (
  <button className={`${styles.button} ${isActive && styles.active}`} onClick={onClick}>
    {children}
  </button>
);