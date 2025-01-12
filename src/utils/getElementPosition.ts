import { type ElementPositionType } from '@/types/base.types';

export function getPosition(element: HTMLElement): ElementPositionType {
	const rect: DOMRect = element.getBoundingClientRect();
	return {
		left: rect.left + window.scrollX,
		top: rect.top + window.scrollY,
	};
}
