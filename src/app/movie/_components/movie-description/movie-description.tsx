'use client';

import clsx from 'clsx';
import { useState } from 'react';
import styles from './movie-description.module.css';

export function MovieDescription({
	movieDesc = 'error',
}: {
	movieDesc?: string;
}) {
	const [isCollapse, setIsCollapse] = useState(true);

	return (
		<div>
			<p className={clsx(styles.movieDesc, isCollapse && styles.hidden)}>
				{movieDesc}
			</p>
			<button
				className={styles.showMoreButton}
				onClick={() => setIsCollapse(prev => !prev)}
			>
				Подробнее описание
			</button>
		</div>
	);
}
