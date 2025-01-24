'use client';

import { SITE_ROUTES_BASE } from '@/config/page-url.config';
import Link from 'next/link';
import styles from './header.module.css';
import { useModal } from '@/hooks/useModal';
import { ProfileModal } from '../profile-modal';

export function MobileHeader() {
	const {showModal} = useModal();
	const handleOnProfileClick = () => showModal(<ProfileModal/>);
	return (
		<header className={styles.header}>
			<Link href={SITE_ROUTES_BASE.HOME} className={styles.logo}>
				<img
					src='https://clients-static.okko.tv/graphics/logo/okko/okko-x05.png'
					alt='Okko Logo'
					className={styles.logoImg}
				/>
			</Link>

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
