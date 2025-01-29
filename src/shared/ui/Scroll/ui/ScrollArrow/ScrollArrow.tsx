'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ArrowDirection, IArrow } from '../../model/types';
import styles from './ScrollArrow.module.css';

export function ScrollArrow({ scrollRef, scrollStep, direction }: IArrow) {
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
								display: 'block',
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
					<ChevronRight
						color='rgba(255, 255, 255, 0.96)'
						size={15}
						style={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}
					/>
				) : (
					<ChevronLeft
						color='rgba(255, 255, 255, 0.96)'
						size={15}
						style={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}
					/>
				)}
			</button>
		</div>
	);
}
