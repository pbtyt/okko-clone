import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren, ReactNode, RefObject } from 'react';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	ref?: RefObject<HTMLDivElement | null>;
	footer?: ReactNode;
	className?: string;
}

export function Card({
	ref,
	footer,
	className,
	children,
	...props
}: PropsWithChildren<CardProps>) {
	return (
		<div className={clsx(styles.cardWrapper, className)} ref={ref} {...props}>
			{children}
			{footer && <>{footer}</>}
		</div>
	);
}
