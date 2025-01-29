import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { Content } from './_components/content';
import styles from './my-movies.module.css';

export const metadata: Metadata = {
	title: 'Моё',
	...NO_INDEX_PAGE,
};

// const DynamicContent = dynamic(
// 	() => import('./_components/content').then(module => module.Content),
// 	{
// 		ssr: false,
// 	}
// );

export default function MyMoviesPage() {
	return (
		<main className={styles.main}>
			<Suspense
				fallback={<div>Loading... (will appear in future updates)</div>}
			>
				<Content />
			</Suspense>
		</main>
	);
}
