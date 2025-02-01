'use client';

import { ModalContext } from '@/app/(providers)/modal-provider';
import { Fragment, useContext } from 'react';

export function Modals() {
	const { activeModals } = useContext(ModalContext);
	return activeModals.map((modal, index) => (
		<Fragment key={index}>{modal}</Fragment>
	));
}
