import { MovieGenreType } from '@/shared/api/types';
import { Button } from '@/shared/ui/Button';
import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './GenreButton.module.css';

interface GenreButtonProps {
	icon: ReactNode;
	genre: MovieGenreType;
}

export function GenreButton({ icon, genre }: GenreButtonProps) {
	return (
		<Link href={genre.link}>
			<Button
				withoutBorder
				buttonText={genre.label}
				buttonColor='dark'
				className={clsx(styles.button, styles.genre)}
			>
				{icon}
			</Button>
		</Link>
	);
}
