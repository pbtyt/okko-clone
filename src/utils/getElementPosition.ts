export function getPosition(element: HTMLElement): {
	left: number;
	top: number;
} {
	const rect: DOMRect = element.getBoundingClientRect();
	return {
		left: rect.left + window.scrollX,
		top: rect.top + window.scrollY,
	};
}
