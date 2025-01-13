'use client';
import {
	createContext,
	Dispatch,
	PropsWithChildren,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';

type TypeModalContext = [ReactNode[], Dispatch<SetStateAction<ReactNode[]>>];

export const ModalContext = createContext<TypeModalContext>([[], () => null]);

export function ModalProvider({ children }: PropsWithChildren<unknown>) {
	const [activeModals, setActiveModals] = useState<ReactNode[]>([]);
	return (
		<ModalContext.Provider value={[activeModals, setActiveModals]}>
			{children}
		</ModalContext.Provider>
	);
}
