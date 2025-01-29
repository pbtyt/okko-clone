'use client';
import { useProfiles } from '@/shared/hooks/useProfiles';
import { Button } from '@/shared/ui/Button';
import { Edit2, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '../edit-profiles.module.css';

export function ProfileManagement() {
	const [isEditMode, setIsEditMode] = useState(true);
	const router = useRouter();
	const { profiles } = useProfiles();

	const handleOnAddNewProfileClick = (e: any) => {
		e.preventDefault();
		router.push('./?v=add');
	};
	const handleOnEditBaseProfileClick = (e: any, id: number) => {
		e.preventDefault();
		router.push(`./?v=base-edit&id=${id}`);
	};
	const handleOnEditChildProfileClick = (e: any) => {
		e.preventDefault();
		router.push('./?v=child-edit');
	};

	return (
		<>
			<h1>{isEditMode ? 'Управление профилями' : 'Кто будет смотреть?'}</h1>
			{isEditMode && (
				<p className={styles.desc}>
					Создавайте до 5 детских и взрослых профилей, вносите изменения и
					удаляйте ненужные
				</p>
			)}
			<div className={styles.profilesGrid}>
				{profiles.map(profile => (
					<div className={styles.profile} key={profile.id}>
						<div className={styles.coverWrapper}>
							<img
								src='//static.okko.tv/images/v4/a5c64021-ee8d-4b4a-8dae-65f2cb602845?width=152&scale=1&quality=80&mediaType=webp'
								alt=''
							/>
						</div>
						{isEditMode && (
							<button
								className={styles.profileEdit}
								onClick={e => handleOnEditBaseProfileClick(e, profile.id)}
							>
								<div
									style={{
										position: 'absolute',
										top: 'calc(50% + 48px / 2)',
										left: '50%',
										transform: 'translate(-50%, -50%)',
									}}
								>
									<Edit2 size={48} strokeWidth={1.65} />
								</div>
							</button>
						)}
						<span className={styles.profileName}>{profile.profileName}</span>
					</div>
				))}

				<div className={styles.profile}>
					<button
						className={styles.addNewProfile}
						onClick={handleOnAddNewProfileClick}
					>
						<Plus color='currentColor' size={48} />
					</button>
					<span className={styles.profileName}>Добавить</span>
				</div>
			</div>

			<Button
				buttonText={isEditMode ? 'Готово' : 'Управлять профилями'}
				buttonColor={isEditMode ? 'primary' : 'gray'}
				style={{ marginTop: '15rem' }}
				onClick={() => setIsEditMode(prev => !prev)}
			/>
		</>
	);
}
