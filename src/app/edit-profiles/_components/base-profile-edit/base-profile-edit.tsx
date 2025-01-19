'use client';

import { Button } from '@/components/base-components/button';
import { useProfilesStore } from '@/store/profiles.store';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './base-profile-edit.module.css';

export function BaseProfileEdit() {
	const profileID = Number(useSearchParams().get('id'));
	const { profiles, editProfile, deleteProfile } = useProfilesStore();
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
				<div className={styles.coverWrapper}>
					<img
						src='//static.okko.tv/images/v4/a5c64021-ee8d-4b4a-8dae-65f2cb602845?width=152&scale=1&quality=80&mediaType=webp'
						alt=''
					/>
				</div>

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
