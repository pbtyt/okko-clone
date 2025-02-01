'use client';

import { DropDownItem } from '@/components/base-components/drop-down-item/drop-down-item';
import { DropDown } from '@/components/base-components/drop-down/drop-down';
import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import { useProfiles } from '@/shared/hooks/useProfiles';
import { ProfileImage } from '@/shared/ui/ProfileImage';
import clsx from 'clsx';
import { Check, Edit, Settings } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import styles from './profile-drop-down.module.css';

export function ProfileDropDown() {
	const { profiles, currentActiveProfile, switchProfile } = useProfiles();
	const [currentSelectedProfileIndex, setCurrentSelectedProfileIndex] =
		useState<number>(currentActiveProfile.id);

	// useEffect(() => {
	// 	setCurrentSelectedProfileIndex(currentActiveProfile.id);
	// 	console.log(currentActiveProfile);
	// }, [currentActiveProfile]);

	const handleOnProfileSelect = (profileID: number): void => {
		console.log('click');
		if (profileID === currentSelectedProfileIndex) return;

		switchProfile(profileID);
		setCurrentSelectedProfileIndex(profileID);
	};

	return (
		<DropDown chooseMenuClassName={styles.chooseMenu}>
			{profiles.map((profile, index) => (
				<DropDownItem
					className={clsx(
						currentSelectedProfileIndex === profile.id && styles.selected,
						styles.dropDownItem
					)}
					onClick={() => {
						handleOnProfileSelect(profile.id);
					}}
					key={profile.id}
				>
					<div className={styles.profileItemInfo}>
						{/* <div className={styles.profileImgWrapper}>
							<img
								src='//static.okko.tv/images/v4/a5c64021-ee8d-4b4a-8dae-65f2cb602845?width=40&scale=1&quality=80&mediaType=webp'
								alt=''
								className={styles.profileImg}
							/>
						</div> */}
						<ProfileImage
							coverWidth={40}
							border={currentSelectedProfileIndex === profile.id}
							className={styles.profileImg}
						/>
						<span>{profile.profileName}</span>
					</div>
					{currentSelectedProfileIndex === profile.id && (
						<Check color='rgba(255,255,255,.96)' />
					)}
				</DropDownItem>
			))}

			<div
				style={{
					backgroundColor: 'rgba(255, 255, 255, .15)',
					height: '1px',
					margin: '.5rem 0',
					marginBottom: '.5rem',
				}}
			/>
			<DropDownItem className={styles.dropDownItem}>
				<Link
					href={SITE_ROUTES_BASE.EDIT_PROFILE}
					className={clsx(styles.settings)}
				>
					<Edit color='currentColor' />
					<span>Управлять профилями</span>
				</Link>
			</DropDownItem>
			<DropDownItem className={styles.dropDownItem}>
				<Link
					href={SITE_ROUTES_BASE.SETTINGS}
					className={clsx(styles.settings)}
				>
					<Settings color='currentColor' />
					<span>Перейти в настройки</span>
				</Link>
			</DropDownItem>
		</DropDown>
	);
}
