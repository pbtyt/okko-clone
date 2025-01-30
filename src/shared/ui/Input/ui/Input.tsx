import clsx from 'clsx';
import { InputProps } from '../model/types';
import styles from './Input.module.css';

export function Input({ className, ...rest }: InputProps) {
	return <input className={clsx(styles.input, className)} {...rest} />;
}
