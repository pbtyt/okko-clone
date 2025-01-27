'use client';

import { MOVIES_EXAMPLE_DATA } from '@/data/movies.data';
import { MovieType } from '@/types/movie.types';
import clsx from 'clsx';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controls } from '../_components/controls';
import { MovieDescription } from '../_components/movie-description/movie-description';
import { Voting } from '../_components/voting/voting';
import styles from './movie.module.css';

export default function MovieClientPage() {
	const { mid: movieID } = useParams<{ mid: string }>();
	const [movieData, setMovieData] = useState<MovieType>();

	useEffect(() => {
		setMovieData(
			MOVIES_EXAMPLE_DATA.find(movie => movie.id === Number(movieID))
		);
	}, [movieID]);

	return (
		<main className={styles.main}>
			<section className={styles.movieInfoWrapper}>
				<div className={styles.previewWrapper}>
					<div className={styles.coverWrapper}>
						<img
							src='https://static.okko.tv/images/v4/efa2dd4c-99fe-4cec-8a5d-50b77e90599d?width=1920&scale=1&quality=80&mediaType=webp'
							alt={movieData?.title.eng}
							className={styles.cover}
						/>
					</div>
				</div>

				<div className={styles.movieInfo}>
					<div className={styles.movieTitle}>
						<div className={styles.movieTitleCoverWrapper}>
							<img
								src='https://static.okko.tv/images/v4/30fa0e06-7f88-42e5-8347-8d1376b68390?width=420&scale=1&quality=80&mediaType=webp&trimBorder=true'
								alt={`${movieData?.title.eng} Movie Title Cover`}
								className={styles.movieTitleCover}
							/>
						</div>
					</div>
					<div className={styles.movieSubInfo}>
						<div className={styles.movieRating}>
							<span>{movieData?.rating}</span>
						</div>
						<span>{movieData?.year}</span>
						{movieData?.genres.map(genreData => (
							<span key={genreData.id}>{genreData.genreTitle}</span>
						))}
						<span>{movieData?.time}</span>
						<span>Rus, Eng</span>
						<span>18+</span>
					</div>
					<p className={styles.movieTeaserDesc}>
						{movieData?.teaserDescription}
					</p>

					<div className={styles.movieProd}>
						<div className={styles.movieProdMember}>
							<span className={styles.movieProdMemberTitle}>Режиссёр: </span>
							<div className={styles.movieProdMemberLinks}>
								<Link href='' className={styles.movieProdMemberLink}>
									{movieData?.filmCreator[0].filmCreator}
								</Link>
							</div>
						</div>
						<div className={styles.movieProdMember}>
							<span className={styles.movieProdMemberTitle}>Актеры: </span>
							<div className={styles.movieProdMemberLinks}>
								{movieData?.actors.slice(0, 3).map(actorData => (
									<Link
										href={actorData.link}
										className={styles.movieProdMemberLink}
										key={actorData.id}
									>
										{actorData.name}
									</Link>
								))}
							</div>
						</div>
					</div>

					<div className={styles.movieControls}>
						<Controls movieID={Number(movieID)} />
					</div>
				</div>
			</section>
			<section className={styles.descWrapper}>
				<div className={styles.tabs}>
					<div className={styles.tab}>
						<span className={clsx(styles.tabText, styles.active)}>
							Описание
						</span>
					</div>
				</div>
				<div
					style={{
						marginTop: '1.25rem',
						display: 'grid',
						columnGap: '1rem',
						gridTemplateColumns: '1fr 1fr',
					}}
				>
					<MovieDescription movieDesc={movieData?.description} />
					<Voting />
				</div>
			</section>
			<section className={styles.similarWrapper}></section>
			<section className={styles.reviewWrapper}></section>
			<section className={styles.movieStatsWrapper}>
				<div className={styles.movieStatColumn}>
					<h2 className={styles.movieStatColumnTitle}>Информация</h2>
					<div className={styles.movieStat}>
						<div className={styles.movieStatItem}>
							<div className={styles.movieStatItemTitle}>Страна</div>
							<div className={styles.movieStatItemValue}>
								{movieData?.country
									.map(el => el.country)
									.join(', ')
									.trim()}
							</div>
						</div>
						<div className={styles.movieStatItem}>
							<div className={styles.movieStatItemTitle}>Жанр</div>
							<div className={styles.movieStatItemValue}>
								{movieData?.genres
									.map(el => el.genreTitle)
									.join(', ')
									.trim()}
							</div>
						</div>
						<div className={styles.movieStatItem}>
							<div className={styles.movieStatItemTitle}>
								Оригинальное название
							</div>
							<div className={styles.movieStatItemValue}>
								{movieData?.title.original}
							</div>
						</div>
					</div>
				</div>
				<div className={styles.movieStatColumn}>
					<h2 className={styles.movieStatColumnTitle}>Съёмочная группа</h2>
					<div className={styles.movieStat}>
						<div className={styles.movieStatItem}>
							<div className={styles.movieStatItemTitle}>Режиссёры</div>
							<div className={styles.movieStatItemValue}>
								{movieData?.filmCreator
									.map(el => el.filmCreator)
									.join(', ')
									.trim()}
							</div>
						</div>
						<div className={styles.movieStatItem}>
							<div className={styles.movieStatItemTitle}>Актёры</div>
							<div className={styles.movieStatItemValue}>
								{movieData?.actors
									.map(el => el.name)
									.join(', ')
									.trim()}
							</div>
						</div>
						{/* <div className={styles.movieStatItem}>
							<div className={styles.movieStatItemTitle}>Продюсеры</div>
							<div className={styles.movieStatItemValue}>
								Джулия Глаузи, Жанетт Волтурно, Кэти Аквино, Скотт Бек, Лилиан
								Бедфорд, Каи Рака, Стейси Шер, Брайан Вудс
							</div>
						</div>
						<div className={styles.movieStatItem}>
							<div className={styles.movieStatItemTitle}>Сценаристы</div>
							<div className={styles.movieStatItemValue}>
								Скотт Бек, Брайан Вудс
							</div>
						</div>
						<div className={styles.movieStatItem}>
							<div className={styles.movieStatItemTitle}>Оператор</div>
							<div className={styles.movieStatItemValue}>Чон Джон-хун</div>
						</div> */}
					</div>
				</div>
				<div className={styles.movieStatColumn}>
					<h2 className={styles.movieStatColumnTitle}>Звук и субтитры</h2>
					<div className={styles.movieStat}>
						<div className={styles.movieStatItem}>
							<div className={styles.movieStatItemTitle}>Аудиодорожки</div>
							<div className={styles.movieStatItemValue}>
								Русский, Английский
							</div>
						</div>
						<div className={styles.movieStatItem}>
							<div className={styles.movieStatItemTitle}>Качество</div>
							<div className={styles.movieStatItemValue}>
								{movieData?.quality
									.map(el => el.quality.label)
									.join(', ')
									.trim()}
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
