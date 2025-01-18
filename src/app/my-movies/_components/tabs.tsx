'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import styles from './tabs.module.css';

type tabType = 'stored' | 'purchases' | 'history';

export function Tabs() {
	const params = useSearchParams();
	const tabParam: tabType = (params.get('tab') as tabType) || 'stored';
	//in useEffect we`re can fetch tab data depend on tabParam
	return (
		<div className={styles.tabs}>
			<div className={styles.tab}>
				<Link
					scroll={false}
					href='./?tab=stored'
					className={clsx(
						styles.tabText,
						tabParam === 'stored' && styles.active
					)}
				>
					ЗАПОМНЕННЫЕ
				</Link>
			</div>
			<div className={styles.tab}>
				<Link
					scroll={false}
					href='./?tab=purchases'
					className={clsx(
						styles.tabText,
						tabParam === 'purchases' && styles.active
					)}
				>
					МОИ ПОКУПКИ
				</Link>
			</div>
			<div className={styles.tab}>
				<Link
					scroll={false}
					href='./?tab=history'
					className={clsx(
						styles.tabText,
						tabParam === 'history' && styles.active
					)}
				>
					ИСТОРИЯ ПРОСМОТРОВ
				</Link>
			</div>
		</div>
	);
}
