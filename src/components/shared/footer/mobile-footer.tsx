import { SITE_ROUTES_BASE } from '@/config/page-url.config';
import clsx from 'clsx';
import { Bookmark, Home, Search, ShoppingBag, Volleyball } from 'lucide-react';
import Link from 'next/link';
import styles from './footer.module.css';

export function MobileFooter() {
	return (
		<nav className={styles.navWrapper}>
			<div className={styles.nav}>
				<Link
					href={SITE_ROUTES_BASE.HOME}
					className={clsx(styles.navLink, styles.active)}
				>
					<Home fill='currentColor' />
					<span className={styles.navLinkTitle}>Главная</span>
				</Link>
				<Link href={SITE_ROUTES_BASE.CATALOG} className={clsx(styles.navLink)}>
					<Search />
					<span className={styles.navLinkTitle}>Каталог</span>
				</Link>
				<Link href={SITE_ROUTES_BASE.STORE} className={clsx(styles.navLink)}>
					<ShoppingBag />
					<span className={styles.navLinkTitle}>Магазин</span>
				</Link>
				<Link href={SITE_ROUTES_BASE.SPORT} className={clsx(styles.navLink)}>
					<Volleyball />
					<span className={styles.navLinkTitle}>Спорт</span>
				</Link>
				<Link
					href={SITE_ROUTES_BASE.MY_MOVIES}
					className={clsx(styles.navLink)}
				>
					<Bookmark />
					<span className={styles.navLinkTitle}>Моё</span>
				</Link>
			</div>
		</nav>
	);
}
