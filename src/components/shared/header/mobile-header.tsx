'use client';

import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import { useModal } from '@/shared/hooks/useModal';
import { ProfileImage } from '@/shared/ui/ProfileImage';
import Link from 'next/link';
import { ProfileModal } from '../profile-modal';
import styles from './header.module.css';

export function MobileHeader() {
	const { showModal } = useModal();
	const handleOnProfileClick = () => showModal(<ProfileModal />);
	return (
		<header className={styles.header}>
			<Link href={SITE_ROUTES_BASE.HOME} className={styles.logo}>
				<div className={styles.logoImg}></div>
			</Link>

			<button className={styles.navButton} onClick={handleOnProfileClick}>
				<ProfileImage coverWidth={35} />
			</button>
		</header>
	);
}
