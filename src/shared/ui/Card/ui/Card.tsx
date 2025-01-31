import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren, ReactNode, RefObject } from 'react';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	ref?: RefObject<HTMLDivElement | null>;
	header?: ReactNode;
	footer?: ReactNode;
	className?: string;
}

export function Card({
	ref,
	header,
	footer,
	className,
	children,
	...props
}: PropsWithChildren<CardProps>) {
	return (
		<div className={clsx(styles.cardWrapper, className)} ref={ref} {...props}>
			{header && <>{header}</>}
			{children}
			{footer && <>{footer}</>}
		</div>
	);
}
