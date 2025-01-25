'use client';

import { Modal } from '@/components/base-components/modal/modal';
import { useModal } from '@/hooks/useModal';
import {
	ArrowLeft,
	BadgeCheck,
	CreditCard,
	Gift,
	Headset,
	History,
	Lock,
	LogOut,
	Pencil,
	Plus,
	Settings,
	Share2,
	Star,
	Tv,
} from 'lucide-react';

import { Button } from '@/components/base-components/button';
import clsx from 'clsx';
import { AddProfileModal } from '../add-profile-modal';
import { EditProfilesModal } from '../edit-profiles-modal';
import styles from './profile-modal.module.css';

export function ProfileModal() {
	const { hideModal, showModal } = useModal();
	const handleOnAddNewProfileClick = () => showModal(<AddProfileModal />);
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
				<span className={styles.modalHeaderTitle}>Профиль</span>

				<div style={{ flexGrow: '1' }}></div>

				<button className={styles.button}>
					<Pencil color='rgba(255,255,255,0.96)' size={22} />
				</button>
				<button className={styles.button}>
					<LogOut color='rgba(255,255,255,0.96)' size={22} />
				</button>
			</div>

			<div className={styles.modalContent}>
				<div className={styles.profilesManagement}>
					<div className={styles.profiles}>
						<div className={clsx(styles.profile, styles.active)}>
							<div className={clsx(styles.coverWrapper)}>
								<img
									src='//static.okko.tv/images/v4/a5c64021-ee8d-4b4a-8dae-65f2cb602845?width=40&scale=1&quality=80&mediaType=webp'
									alt=''
								/>
							</div>
							<span className={styles.profileName}>Основной профиль</span>
						</div>
						<div className={styles.profile}>
							<div className={clsx(styles.coverWrapper)}>
								<img
									src='//static.okko.tv/images/v4/a5c64021-ee8d-4b4a-8dae-65f2cb602845?width=40&scale=1&quality=80&mediaType=webp'
									alt=''
								/>
							</div>
							<span className={styles.profileName}>Детский профиль</span>
						</div>
						<div className={clsx(styles.profile, styles.button)}>
							<button
								className={styles.addNewProfile}
								onClick={handleOnAddNewProfileClick}
							>
								<Plus color='currentColor' size={24} strokeWidth={1.5} />
							</button>
							<span className={styles.profileName}>Добавить</span>
						</div>
					</div>
					<Button
						buttonColor='gray'
						buttonText='Управлять профилями'
						className={styles.editProfilesButton}
						onClick={() => showModal(<EditProfilesModal />)}
					/>
				</div>
				<ul className={styles.settingsList}>
					<li className={styles.settingsItem}>
						<Gift size={24} strokeWidth={1.5} />
						<span>Ввести промокод</span>
					</li>
					<li className={styles.settingsItem}>
						<Tv size={24} strokeWidth={1.5} />
						<span>Мои устройства</span>
					</li>
					<li className={styles.settingsItem}>
						<BadgeCheck size={24} strokeWidth={1.5} />
						<span>Мои подписки</span>
					</li>
					<li className={styles.settingsItem}>
						<CreditCard size={24} strokeWidth={1.5} />
						<span>Оплата услуг</span>
					</li>
					<li className={styles.settingsItem}>
						<Lock size={24} strokeWidth={1.5} />
						<span>Защита детей</span>
					</li>
					<li className={styles.settingsItem}>
						<Headset size={24} strokeWidth={1.5} />
						<span>Поддержка</span>
					</li>
					<li className={styles.settingsItem}>
						<Share2 size={24} strokeWidth={1.5} />
						<span>Рассказать друзьям</span>
					</li>
					<li className={styles.settingsItem}>
						<History size={24} strokeWidth={1.5} />
						<span>Восстановление покупок</span>
					</li>
					<li className={styles.settingsItem}>
						<Star size={24} strokeWidth={1.5} />
						<span>Оценить приложение</span>
					</li>
					<li className={styles.settingsItem}>
						<Settings size={24} strokeWidth={1.5} />
						<span>Настройки</span>
					</li>
				</ul>
			</div>
		</Modal>
	);
}
