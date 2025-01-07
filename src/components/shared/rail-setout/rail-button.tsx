import { Film } from 'lucide-react';
import Link from 'next/link';
import styles from './rail-button.module.css';
export function RailButton() {
	return (
		<Link href={''}>
			<button className={styles.railButton}>
				<Film color='rgba(255, 255, 255, 0.96)' />
				<span>Фильмы</span>
			</button>
		</Link>
	);
}
