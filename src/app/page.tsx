import { Carousel } from '@/components/shared/carousel';
import { MoviesScroll } from '@/components/shared/movies-scroll';
import { ScrollItem } from '@/components/shared/movies-scroll/scroll-item';
import { RailSetout } from '@/components/shared/rail-setout';
import { ContinueMovieCard } from '@/entities/movie';
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import type { Metadata } from 'next';
import styles from './home-page.module.css';

export const metadata: Metadata = {
	title: 'Главная страница',
	...NO_INDEX_PAGE,
};

export default function HomePage() {
	return (
		<main className={styles.main}>
			<Carousel />
			<RailSetout />
			<article className={styles.content}>
				<div className={styles.sectionsWrapper}>
					<MoviesScroll sectionName='Продолжить просмотр'>
						<ContinueMovieCard />
					</MoviesScroll>
					<MoviesScroll sectionName='Фильмы для вас'>
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
					</MoviesScroll>
					<MoviesScroll sectionName='Сериалы для вас'>
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
					</MoviesScroll>
					<MoviesScroll sectionName='Мультфильмы для вас'>
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
						<ScrollItem />
					</MoviesScroll>
					<MoviesScroll sectionName='Запомненные'>
						<ScrollItem />
					</MoviesScroll>
				</div>
			</article>
		</main>
	);
}
