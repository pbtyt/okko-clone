import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Metadata } from 'next';
import { SelectedTabContent } from './_components/selected-tab-content';
import { Tabs } from './_components/tabs/tabs';
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
				<SelectedTabContent />
			</div>
		</main>
	);
}
