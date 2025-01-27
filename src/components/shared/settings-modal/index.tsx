'use client';

import { Modal } from '@/components/base-components/modal/modal';
import { useModal } from '@/hooks/useModal';
import { ArrowLeft, MonitorDown, MonitorPlay } from 'lucide-react';
import styles from './settings-modal.module.css';

export function SettingsModal() {
	const { hideModal } = useModal();

	const handleOnBackClick = () => hideModal();

	return (
		<Modal
			modalWidth='100%'
			alignPos='top'
			modalContentClassName={styles.modalContentWrapper}
			fullScreenModal
		>
			<div className={styles.modalHeader}>
				<button className={styles.button} onClick={handleOnBackClick}>
					<ArrowLeft color='rgba(255,255,255,0.96)' size={22} />
				</button>
				<span className={styles.modalHeaderTitle}>Настройки</span>
			</div>
			<div className={styles.modalContent}>
				<div className={styles.section}>
					<h4 className={styles.sectionTitle}>Видео</h4>
					<ul className={styles.sectionContent}>
						<li className={styles.sectionContentItem}>
							<MonitorDown size={28} />
							<span>Загрузка видео</span>
						</li>
						<li className={styles.sectionContentItem}>
							<MonitorPlay size={28} />
							<span>Воспроизведение</span>
						</li>
					</ul>
				</div>
			</div>
		</Modal>
	);
}
