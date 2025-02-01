'use client';

import { Modal } from '@/components/base-components/modal/modal';
import { useModal } from '@/shared/hooks/useModal';
import { useProfiles } from '@/shared/hooks/useProfiles';
import { Button } from '@/shared/ui/Button';
import { ProfileImage } from '@/shared/ui/ProfileImage';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './delete-profile-modal.module.css';
export function DeleteProfileModal({
	onDeleteProfile,
}: {
	onDeleteProfile: () => void;
}) {
	const router = useRouter();

	const { hideModal } = useModal();

	const { getProfileByID, deleteProfile } = useProfiles();
	const profileID = Number(useSearchParams().get('id'));
	const [profileName, setProfileName] = useState('');

	const handleOnDeleteClick = () => {
		deleteProfile(profileID);
		router.push('./'); //NOTE: delete query params
		hideModal();
		onDeleteProfile();
	};

	const handleOnBackClick = () => hideModal();

	useEffect(() => {
		const profile = getProfileByID(profileID);
		if (profile) setProfileName(profile.profileName);
	}, [profileID]);

	return (
		<Modal
			style={{ overflow: 'hidden' }}
			modalWidth='100%'
			alignPos='down'
			modalContentClassName={styles.modalContentWrapper}
		>
			<div className={styles.modalContent}>
				{/* <div className={styles.profileCoverWrapper}>
					<img
						src='//static.okko.tv/images/v4/a5c64021-ee8d-4b4a-8dae-65f2cb602845?width=152&scale=1&quality=80&mediaType=webp'
						alt=''
					/>
				</div> */}
				<ProfileImage className={styles.profileImg} />
				<span className={styles.title}>Удалить профиль {profileName}?</span>
				<p className={styles.desc}>
					История просмотров, запомненные фильмы и персональные рекомендации
					также будут удалены
				</p>

				<Button
					className={styles.button}
					buttonText='Отменить'
					onClick={handleOnBackClick}
				/>
				<Button
					className={styles.button}
					buttonText='Удалить профиль'
					buttonColor='gray'
					onClick={handleOnDeleteClick}
				/>
			</div>
		</Modal>
	);
}
