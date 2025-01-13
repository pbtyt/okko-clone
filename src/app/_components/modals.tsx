'use client';

import { ModalContext } from '@/providers/modal-provider';
import { Fragment, useContext } from 'react';

export function Modals() {
	const modals = useContext(ModalContext);
	return modals[0].map((modal, index) => (
		<Fragment key={index}>{modal}</Fragment>
	));
}
