import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './rail-button.module.css';

interface IRailButton {
	RailButtonIcon: ReactNode;
	RailButtonText: string;
	RailButtonLink?: string;
}

export function RailButton({
	RailButtonIcon,
	RailButtonText,
	RailButtonLink = '',
}: IRailButton) {
	return (
		<Link href={RailButtonLink}>
			<button className={styles.railButton}>
				<div className={styles.railInfo}>
					{RailButtonIcon}
					{/* <Film color='rgba(255, 255, 255, 0.96)' /> */}
					<span>{RailButtonText}</span>
				</div>
			</button>
		</Link>
	);
}
