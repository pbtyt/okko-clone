import styles from './tab-info.module.css';

export function GeneralTab() {
	return (
		<div className={styles.tabInfo}>
			<div className={styles.tabInfoSection}>
				<h2 className={styles.tabInfoSectionTitle}>Контакты</h2>
				<p className={styles.tabInfoSectionSubInfo}>
					Оставьте контактные данные для получения уведомлений от сервиса и
					взаимодействия со службой поддержки.
				</p>

				<div className={styles.form}>
					<input
						disabled
						type='text'
						placeholder='Почта'
						value='darkyt9@gmail.com'
					/>
					<input type='text' placeholder='Телефон' />
					<button disabled>Сохранить</button>
				</div>
			</div>
			<div className={styles.tabInfoSection}>
				<h2 style={{ marginBottom: '6px' }}>Другие варианты входа</h2>
				<p
					style={{
						fontSize: '13px',
						lineHeight: '20px',
						marginBottom: '20px',
						color: 'rgba(255,255,255,.78)',
					}}
				>
					Привяжите свой (...), чтобы быстрее входить в учётную запись.
				</p>
			</div>
		</div>
	);
}
