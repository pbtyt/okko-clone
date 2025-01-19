import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Metadata } from 'next';
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
				<SelectView />
			</div>
		</main>
	);
}
