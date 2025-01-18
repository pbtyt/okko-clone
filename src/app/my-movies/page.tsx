import { ScrollItem } from '@/components/shared/movies-scroll/scroll-item';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Metadata } from 'next';
import { Tabs } from './_components/tabs';
import styles from './my-movies.module.css';

export const metadata: Metadata = {
	title: 'Моё',
	...NO_INDEX_PAGE,
};

export default function MyMoviesPage() {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>МОЁ</h1>
			<Tabs />

			<div className={styles.content}>
				<ScrollItem />
				<ScrollItem />
				<ScrollItem />
				<ScrollItem />
				<ScrollItem />
				<ScrollItem />
				<ScrollItem />
			</div>
		</main>
	);
}
