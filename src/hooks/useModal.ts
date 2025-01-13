import { ModalContext } from '@/providers/modal-provider';
import { toggleBodyOverflow } from '@/utils/toggleBodyOverflow';
import { ReactNode, useContext } from 'react';

export const useModal = () => {
	const modal = useContext(ModalContext);
	const activeModals = modal[0];
	const setActiveModals = modal[1];

	const showModal = (modalWindow: ReactNode) => {
		toggleBodyOverflow(false);

		setActiveModals([...activeModals, modalWindow]);
	};

	const hideModal = () => {
		if (activeModals.length === 1) toggleBodyOverflow(true);

		activeModals.pop();
		setActiveModals([...activeModals]);
	};

	return { showModal, hideModal };
};
