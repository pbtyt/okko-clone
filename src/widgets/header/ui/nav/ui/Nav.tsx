import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './Nav.module.css';

export function Nav() {
	return (
		<nav className={styles.navBar}>
			<ul className={styles.navButtons}>
				<li className={clsx(styles.navButton, 1 && styles.active)}>
					<Link href={SITE_ROUTES_BASE.HOME} className={styles.hover}>
						Главная
					</Link>
				</li>
				<li className={clsx(styles.navButton, 0 && styles.active)}>
					<Link href={`${SITE_ROUTES_BASE.CATALOG}`} className={styles.hover}>
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
		</nav>
	);
}
