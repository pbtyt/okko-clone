import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Metadata } from 'next';
import Link from 'next/link';
import { Collections } from './_components/collections';
import styles from './catalog-page.module.css';

export const metadata: Metadata = {
	title: 'Каталог',
	...NO_INDEX_PAGE,
};
export default function CatalogPage() {
	return (
		<div style={{ paddingTop: '50px', marginBottom: '48px' }}>
			<Collections />
			<section className={styles.genres}>
				<h3>Жанры</h3>
				<div className={styles.genresGrid}>
					<div className={styles.genresColumn}>
						<Link href='' className={styles.genre}>
							Комедии
						</Link>
						<Link href='' className={styles.genre}>
							Мультфильмы
						</Link>
						<Link href='' className={styles.genre}>
							Музыкальное
						</Link>
						<Link href='' className={styles.genre}>
							Документальное
						</Link>
					</div>
					<div className={styles.genresColumn}>
						<Link href='' className={styles.genre}>
							Комедии
						</Link>
						<Link href='' className={styles.genre}>
							Мультфильмы
						</Link>
						<Link href='' className={styles.genre}>
							Музыкальное
						</Link>
						<Link href='' className={styles.genre}>
							Документальное
						</Link>
					</div>
					<div className={styles.genresColumn}>
						<Link href='' className={styles.genre}>
							Комедии
						</Link>
						<Link href='' className={styles.genre}>
							Мультфильмы
						</Link>
						<Link href='' className={styles.genre}>
							Музыкальное
						</Link>
						<Link href='' className={styles.genre}>
							Документальное
						</Link>
					</div>
					<div className={styles.genresColumn}>
						<Link href='' className={styles.genre}>
							Комедии
						</Link>
						<Link href='' className={styles.genre}>
							Мультфильмы
						</Link>
						<Link href='' className={styles.genre}>
							Музыкальное
						</Link>
						<Link href='' className={styles.genre}>
							Документальное
						</Link>
					</div>
					<div className={styles.genresColumn}>
						<Link href='' className={styles.genre}>
							Комедии
						</Link>
						<Link href='' className={styles.genre}>
							Мультфильмы
						</Link>
						<Link href='' className={styles.genre}>
							Музыкальное
						</Link>
						<Link href='' className={styles.genre}>
							Документальное
						</Link>
					</div>
					<div className={styles.genresColumn}>
						<Link href='' className={styles.genre}>
							Комедии
						</Link>
						<Link href='' className={styles.genre}>
							Мультфильмы
						</Link>
						<Link href='' className={styles.genre}>
							Музыкальное
						</Link>
						<Link href='' className={styles.genre}>
							Документальное
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
