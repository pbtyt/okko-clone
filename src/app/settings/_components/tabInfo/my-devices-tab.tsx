import { Button } from '@/components/base-components/button';
import clsx from 'clsx';
import { Globe } from 'lucide-react';
import styles from './tab-info.module.css';

export function MyDevicesTab() {
	return (
		<div className={styles.tabInfo}>
			<div className={styles.tabInfoSection}>
				<h2 className={styles.tabInfoSectionTitle}>Мои устройства</h2>
				<p className={styles.tabInfoSectionSubInfo}>
					К учётной записи в Okko можно подключить до пяти устройств. Начните
					просмотр на одном устройстве и продолжите на другом.
				</p>
				<button style={{ padding: '10px 16px', marginBottom: '1rem' }}>
					Подключить
				</button>
				<p className={styles.tabInfoSectionSubInfo}>
					Или загрузите приложение «Okko Фильмы HD» для смартфона и планшета.
					Доступно на iOS Android Huawei.
				</p>
			</div>
			<div style={{ maxWidth: '767px' }}>
				<div className={clsx(styles.deviceStats, styles.tabInfoSectionSubInfo)}>
					<span>Смотреть Okko можно только на пяти устройствах</span>
					<span>4 из 5</span>
				</div>
				<ul className={styles.devices}>
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
				</ul>
			</div>
		</div>
	);
}
