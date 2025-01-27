import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { SelectView } from './_components/select-view';
import styles from './edit-profiles.module.css';

export const metadata: Metadata = {
	title: 'Управление профилями',
	...NO_INDEX_PAGE,
};

export default function EditProfilePage() {
	return (
		<main className={styles.main}>
			<div>
				<Suspense
					fallback={<div>Loading... (will appear in future updates)</div>}
				>
					<SelectView />
				</Suspense>
			</div>
		</main>
	);
}
