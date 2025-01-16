'use client';

import { SITE_ROUTES_BASE } from '@/config/page-url.config';
import { SETTINGS_TAB_DATA } from '@/data/settings-tab.data';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from '../settings.module.css';

export function TabPanel() {
	const pathname = usePathname();
	console.log(pathname.slice(1, pathname.lastIndexOf('/')));
	const [currentTab, setCurrentTab] = useState<string>(
		pathname.split('/')[2] || SETTINGS_TAB_DATA[0].link
	);

	return (
		<ul className={styles.tabs}>
			{SETTINGS_TAB_DATA.map(tabData => (
				<li
					key={tabData.id}
					className={clsx(
						styles.tab,
						currentTab === tabData.link && styles.active
					)}
					onClick={() => {
						setCurrentTab(tabData.link);
						console.log(tabData.link);
					}}
				>
					<Link
						href={`/${
							pathname.slice(1, pathname.lastIndexOf('/')) ||
							SITE_ROUTES_BASE.SETTINGS
						}/${tabData.link}`}
						className={styles.tabLink}
					>
						{tabData.label}
					</Link>
				</li>
			))}
			{/* 
			<li
				className={clsx(styles.tab, currentTab === 2 && styles.active)}
				onClick={() => setCurrentTab(2)}
			>
				<Link href='./payments' className={styles.tabLink}>
					Оплата услуг
				</Link>
			</li>
			<li
				className={clsx(styles.tab, currentTab === 3 && styles.active)}
				onClick={() => setCurrentTab(3)}
			>
				<Link href='' className={styles.tabLink}>
					Подписки
				</Link>
			</li>
			<li
				className={clsx(styles.tab, currentTab === 4 && styles.active)}
				onClick={() => setCurrentTab(4)}
			>
				<Link href='./devices' className={styles.tabLink}>
					Мои устройства
				</Link>
			</li>
			<li
				className={clsx(styles.tab, currentTab === 5 && styles.active)}
				onClick={() => setCurrentTab(5)}
			>
				<Link href='' className={styles.tabLink}>
					Предзаказы
				</Link>
			</li>
			<li
				className={clsx(styles.tab, currentTab === 6 && styles.active)}
				onClick={() => setCurrentTab(6)}
			>
				<Link href='' className={styles.tabLink}>
					Защита детей
				</Link>
			</li>
			<li
				className={clsx(styles.tab, currentTab === 7 && styles.active)}
				onClick={() => setCurrentTab(7)}
			>
				<Link href='' className={styles.tabLink}>
					Выход
				</Link>
			</li> */}
		</ul>
	);
}
