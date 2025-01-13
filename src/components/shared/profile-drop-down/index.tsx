'use client';

import { DropDownItem } from '@/components/base-components/drop-down-item/drop-down-item';
import { DropDown } from '@/components/base-components/drop-down/drop-down';
import { SITE_ROUTES_BASE } from '@/config/page-url.config';
import clsx from 'clsx';
import { Check, Edit, Settings } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import styles from './profile-drop-down.module.css';

export function ProfileDropDown() {
	const [currentSelectedProfileIndex, setCurrentSelectedProfileIndex] =
		useState<number>(1);

	const handleOnProfileSelect = (profileIndex: number): void => {
		setCurrentSelectedProfileIndex(profileIndex);
	};

	return (
		<DropDown chooseMenuClassName={styles.chooseMenu}>
			<DropDownItem
				className={clsx(
					currentSelectedProfileIndex === 1 && styles.selected,
					styles.dropDownItem
				)}
				onClick={() => {
					handleOnProfileSelect(1);
				}}
			>
				<div className={styles.profileItemInfo}>
					<div className={styles.profileImgWrapper}>
						<img
							src='//static.okko.tv/images/v4/a5c64021-ee8d-4b4a-8dae-65f2cb602845?width=40&scale=1&quality=80&mediaType=webp'
							alt=''
							className={styles.profileImg}
						/>
					</div>
					<span>Основной профиль</span>
				</div>
				{currentSelectedProfileIndex === 1 && (
					<Check color='rgba(255,255,255,.96)' />
				)}
			</DropDownItem>

			<DropDownItem
				className={clsx(
					currentSelectedProfileIndex === 2 && styles.selected,
					styles.dropDownItem
				)}
				onClick={() => {
					handleOnProfileSelect(2);
				}}
			>
				<div className={styles.profileItemInfo}>
					<div className={styles.profileImgWrapper}>
						<img
							src='//static.okko.tv/images/v4/a5c64021-ee8d-4b4a-8dae-65f2cb602845?width=40&scale=1&quality=80&mediaType=webp'
							alt=''
							className={styles.profileImg}
						/>
					</div>
					<span>Детский профиль</span>
				</div>
				{currentSelectedProfileIndex === 2 && (
					<Check color='rgba(255,255,255,.96)' />
				)}
			</DropDownItem>
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
