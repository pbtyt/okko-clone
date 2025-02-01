'use client';

import type { ProfileClassType } from '@/entities/profile/model/types';
import { useProfiles } from '@/shared/hooks/useProfiles';
import { Button } from '@/shared/ui/Button';
import { Checkbox } from '@/shared/ui/Checkbox';
import { ProfileImage } from '@/shared/ui/ProfileImage';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './add-profile.module.css';

export function AddProfile() {
	const router = useRouter();
	const [profileName, setProfileName] = useState('');
	const [selectedProfile, setSelectedProfile] =
		useState<ProfileClassType>('base');

	const { addProfile } = useProfiles();

	const handleOnContinueClick = (e: any) => {
		e.preventDefault();
		addProfile(profileName, selectedProfile);
		router.back();
	};
	const handleOnCancelClick = (e: any) => {
		e.preventDefault();
		router.back();
	};

	return (
		<div className={styles.profileEditWrapper}>
			<div className={styles.profile}>
				<ProfileImage coverWidth={152} />
				<span className={styles.profileName}>{profileName}</span>
			</div>
			<div className={styles.edit}>
				<h1>Создание профиля</h1>
				<input
					type='text'
					placeholder='Введите имя профиля'
					onChange={e => setProfileName(e.target.value)}
					value={profileName}
					className={styles.input}
				/>
				<div className={styles.chooseProfileType}>
					<div className={styles.profileType}>
						<span className={styles.profileTypeName}>Взрослый профиль</span>
						<span className={styles.profileTypeDesc}>без ограничений</span>
					</div>
					<Checkbox
						isCheck={selectedProfile === 'base'}
						onClick={() => {
							setSelectedProfile('base');
						}}
					/>
				</div>
				<div className={styles.chooseProfileType}>
					<div className={styles.profileType}>
						<span className={styles.profileTypeName}>Детский профиль</span>
						<span className={styles.profileTypeDesc}>контент 0+, 6+, 12+</span>
					</div>
					<Checkbox
						isCheck={selectedProfile === 'child'}
						onClick={() => {
							setSelectedProfile('child');
						}}
					/>
				</div>
				<div className={styles.controls}>
					<Button
						buttonText='Продолжить'
						disabled={profileName.length < 1}
						onClick={handleOnContinueClick}
					/>
					<Button
						buttonText='Отменить'
						buttonColor='gray'
						onClick={handleOnCancelClick}
					/>
				</div>
			</div>
		</div>
	);
}
