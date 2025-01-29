'use client';

import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import clsx from 'clsx';
import { Bookmark, Home, Search, ShoppingBag, Volleyball } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './footer.module.css';

export function MobileFooter() {
	const path = usePathname();

	return (
		<nav className={styles.navWrapper}>
			<div className={styles.nav}>
				<Link
					href={SITE_ROUTES_BASE.HOME}
					className={clsx(
						styles.navLink,
						path === SITE_ROUTES_BASE.HOME && styles.active
					)}
					// onClick={() => setHeaderTitle('')}
				>
					<Home />
					<span className={styles.navLinkTitle}>Главная</span>
				</Link>
				<Link
					href={SITE_ROUTES_BASE.CATALOG}
					className={clsx(
						styles.navLink,
						path.slice(0, -1) === SITE_ROUTES_BASE.CATALOG && styles.active
					)}
					// onClick={() => setHeaderTitle('Каталог')}
				>
					<Search />
					<span className={styles.navLinkTitle}>Каталог</span>
				</Link>
				<Link
					href={SITE_ROUTES_BASE.STORE}
					className={clsx(
						styles.navLink,
						path.slice(0, -1) === SITE_ROUTES_BASE.STORE && styles.active
					)}
					// onClick={() => setHeaderTitle('')}
				>
					<ShoppingBag />
					<span className={styles.navLinkTitle}>Магазин</span>
				</Link>
				<Link
					href={SITE_ROUTES_BASE.SPORT}
					className={clsx(
						styles.navLink,
						path.slice(0, -1) === SITE_ROUTES_BASE.SPORT && styles.active
					)}
					// onClick={() => setHeaderTitle('')}
				>
					<Volleyball />
					<span className={styles.navLinkTitle}>Спорт</span>
				</Link>
				<Link
					href={SITE_ROUTES_BASE.MY_MOVIES}
					className={clsx(
						styles.navLink,
						path.slice(0, -1) === SITE_ROUTES_BASE.MY_MOVIES && styles.active
					)}
					// onClick={() => setHeaderTitle('Моё')}
				>
					<Bookmark />
					<span className={styles.navLinkTitle}>Моё</span>
				</Link>
			</div>
		</nav>
	);
}
