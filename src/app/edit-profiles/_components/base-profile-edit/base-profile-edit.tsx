'use client';

import { ProfilesStore } from '@/entities/profile/';
import { useProfiles } from '@/shared/hooks/useProfiles';
import { Button } from '@/shared/ui/Button';
import { ProfileImage } from '@/shared/ui/ProfileImage';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './base-profile-edit.module.css';

export function BaseProfileEdit() {
	const profileID = Number(useSearchParams().get('id'));
	const { editProfile } = ProfilesStore();
	const { profiles, deleteProfile } = useProfiles();
	const router = useRouter();
	const [profileName, setProfileName] = useState('');

	useEffect(() => {
		const profile = profiles.find(profile => profile.id === profileID);
		setProfileName(profile?.profileName || '');
	}, [profileID]);

	const handleOnSaveClick = (e: any) => {
		e.preventDefault();
		editProfile(profileID, profileName);
		router.back();
	};
	const handleOnCancelClick = (e: any) => {
		e.preventDefault();
		router.back();
	};
	const handleOnDeleteClick = (e: any) => {
		e.preventDefault();
		deleteProfile(profileID);
		router.back();
	};

	return (
		<div className={styles.profileEditWrapper}>
			<div className={styles.profile}>
				<ProfileImage coverWidth={152} />

				<span className={styles.profileName}>{profileName}</span>
			</div>
			<div className={styles.edit}>
				<h1>Редактирование профиля</h1>
				<input
					type='text'
					placeholder='Введите имя профиля'
					onChange={e => setProfileName(e.target.value)}
					value={profileName}
					className={styles.input}
				/>
				<p className={styles.desc}>
					Доступен весь каталог. Это основной профиль, его нельзя удалить
				</p>

				<div className={styles.controls}>
					<Button
						buttonText='Сохранить'
						disabled={profileName.length < 1}
						onClick={handleOnSaveClick}
					/>
					<Button
						buttonText='Отменить'
						buttonColor='gray'
						onClick={handleOnCancelClick}
					/>
					<Button
						buttonText='Удалить профиль'
						buttonColor='dark'
						onClick={handleOnDeleteClick}
					/>
				</div>
			</div>
		</div>
	);
}
