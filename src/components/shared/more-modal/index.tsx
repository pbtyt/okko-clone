'use client';

import { Modal } from '@/components/base-components/modal/modal';
import { useModal } from '@/hooks/useModal';
import { ArrowLeft } from 'lucide-react';
import { ScrollItem } from '../movies-scroll/scroll-item';
import styles from './more-modal.module.css';
//TODO: RENAME PLS
export function MoreModal({
	headerTitle = 'История просмотров',
}: {
	headerTitle?: string;
}) {
	const { hideModal } = useModal();
	return (
		<Modal
			modalWidth='100%'
			alignPos='top'
			modalContentClassName={styles.modalContentWrapper}
		>
			<div className={styles.modalHeader}>
				<button className={styles.backButton} onClick={() => hideModal()}>
					<ArrowLeft color='rgba(255,255,255,0.96)' size={22} />
				</button>
				{headerTitle && (
					<span className={styles.modalHeaderTitle}>{headerTitle}</span>
				)}
			</div>

			<div className={styles.modalContent}>
				<ScrollItem />
				<ScrollItem />
				<ScrollItem />
				<ScrollItem />
				<ScrollItem />
			</div>
		</Modal>
	);
}
