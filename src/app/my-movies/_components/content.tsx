'use client';

import { MoviesScroll } from '@/components/shared/movies-scroll';
import { ScrollItem } from '@/components/shared/movies-scroll/scroll-item';
import useCheckMobileScreen from '@/hooks/useCheckMobileScreen';
import styles from '../my-movies.module.css';
import { SelectedTabContent } from './selected-tab-content';
import { Tabs } from './tabs/tabs';
export function Content() {
	const isMobile = useCheckMobileScreen();
	return !isMobile ? (
		<>
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
