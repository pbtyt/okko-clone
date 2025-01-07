'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useRef } from 'react';
import styles from './carousel.module.css';

export function Carousel() {
	const carouselRef = useRef<HTMLUListElement>(null);
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperWControls}>
				<div className={clsx(styles.carousel, styles.center)}>
					{/* 
						need add styles to shifting
						right: translateX(calc(var(--item-width-with-spacing) * -1)); transition: transform 800ms ease;
						left: translateX(calc(var(--item-width-with-spacing) * -1)); transition: transform 800ms ease;
					*/}
					<ul className={styles.carouselList} style={{}} ref={carouselRef}>
						<li className={styles.carouselListItem}>
							<Link href={''}>
								<img
									src='https://static.okko.tv/images/v4/6d557c19-176e-4888-af40-452dea2ba54e?height=453&scale=1&quality=80&mediaType=webp'
									alt=''
									className={styles.carouselListItemPoster}
								/>
							</Link>
						</li>
						<li className={styles.carouselListItem}>
							<Link href={''}>
								<img
									src='https://static.okko.tv/images/v4/6d557c19-176e-4888-af40-452dea2ba54e?height=453&scale=1&quality=80&mediaType=webp'
									alt=''
									className={styles.carouselListItemPoster}
								/>
							</Link>
						</li>
						<li className={styles.carouselListItem}>
							<Link href={''}>
								<img
									src='https://static.okko.tv/images/v4/6d557c19-176e-4888-af40-452dea2ba54e?height=453&scale=1&quality=80&mediaType=webp'
									alt=''
									className={styles.carouselListItemPoster}
								/>
							</Link>
						</li>
						<li className={styles.carouselListItem}>
							<Link href={''}>
								<img
									src='https://static.okko.tv/images/v4/6d557c19-176e-4888-af40-452dea2ba54e?height=453&scale=1&quality=80&mediaType=webp'
									alt=''
									className={styles.carouselListItemPoster}
								/>
							</Link>
						</li>
						<li className={styles.carouselListItem}>
							<Link href={''}>
								<img
									src='https://static.okko.tv/images/v4/6d557c19-176e-4888-af40-452dea2ba54e?height=453&scale=1&quality=80&mediaType=webp'
									alt=''
									className={styles.carouselListItemPoster}
								/>
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.controls}>
					{/* <button
						onClick={() => {
							if (!carouselRef?.current) return;
							carouselRef.current.setAttribute(
								'style',
								'transform: translateX(calc(var(--item-width-with-spacing) * 1)); transition: transform 900ms ease;'
							);
						}}
					>
						Left
					</button>
					<button
						onClick={() => {
							if (!carouselRef?.current) return;
							carouselRef.current.setAttribute(
								'style',
								'transform: translateX(calc(var(--item-width-with-spacing) * -1)); transition: transform 900ms ease;'
							);
						}}
					>
						Right
					</button> */}
				</div>
			</div>
		</div>
	);
}
