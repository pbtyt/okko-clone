import { Search } from 'lucide-react';
import styles from './search.module.css';

export function SearchInput() {
	return (
		<div className={styles.wrapper}>
			<Search color='rgba(255, 255, 255, 0.96)' strokeWidth={1.5} />
			<input
				type='search'
				className={styles.searchInput}
				placeholder='Название фильма, сериала или имя актера, режиссёра'
			/>
		</div>
	);
}
