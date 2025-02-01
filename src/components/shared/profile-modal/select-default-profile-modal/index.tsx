'use client';

import { Modal } from '@/components/base-components/modal/modal';
import { useModal } from '@/shared/hooks/useModal';
import { useProfiles } from '@/shared/hooks/useProfiles';
import { ProfileImage } from '@/shared/ui/ProfileImage';
import { ArrowLeft, Check, CircleHelp } from 'lucide-react';
import styles from './select-default-profile-modal.module.css';

export function SelectDefaultProfileModal() {
	const { hideModal } = useModal();

	const { profiles } = useProfiles();

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
				<span className={styles.modalHeaderTitle}>Профиль по умолчанию</span>
				<button className={styles.button}>Готово</button>
			</div>
			<div className={styles.modalContent}>
				<p className={styles.desc}>
					Этот профиль будет автоматически выбираться на этом устройстве при
					запуске приложения
				</p>
				<div className={styles.profilesWrapper}>
					<div className={styles.profile}>
						<div
							className={styles.coverWrapper}
							style={{ display: 'flex', placeItems: 'center' }}
						>
							<CircleHelp style={{ width: '100%' }} height={48} />
						</div>
						<span>Не выбран</span>
						<div style={{ flexGrow: '1' }}></div>
						<Check />
					</div>
					{profiles.map(profile => (
						<div key={profile.id} className={styles.profile}>
							<ProfileImage coverWidth={48} />
							<span>{profile.profileName}</span>
						</div>
					))}
				</div>
			</div>
		</Modal>
	);
}
