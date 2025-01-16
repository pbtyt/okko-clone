import { Button } from '@/components/base-components/button';
import clsx from 'clsx';
import { Ban, Bookmark, Eye, Play } from 'lucide-react';
import Link from 'next/link';
import { Voting } from './_components/voting';
import styles from './movie.module.css';

export default function MoviePage() {
	return (
		<main className={styles.main}>
			<section className={styles.movieInfoWrapper}>
				<div className={styles.previewWrapper}>
					<div className={styles.coverWrapper}>
						<img
							src='https://static.okko.tv/images/v4/efa2dd4c-99fe-4cec-8a5d-50b77e90599d?width=1920&scale=1&quality=80&mediaType=webp'
							alt='Eretik'
							className={styles.cover}
						/>
					</div>
				</div>

				<div className={styles.movieInfo}>
					<div className={styles.movieTitle}>
						<div className={styles.movieTitleCoverWrapper}>
							<img
								src='https://static.okko.tv/images/v4/30fa0e06-7f88-42e5-8347-8d1376b68390?width=420&scale=1&quality=80&mediaType=webp&trimBorder=true'
								alt=''
								className={styles.movieTitleCover}
							/>
						</div>
					</div>
					<div className={styles.movieSubInfo}>
						<div className={styles.movieRating}>
							<span>6.5</span>
						</div>
						<span>2024</span>
						<span>Ужасы</span>
						<span>1 ч 47 мин</span>
						<span>Rus, Eng</span>
						<span>18+</span>
					</div>
					<p className={styles.movieTeaserDesc}>
						Мистер Рид устраивает для двух религиозных девушек серию испытаний
						на веру. Непредсказуемый хоррор с Хью Грантом
					</p>

					<div className={styles.movieProd}>
						<div className={styles.movieProdMember}>
							<span className={styles.movieProdMemberTitle}>Режиссёр: </span>
							<div className={styles.movieProdMemberLinks}>
								<Link href='' className={styles.movieProdMemberLink}>
									Скотт Бек
								</Link>
							</div>
						</div>
						<div className={styles.movieProdMember}>
							<span className={styles.movieProdMemberTitle}>Актеры: </span>
							<div className={styles.movieProdMemberLinks}>
								<Link href='' className={styles.movieProdMemberLink}>
									Хью Грант
								</Link>
								<Link href='' className={styles.movieProdMemberLink}>
									Софи Тэтчер
								</Link>
								<Link href='' className={styles.movieProdMemberLink}>
									Хлоя Ист
								</Link>
							</div>
						</div>
					</div>

					<div className={styles.movieControls}>
						<Button buttonText='Смотреть'>
							<Play fill='currentColor' size={20} />
						</Button>
						{/* <button
							className={styles.movieControlButton}
							style={{
								padding: '14px 20px',
								background:
									'linear-gradient(26.57deg, #3c1a70 0%, rgba(93, 14, 245, 0.83))',
							}}
						>
							<span>Смотреть</span>
						</button> */}
						<Button buttonText='Трейлер' buttonColor='gray' />
						<Button style={{ padding: '12px' }} buttonColor='dark'>
							<Bookmark color='currentColor' />
						</Button>
						<Button style={{ padding: '12px' }} buttonColor='dark'>
							<Eye color='currentColor' />
						</Button>
						<Button style={{ padding: '12px' }} buttonColor='dark'>
							<Ban color='currentColor' />
						</Button>
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
					<div>
						<p className={clsx(styles.movieDesc, styles.hidden)}>
							Две юные мормонки — сестра Пэкстон (Хлоя Ист) и сестра Барнс (Софи
							Тэтчер) — стучатся в дом к с виду безобидному мистеру Риду (Хью
							Грант). На самом деле он приготовил для них лабиринт из ловушек,
							который станет для веры гостей настоящей проверкой. Каждое
							изощренное испытание угрожает их жизням, но дороги назад нет.
							Мистер Рид закрыл все двери и не выпускает своих пленниц.
							Режиссеры Скотт Бек и Брайан Вудс известны по хоррору «Они» и
							фантастике «65». Также авторы писали сценарий дилогии «Тихое
							место». Премьера картины прошла на престижном фестивале в Торонто.
						</p>
						<button className={styles.showMoreButton}>
							Подробнее описание
						</button>
					</div>

					<div className={styles.chooseRatingWrapper}>
						<h2>Поставьте оценку</h2>
						<p>Оценки улучшают ваши рекомендации</p>
						<Voting />
					</div>
				</div>
			</section>
			<section className={styles.similarWrapper}></section>
			<section className={styles.reviewWrapper}></section>
			<section className={styles.movieStatWrapper}></section>
		</main>
	);
}
