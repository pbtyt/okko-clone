'use client';

import { useModal } from '@/hooks/useModal';
import { useOutside } from '@/hooks/useOutside';
import { clsx } from 'clsx';
import { PropsWithChildren } from 'react';
import styles from './modal.module.css';

interface IModal {
	modalWidth: string;
	attachmentPos?: 'left' | 'right';
	alignPos?: 'center' | 'top';
	modalWrapperClassName?: string;
	modalContentClassName?: string;
	fullScreenModal?: boolean;
}

export function Modal({
	modalWidth,
	attachmentPos = 'left',
	alignPos = 'center',
	modalWrapperClassName,
	modalContentClassName,
	fullScreenModal,
	children,
}: PropsWithChildren<IModal>) {
	const { hideModal } = useModal();
	const { ref: modalRef, isShow } = useOutside(
		true,
		!fullScreenModal ? hideModal : () => {}
	);

	return (
		(isShow || fullScreenModal) && (
			<div
				className={clsx(
					styles.modalWrapper,
					modalWrapperClassName,
					attachmentPos === 'left' ? styles.leftAttach : styles.rightAttach
				)}
			>
				<div
					className={clsx(
						styles.modalContent,
						modalContentClassName,
						alignPos === 'center' ? styles.centerAlign : styles.topAlign
					)}
					style={{ width: modalWidth }}
					ref={modalRef}
				>
					{children}
				</div>
			</div>
		)
	);
}
