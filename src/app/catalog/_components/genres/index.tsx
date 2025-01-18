import { GENRES_DATA, GenresDataType } from '@/data/genres.data';
import Link from 'next/link';
import styles from './genres.module.css';

const chunkGenres = (
	array: GenresDataType,
	size: number
): Array<GenresDataType> => {
	const result = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	return result;
};
const groupedGenres = chunkGenres(GENRES_DATA, 4);

export function Genres() {
	return (
		<>
			{groupedGenres.map((group, index) => (
				<div className={styles.genresColumn} key={index}>
					{group.map(genreEl => (
						<Link key={genreEl.id} href={genreEl.link} className={styles.genre}>
							{genreEl.label}
						</Link>
					))}
				</div>
			))}
		</>
	);
}
