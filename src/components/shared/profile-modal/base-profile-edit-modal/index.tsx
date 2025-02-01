'use client';

import { Modal } from '@/components/base-components/modal/modal';
import { ProfilesStore } from '@/entities/profile/';
import { useModal } from '@/shared/hooks/useModal';
import { useProfiles } from '@/shared/hooks/useProfiles';
import { Button } from '@/shared/ui/Button';
import { ProfileImage } from '@/shared/ui/ProfileImage';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DeleteProfileModal } from '../delete-profile-modal';
import styles from './base-profile-edit-modal.module.css';

export function BaseProfileEditModal() {
	const router = useRouter();

	const { showModal, hideModal } = useModal();

	//TODO: Move editProfile to UseProfiles custom hook
	const { editProfile } = ProfilesStore();
	const { getProfileByID } = useProfiles();
	const profileID = Number(useSearchParams().get('id'));
	const [profileName, setProfileName] = useState('');

	const handleOnBackClick = () => {
		router.push('./'); //NOTE: delete query params
		hideModal();
	};
	const handleOnCompleteClick = () => {
		editProfile(profileID, profileName);
		router.push('./'); //NOTE: delete query params
		hideModal();
	};
	const handleOnDeleteClick = () =>
		showModal(<DeleteProfileModal onDeleteProfile={handleOnBackClick} />);

	useEffect(() => {
		const profile = getProfileByID(profileID);
		if (profile) setProfileName(profile.profileName);
	}, [profileID]);

	return (
		<Modal
			style={{ overflow: 'hidden' }}
			modalWidth='100%'
			alignPos='top'
			modalContentClassName={styles.modalContentWrapper}
			fullScreenModal
		>
			<div className={styles.modalHeader}>
				<button className={styles.button} onClick={handleOnBackClick}>
					<ArrowLeft color='rgba(255,255,255,0.96)' size={22} />
				</button>
				<span className={styles.modalHeaderTitle}>Редактирование профиля</span>
				<button className={styles.button}>Готово</button>
			</div>
			<div className={styles.modalContent}>
				<ProfileImage />

				<input
					type='text'
					placeholder='Введите имя профиля'
					onChange={e => setProfileName(e.target.value)}
					value={profileName}
					className={styles.input}
				/>
			</div>

			<div className={styles.modalFooter}>
				<Button
					buttonText='Удалить профиль'
					className={styles.deleteButton}
					onClick={handleOnDeleteClick}
					buttonColor='transparent'
				>
					<Trash2 size={24} strokeWidth={2} />
				</Button>
				<Button
					buttonText='Готово'
					className={styles.completeButton}
					onClick={handleOnCompleteClick}
				/>
			</div>
		</Modal>
	);
}
