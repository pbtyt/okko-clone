import styles from './tab-info.module.css';

export function PaymentServicesTab() {
	return (
		<div className={styles.tabInfo}>
			<div className={styles.tabInfoSection}>
				<h2 className={styles.tabInfoSectionTitle}>Информация о счёте</h2>
				<div className={styles.paymentInfo}>
					<div className={styles.info}>Номер счета в Okko</div>
					<div className={styles.info}>1 2345 6789</div>
					<div
						style={{
							backgroundColor: 'rgba(255, 255, 255, .15)',
							height: '1px',
							margin: '.5rem 0',
							marginBottom: '.5rem',
						}}
					/>
					<div className={styles.info}>Баланс</div>
					<div className={styles.info}>0 руб</div>
				</div>
			</div>
			<div className={styles.tabInfoSection}>
				<h2 className={styles.tabInfoSectionTitle}>Мои банковские карты</h2>
				<button style={{ padding: '10px 16px', marginTop: '1rem' }}>
					Добавить карту
				</button>
			</div>
		</div>
	);
}
