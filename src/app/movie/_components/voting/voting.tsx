'use client';

import { Button } from '@/shared/ui/Button';
import { Star } from 'lucide-react';
import { useState } from 'react';
import styles from './voting.module.css';

function VotingStar({
	starNumber,
	color,
	onStarSelect,
}: {
	starNumber: number;
	color: string;
	onStarSelect?: () => void;
}) {
	return (
		<button onClick={onStarSelect} style={{ position: 'relative' }}>
			<Star size={48} fill={color} color={color} strokeWidth={0} />
			<span className={styles.starNumber}>{starNumber}</span>
		</button>
	);
}

export function Voting() {
	const [selectedStars, setSelectedStars] = useState(0);

	return (
		<div className={styles.chooseRatingWrapper}>
			{selectedStars === 0 ? (
				<h2>Поставьте оценку</h2>
			) : (
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<h2>Ваша оценка — {selectedStars}</h2>
					<Button
						style={{ padding: '5px 10px' }}
						buttonColor='transparent'
						buttonText='Удалить'
						onClick={() => setSelectedStars(0)}
					/>
				</div>
			)}

			<p>Оценки улучшают ваши рекомендации</p>

			<div className={styles.starsWrapper}>
				{[...new Array(10)].map((_, index) => (
					<VotingStar
						key={index}
						starNumber={index + 1}
						color={
							selectedStars > index
								? 'rgb(255, 182, 86)'
								: 'rgba(139, 136, 146, 0.32)'
						}
						onStarSelect={() => {
							setSelectedStars(index + 1);
						}}
					/>
				))}
			</div>
		</div>
	);
}
