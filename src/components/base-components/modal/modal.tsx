'use client';

import { useModal } from '@/shared/hooks/useModal';
import { useOutside } from '@/shared/hooks/useOutside';
import { clsx } from 'clsx';
import { CSSProperties, PropsWithChildren } from 'react';
import styles from './modal.module.css';

interface IModal {
	modalWidth: string;
	attachmentPos?: 'left' | 'right';
	alignPos?: 'center' | 'top' | 'down';
	style?: CSSProperties;
	modalWrapperClassName?: string;
	modalContentClassName?: string;
	fullScreenModal?: boolean;
}

export function Modal({
	modalWidth,
	attachmentPos = 'left',
	alignPos = 'center',
	style,
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
				style={style}
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
