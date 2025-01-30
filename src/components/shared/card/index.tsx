'use client';

import clsx from 'clsx';
import { HTMLAttributes, ReactNode, RefObject } from 'react';
import styles from './card.module.css';

interface ICard extends HTMLAttributes<HTMLDivElement> {
	ref?: RefObject<HTMLDivElement | null>;
	footer?: ReactNode;
	imgSrc?: string;
	className?: string;
}

export function Card({
	ref,
	footer,
	imgSrc = 'https://static.okko.tv/images/v4/52c18c21-efc9-4c45-807f-476231a02cea?width=319&scale=1&quality=80&mediaType=webp',
	className,
	...rest
}: ICard) {
	return (
		<div className={clsx(styles.cardWrapper, className)} ref={ref} {...rest}>
			<img src={imgSrc} alt='Movie Poster' className={styles.cardPoster} />
			{footer && <>{footer}</>}
		</div>
	);
}
