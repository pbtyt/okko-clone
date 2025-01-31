import type { MovieType } from '@/shared/api/types';
import { Card } from '@/shared/ui/Card';
import { Ellipsis } from 'lucide-react';
import styles from './ContinueMovieCard.module.css';

interface ContinueMovieCardProps {
	item?: Partial<MovieType>;
}

export function ContinueMovieCard({ item }: ContinueMovieCardProps) {
	return (
		<Card
			style={{ flexDirection: 'column', background: 'none' }}
			footer={
				<div className={styles.footerWrapper}>
					<div className={styles.progress}></div>
					<div className={styles.progressFill} style={{ width: '100px' }}></div>
					<div
						style={{
							display: 'flex',
							width: '100%',
							justifyContent: 'space-between',
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '2px',
							}}
						>
							<span className={styles.title}>Еретик</span>
							<span className={styles.timePerEpisode}>25 мин</span>
							<span className={styles.time}>1 час 30 мин</span>
						</div>
						<button
							// ref={ref}
							style={{ alignSelf: 'center' }}
							// onClick={handleOnMoreOptions}
						>
							<Ellipsis
								fill='rgba(255, 255, 255, 0.96)'
								color='rgba(255, 255, 255, 0.96)'
							/>
						</button>
					</div>
				</div>
			}
		>
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
