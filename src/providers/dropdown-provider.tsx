'use client';

import {
	type ElementPositionType,
	type ElementSizeType,
} from '@/types/base.types';
import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useState,
} from 'react';

export type DropDownContextType = {
	isDropDown: boolean;
	setIsDropDown: Dispatch<SetStateAction<boolean>>;
	DropDownPosition: ElementPositionType;
	setDropDownPosition: Dispatch<SetStateAction<ElementPositionType>>;
	dropDownMenuSize: ElementSizeType;
	setDropDownMenuSize: Dispatch<SetStateAction<ElementSizeType>>;
};

export const DropDownContext = createContext<DropDownContextType>({
	isDropDown: false,
	setIsDropDown: () => false,
	DropDownPosition: { left: 0, top: 0 },
	setDropDownPosition: () => {},
	dropDownMenuSize: { width: 0, height: 0 },
	setDropDownMenuSize: () => {},
});

export function DropDownProvider({ children }: PropsWithChildren<unknown>) {
	const [isDropDown, setIsDropDown] = useState<boolean>(false);
	const [DropDownPosition, setDropDownPosition] = useState<ElementPositionType>(
		{
			left: 0,
			top: 0,
		}
	);
	const [dropDownMenuSize, setDropDownMenuSize] = useState<ElementSizeType>({
		width: 0,
		height: 0,
	});
	return (
		<DropDownContext.Provider
			value={{
				isDropDown,
				setIsDropDown,
				DropDownPosition,
				setDropDownPosition,
				dropDownMenuSize,
				setDropDownMenuSize,
			}}
		>
			{children}
		</DropDownContext.Provider>
	);
}
