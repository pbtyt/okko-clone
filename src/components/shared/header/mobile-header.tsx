'use client';

import { SITE_ROUTES_BASE } from '@/config/page-url.config';
import { useHeaderStore } from '@/store/header.store';
import Link from 'next/link';
import styles from './header.module.css';

export function MobileHeader() {
	const { currentHeaderTitle } = useHeaderStore();

	const handleOnProfileClick = () => {};
	return (
		<header className={styles.header}>
			{currentHeaderTitle === '' ? (
				<Link href={SITE_ROUTES_BASE.HOME} className={styles.logo}>
					<img
						src='https://clients-static.okko.tv/graphics/logo/okko/okko-x05.png'
						alt='Okko Logo'
						className={styles.logoImg}
					/>
				</Link>
			) : (
				<h4>{currentHeaderTitle}</h4>
			)}
			<button className={styles.navButton} onClick={handleOnProfileClick}>
				<div className={styles.profileButton}>
					<img
						src='//static.okko.tv/images/v4/a5c64021-ee8d-4b4a-8dae-65f2cb602845?width=40&scale=1&quality=80&mediaType=webp'
						alt=''
						className={styles.profileImg}
					/>
				</div>
			</button>
		</header>
	);
}
