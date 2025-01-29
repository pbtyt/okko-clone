'use client';

import clsx from 'clsx';
import { PropsWithChildren, useRef } from 'react';
import { ArrowDirection, IScroll } from '../../model/types';
import { ScrollArrow } from '../ScrollArrow/ScrollArrow';
import styles from './Scroll.module.css';

export function Scroll({
	children,
	className,
	scrollStep = 80,
	hideArrows = false,
}: PropsWithChildren<IScroll>) {
	const scrollRef = useRef<HTMLDivElement>(null);
	return (
		<div className={styles.scrollWrapper}>
			<div className={clsx(styles.scroll, className)} ref={scrollRef}>
				{children}
			</div>

			{!hideArrows && (
				<>
					<ScrollArrow
						scrollRef={scrollRef}
						scrollStep={scrollStep}
						direction={ArrowDirection.Right}
					/>

					<ScrollArrow
						scrollRef={scrollRef}
						scrollStep={scrollStep}
						direction={ArrowDirection.Left}
					/>
				</>
			)}
		</div>
	);
}
