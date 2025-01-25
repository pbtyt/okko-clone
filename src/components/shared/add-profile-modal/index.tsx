'use client';

import { Button } from '@/components/base-components/button';
import { Checkbox } from '@/components/base-components/checkbox/checkbox';
import { Modal } from '@/components/base-components/modal/modal';
import { useModal } from '@/hooks/useModal';
import { ArrowLeft } from 'lucide-react';
import styles from './add-profile-modal.module.css';

export function AddProfileModal() {
	const { hideModal } = useModal();
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
				<span className={styles.modalHeaderTitle}>Создание профиля</span>
			</div>
			<div className={styles.modalContent}>
				<div className={styles.profileCoverWrapper}>
					<img
						src='//static.okko.tv/images/v4/a5c64021-ee8d-4b4a-8dae-65f2cb602845?width=152&scale=1&quality=80&mediaType=webp'
						alt=''
					/>
				</div>

				<input
					type='text'
					placeholder='Введите имя профиля'
					// onChange={e => setProfileName(e.target.value)}
					// value={profileName}
					className={styles.input}
				/>
				<div>
					<div className={styles.chooseProfileType}>
						<div className={styles.profileType}>
							<span className={styles.profileTypeName}>Взрослый профиль</span>
							<span className={styles.profileTypeDesc}>без ограничений</span>
						</div>
						<Checkbox isCheck />
					</div>
					<div className={styles.chooseProfileType}>
						<div className={styles.profileType}>
							<span className={styles.profileTypeName}>Детский профиль</span>
							<span className={styles.profileTypeDesc}>
								контент 0+, 6+, 12+
							</span>
						</div>
						<Checkbox isCheck={false} />
					</div>
				</div>
			</div>

			<Button buttonText='Готово' className={styles.completeButton} />
		</Modal>
	);
}
