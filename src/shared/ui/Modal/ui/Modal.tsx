'use client';

import { useModal } from '@/shared/hooks/useModal';
import { useOutside } from '@/shared/hooks/useOutside';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { ModalProps } from '../model/types';
import styles from './Modal.module.css';

export function Modal({
	modalWidth,
	attachmentPos = 'left',
	alignPos = 'center',
	style,
	className,
	fullScreenModal,
	children,
}: PropsWithChildren<ModalProps>) {
	const { hideModal } = useModal();
	const { ref: modalRef, isShow } = useOutside(
		true,
		!fullScreenModal ? hideModal : () => {}
	);
	return (
		isShow && (
			<div
				style={style}
				className={clsx(styles.modalOverlay, styles[`${attachmentPos}Attach`])}
			>
				<div
					className={clsx(
						styles.modalWrapper,
						className,
						styles[`${alignPos}Align`]
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
