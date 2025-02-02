'use client';

import { Logo } from '@/shared/ui/Logo';
import { NavButton } from '@/shared/ui/NavButton';
import { Spacer } from '@/shared/ui/Spacer';
import { Gift, Search } from 'lucide-react';
import styles from './Header.module.css';
import { Nav } from './nav';
import { ProfileButton } from './profileButton';

export function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<Nav />
			<Spacer />
			<div className={styles.row}>
				<NavButton
					icon={<Search color='rgba(255, 255, 255, 0.56)' />}
					className={styles.button}
				/>
				<NavButton
					icon={<Gift color='rgba(255, 255, 255, 0.56)' />}
					className={styles.button}
				>
					Ввести промокод
				</NavButton>
				<ProfileButton />
			</div>
		</header>
	);
}
