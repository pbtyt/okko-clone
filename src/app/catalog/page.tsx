import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Metadata } from 'next';
import { Collections } from './_components/collections';
import { Genres } from './_components/genres';
import styles from './catalog-page.module.css';

export const metadata: Metadata = {
	title: 'Каталог',
	...NO_INDEX_PAGE,
};
export default function CatalogPage() {
	return (
		<div className={styles.catalogWrapper}>
			<Collections />
			<section className={styles.genres}>
				<h3>Жанры</h3>

				<div className={styles.genresGrid}>
					<Genres />
				</div>
			</section>
		</div>
	);
}
