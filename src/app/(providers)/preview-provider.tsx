'use client';

import { type ElementPositionType } from '@/shared/types/base.types';
import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useState,
} from 'react';

export type PreviewContextType = {
	isPreview: boolean;
	setIsPreview: Dispatch<SetStateAction<boolean>>;
	previewPosition: ElementPositionType;
	setPreviewPosition: Dispatch<SetStateAction<ElementPositionType>>;
};

export const PreviewContext = createContext<PreviewContextType>({
	isPreview: false,
	setIsPreview: () => false,
	previewPosition: { left: 0, top: 0 },
	setPreviewPosition: () => {},
});

export function PreviewProvider({ children }: PropsWithChildren<unknown>) {
	const [isPreview, setIsPreview] = useState<boolean>(false);
	const [previewPosition, setPreviewPosition] = useState<ElementPositionType>({
		left: 0,
		top: 0,
	});
	return (
		<PreviewContext.Provider
			value={{ isPreview, setIsPreview, previewPosition, setPreviewPosition }}
		>
			{children}
		</PreviewContext.Provider>
	);
}
