import clsx from 'clsx';
import { PropsWithChildren, ReactNode, RefObject } from 'react';
import styles from './Card.module.css';

interface CardProps {
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
