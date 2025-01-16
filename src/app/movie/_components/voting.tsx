'use client';

import { Star } from 'lucide-react';
import { useState } from 'react';
import styles from './voting.module.css';

function VotingStar({
	color,
	onStarSelect,
}: {
	color: string;
	onStarSelect?: () => void;
}) {
	return (
		<button onClick={onStarSelect}>
			<Star size={48} fill={color} color={color} strokeWidth={0} />
		</button>
	);
}

export function Voting() {
	const [selectedStars, setSelectedStars] = useState(10);

	return (
		<div className={styles.starsWrapper}>
			{[...new Array(10)].map((_, index) => (
				<VotingStar
					key={index}
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
	);
}
