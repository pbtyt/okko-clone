import { TabPanel } from './_components/tab-panel';
import styles from './settings.module.css';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className={styles.main}>
			<h1>Настройки</h1>
			<div style={{ display: 'flex', marginTop: '.5rem' }}>
				<TabPanel />
				{children}
			</div>
		</main>
	);
}
