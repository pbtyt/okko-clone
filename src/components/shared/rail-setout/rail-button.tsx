import { Film, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import styles from './rail-button.module.css';
import { ReactNode } from 'react';

interface IRailButton
{
	RailButtonIcon: ReactNode;
	RailButtonText: string;
	RailButtonLink?: string;
}

export function RailButton(
	{
		RailButtonIcon,
		RailButtonText,
		RailButtonLink = ""
	}: IRailButton
) {
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
