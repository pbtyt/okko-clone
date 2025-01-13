'use client';

import styles from './header.module.css';

import { SITE_ROUTES_BASE } from '@/config/page-url.config';
import { useDropDown } from '@/hooks/useDropDown';
import { useModal } from '@/hooks/useModal';
import { getPosition } from '@/utils/getElementPosition';
import clsx from 'clsx';
import { Gift, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { PromoModal } from '../promo-modal';
import { SearchInput } from '../search';

export function Header() {
	const [isSearch, setIsSearch] = useState(false);

	const { setDropDownPosition, setIsDropDown, isDropDown } = useDropDown();

	const { showModal } = useModal();

	const ref = useRef(null);

	return (
		<header className={clsx(isSearch && styles.search, styles.header)}>
			<nav className={styles.navBar}>
				<Link href={SITE_ROUTES_BASE.HOME} className={styles.logo}>
					<img
						src='https://clients-static.okko.tv/graphics/logo/okko/okko-x05.png'
						alt='Okko Logo'
						className={styles.logoImg}
					/>
				</Link>

				{!isSearch ? (
					<ul className={styles.navButtons}>
						<li className={clsx(styles.navButton, 1 && styles.active)}>
							<Link href={SITE_ROUTES_BASE.HOME} className={styles.hover}>
								Главная
							</Link>
						</li>
						<li className={clsx(styles.navButton, 0 && styles.active)}>
							<Link href={SITE_ROUTES_BASE.CATALOG} className={styles.hover}>
								Каталог
							</Link>
						</li>
						<li className={clsx(styles.navButton, 0 && styles.active)}>
							<Link href={SITE_ROUTES_BASE.STORE} className={styles.hover}>
								Магазин
							</Link>
						</li>
						<li className={clsx(styles.navButton, 0 && styles.active)}>
							<Link href={SITE_ROUTES_BASE.MY_MOVIES} className={styles.hover}>
								Моё
							</Link>
						</li>
						<li className={clsx(styles.navButton, 0 && styles.active)}>
							<Link href={SITE_ROUTES_BASE.SPORT} className={styles.hover}>
								Спорт
							</Link>
						</li>
					</ul>
				) : (
					<SearchInput />
				)}
				<div style={{ flexGrow: '1' }}></div>
				<div className={styles.navButtons}>
					<button
						className={styles.navButton}
						onClick={() => setIsSearch(prev => !prev)}
					>
						{!isSearch ? (
							<Search color='rgba(255, 255, 255, 0.56)' />
						) : (
							<X color='rgba(255, 255, 255, 0.56)' />
						)}
					</button>

					<button
						className={clsx(styles.navButton)}
						onClick={() => showModal(<PromoModal />)}
					>
						<Gift color='rgba(255, 255, 255, 0.56)' />
						Ввести промокод
					</button>

					<button
						className={styles.navButton}
						ref={ref}
						onClick={() => {
							if (!ref?.current) return;

							setIsDropDown(!isDropDown);
							setDropDownPosition(getPosition(ref.current));
						}}
					>
						<div className={styles.profileButton}>
							<img
								src='//static.okko.tv/images/v4/a5c64021-ee8d-4b4a-8dae-65f2cb602845?width=40&scale=1&quality=80&mediaType=webp'
								alt=''
								className={styles.profileImg}
							/>
						</div>
					</button>
				</div>
			</nav>
		</header>
	);
}
