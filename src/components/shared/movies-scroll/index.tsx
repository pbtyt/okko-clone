import { Scroll } from '@/shared/ui/Scroll';
import { PropsWithChildren } from 'react';
import styles from './movies-scroll.module.css';

interface IMoviesScroll {
	sectionName: string;
}

export function MoviesScroll({
	children,
	sectionName,
}: PropsWithChildren<IMoviesScroll>) {
	return (
		<section className={styles.scrollWrapper}>
			<h3 className={styles.sectionName}>{sectionName}</h3>
			<Scroll scrollStep={500} className={styles.scroll}>
				{children}
			</Scroll>
		</section>
	);
}
