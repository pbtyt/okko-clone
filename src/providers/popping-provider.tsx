'use client';

import { type ElementPositionType } from '@/types/base.types';
import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useState,
} from 'react';

export type PoppingContextType = {
	isPopping: boolean;
	setIsPopping: Dispatch<SetStateAction<boolean>>;
	poppingPosition: ElementPositionType;
	setPoppingPosition: Dispatch<SetStateAction<ElementPositionType>>;
};

export const PoppingContext = createContext<PoppingContextType>({
	isPopping: false,
	setIsPopping: () => false,
	poppingPosition: { left: 0, top: 0 },
	setPoppingPosition: () => {},
});

export function PoppingProvider({ children }: PropsWithChildren<unknown>) {
	const [isPopping, setIsPopping] = useState<boolean>(false);
	const [poppingPosition, setPoppingPosition] = useState<ElementPositionType>({
		left: 0,
		top: 0,
	});
	return (
		<PoppingContext.Provider
			value={{
				isPopping,
				setIsPopping,
				poppingPosition,
				setPoppingPosition,
			}}
		>
			{children}
		</PoppingContext.Provider>
	);
}
