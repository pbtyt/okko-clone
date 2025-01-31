import type { MovieType } from '@/shared/api/types';
import { Card } from '@/shared/ui/Card';
import styles from './MovieCard.module.css';

interface MovieCardProps {
	item?: Partial<MovieType>;
}

export function MovieCard({ item }: MovieCardProps) {
	return (
		<Card>
			<img
				src={
					item?.cover_link ||
					'https://static.okko.tv/images/v4/52c18c21-efc9-4c45-807f-476231a02cea?width=319&scale=1&quality=80&mediaType=webp'
				}
				alt='Movie Poster'
				className={styles.cardPoster}
			/>
		</Card>
	);
}
