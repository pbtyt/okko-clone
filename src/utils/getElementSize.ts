import { type ElementSizeType } from '@/types/base.types';

export function getSize(element: HTMLElement): ElementSizeType {
	const rect: DOMRect = element.getBoundingClientRect();
	return {
		width: rect.width,
		height: rect.height,
	};
}
