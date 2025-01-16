'use client';

import { Button } from '@/components/base-components/button';
import { Modal } from '@/components/base-components/modal/modal';
import { useState } from 'react';
import styles from './promo-modal.module.css';
export function PromoModal() {
	const [promocode, setPromocode] = useState<string>('');
	const [currentStep, setCurrentStep] = useState<number>(0);
	const maxSteps = 2;
	return (
		<Modal
			modalWidth='700px'
			attachmentPos='right'
			alignPos='top'
			modalWrapperClassName={styles.modalWrapper}
			modalContentClassName={styles.modalContentWrapper}
		>
			<div className={styles.modalTitleWrapper}>
				<span className={styles.modalTitle}>АКТИВАЦИЯ ПРОМОКОДА</span>
			</div>
			<div className={styles.progressBar}>
				<div
					className={styles.progressBarFill}
					style={{
						width: `clamp(0%, ${(currentStep / maxSteps) * 100}%, 100%)`,
					}}
				></div>
			</div>
			<div className={styles.modalContent}>
				<div className={styles.stepCard}>
					<span className={styles.stepNumber}>ШАГ {currentStep + 1}</span>
					<span className={styles.stepDesc}>Введите промокод</span>
					<div className={styles.stepAction}>
						<input
							type='text'
							placeholder='Промокод'
							value={promocode}
							onChange={e => setPromocode(e.target.value)}
						/>

						<Button buttonText='Активировать' disabled={promocode === ''} />
						{/* <button
							disabled={promocode === ''}
							onClick={() => {
								setCurrentStep(prev => clamp(++prev, 1, maxSteps));
							}}
						>
							Активировать
						</button> */}
					</div>
				</div>
			</div>
		</Modal>
	);
}
