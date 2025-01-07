'use client';

import { clsx } from 'clsx';
import { MoveLeft, MoveRight } from 'lucide-react';
import { PropsWithChildren, RefObject, useRef, useState } from 'react';
import styles from './scroll.module.css';

enum ArrowDirection {
	Left,
	Right,
}

interface IArrow {
	scrollRef: RefObject<HTMLDivElement | null>;
	scrollStep: number;
	direction: ArrowDirection;
}

function Arrow({ scrollRef, scrollStep, direction }: IArrow) {
	const [arrowHover, setArrowHover] = useState<boolean>(false);
	return (
		<div
			className={styles.arrowWrapper}
			style={
				direction === ArrowDirection.Right
					? { right: '0', justifyContent: 'end' }
					: { left: '0', justifyContent: 'start' }
			}
			onMouseEnter={() => setArrowHover(true)}
			onMouseLeave={() => setArrowHover(false)}
		>
			<button
				className={styles.arrow}
				style={
					arrowHover
						? {
								display: 'flex',
								transform: `translateX(${
									direction === ArrowDirection.Right ? '15px' : '-15px'
								})`,
						  }
						: {}
				}
				onClick={() => {
					if (!scrollRef?.current) return;

					if (direction === ArrowDirection.Right) {
						if (scrollRef.current.scrollLeft >= 300) setArrowHover(false);
						scrollRef.current.scrollLeft += scrollStep;
					} else {
						if (scrollRef.current.scrollLeft <= 0) setArrowHover(false);
						scrollRef.current.scrollLeft -= scrollStep;
					}
				}}
			>
				{direction === ArrowDirection.Right ? (
					<MoveRight color='var(--text-primary)' size={15} />
				) : (
					<MoveLeft color='var(--text-primary)' size={15} />
				)}
			</button>
		</div>
	);
}

interface IScroll {
	className?: string;
	scrollStep?: number;
	hideArrows?: boolean;
}

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
					<Arrow
						scrollRef={scrollRef}
						scrollStep={scrollStep}
						direction={ArrowDirection.Right}
					/>

					<Arrow
						scrollRef={scrollRef}
						scrollStep={scrollStep}
						direction={ArrowDirection.Left}
					/>
				</>
			)}
		</div>
	);
}
