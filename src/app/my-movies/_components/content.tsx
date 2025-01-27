'use client';

import { MoviesScroll } from '@/components/shared/movies-scroll';
import { ScrollItem } from '@/components/shared/movies-scroll/scroll-item';
import { useMediaQuery } from 'react-responsive';
import styles from '../my-movies.module.css';
import { SelectedTabContent } from './selected-tab-content';
import { Tabs } from './tabs/tabs';

export function Content() {
	// const isMobile = useCheckMobileScreen();
	const isMobile = useMediaQuery({ maxWidth: 768 });

	return !isMobile ? (
		<>
			<h1 className={styles.title}>МОЁ</h1>

			<Tabs />
			<div className={styles.content}>
				<SelectedTabContent />
			</div>
		</>
	) : (
		<div className={styles.mobileContent}>
			<MoviesScroll sectionName='История просмотров'>
				<ScrollItem />
				<ScrollItem />
				<ScrollItem />
			</MoviesScroll>
			<MoviesScroll sectionName='Запомненные'>
				<ScrollItem />
				<ScrollItem />
				<ScrollItem />
			</MoviesScroll>
		</div>
	);
}
