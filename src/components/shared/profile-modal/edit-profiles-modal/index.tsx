'use client';

import { Modal } from '@/components/base-components/modal/modal';
import { useModal } from '@/hooks/useModal';
import { ArrowLeft, Edit2, Plus } from 'lucide-react';
import { AddProfileModal } from '../add-profile-modal';
import styles from './edit-profiles-modal.module.css';

export function EditProfilesModal() {
	const { showModal, hideModal } = useModal();
	return (
		<Modal
			modalWidth='100%'
			alignPos='top'
			modalContentClassName={styles.modalContentWrapper}
			fullScreenModal
		>
			<div className={styles.modalHeader}>
				<button className={styles.button} onClick={() => hideModal()}>
					<ArrowLeft color='rgba(255,255,255,0.96)' size={22} />
				</button>

				<button className={styles.button}>Готово</button>
			</div>

			<div className={styles.modalContent}>
				<h1 className={styles.modalContentTitle}>Управление профилями</h1>
				<p className={styles.desc}>
					Создавайте до 5 детских и взрослых профилей, вносите изменения и
					удаляйте ненужные
				</p>
				<div className={styles.profilesGrid}>
					<div className={styles.profile}>
						<div className={styles.coverWrapper}>
							<img
								src='//static.okko.tv/images/v4/a5c64021-ee8d-4b4a-8dae-65f2cb602845?width=152&scale=1&quality=80&mediaType=webp'
								alt=''
							/>
						</div>

						<button
							className={styles.profileEdit}
							// onClick={e => handleOnEditBaseProfileClick(e, profile.id)}
						>
							<div
								style={{
									position: 'absolute',
									top: 'calc(50% + 24px / 2)',
									left: '50%',
									transform: 'translate(-50%, -50%)',
								}}
							>
								<Edit2 size={36} strokeWidth={2} />
							</div>
						</button>

						<span className={styles.profileName}>Основной профиль</span>
					</div>

					<div className={styles.profile}>
						<button
							className={styles.addNewProfile}
							onClick={() => showModal(<AddProfileModal />)}
						>
							<Plus color='currentColor' size={48} />
						</button>
						<span className={styles.profileName}>Добавить</span>
					</div>
				</div>
			</div>

			<button className={styles.modalFooter}>
				<span>Профиль по умолчанию</span>
				<span>Основной профиль</span>
			</button>
		</Modal>
	);
}
