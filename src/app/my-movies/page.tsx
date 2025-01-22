import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Metadata } from 'next';
import { Content } from './_components/content';
import styles from './my-movies.module.css';

export const metadata: Metadata = {
	title: 'Моё',
	...NO_INDEX_PAGE,
};

export default function MyMoviesPage() {
	return (
		<main className={styles.main}>
			<Content />
		</main>
	);
}
