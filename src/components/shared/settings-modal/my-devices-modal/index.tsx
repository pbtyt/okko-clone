'use client';

import { Button } from '@/components/base-components/button';
import { Modal } from '@/components/base-components/modal/modal';
import { useModal } from '@/hooks/useModal';
import clsx from 'clsx';
import { ArrowLeft, Globe } from 'lucide-react';
import styles from './my-devices-modal.module.css';

export function MyDevicesModal() {
	const { hideModal } = useModal();

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
				<span className={styles.modalHeaderTitle}>Мои устройства</span>
			</div>
			<div className={styles.modalContent}>
				<div className={styles.deviceStats}>
					<span>Смотреть Site) можно только на пяти устройствах</span>
					<span>4 из 5</span>
				</div>
				<div className={styles.devicesWrapper}>
					{['Opera GX', 'Xiaomi', 'Xiaomi MiTV', 'Chrome'].map((el, index) => (
						<li className={styles.deviceButton} key={index}>
							<div className={styles.deviceInfoWrapper}>
								<Globe color='currentColor' size={36} />
								<div className={styles.deviceInfo}>
									<div className={styles.deviceInfoName}>{el}</div>
									<div
										className={clsx(
											styles.deviceInfoStatus,
											index !== 0 && styles.inactive,
											index === 0 && styles.active
										)}
									>
										{index === 0 && 'Текущее устройство'}
										{index !== 0 && (
											<>
												<span>13 января</span>
												<span> · Смартфон</span>
											</>
										)}
									</div>
								</div>
							</div>
							<Button
								buttonText='Отвязать'
								className={styles.unlink}
								buttonColor='transparent'
							/>
							{/* <button className={styles.unlink}>Отвязать</button> */}
						</li>
					))}
				</div>
			</div>
		</Modal>
	);
}
