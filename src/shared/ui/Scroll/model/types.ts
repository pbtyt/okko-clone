import { RefObject } from 'react';

export enum ArrowDirection {
	Left,
	Right,
}

export interface IArrow {
	scrollRef: RefObject<HTMLDivElement | null>;
	scrollStep: number;
	direction: ArrowDirection;
}

export interface IScroll {
	className?: string;
	scrollStep?: number;
	hideArrows?: boolean;
}
