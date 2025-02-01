import { ElementPositionType } from '@/shared/types/base.types';
import { CSSProperties, HTMLAttributes, RefObject } from 'react';

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
	id: string;
	position: ElementPositionType;
	poppingRef?: RefObject<HTMLDivElement | null>;
	className?: string;
	style?: CSSProperties;
}
