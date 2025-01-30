import { CSSProperties } from 'react';

export interface ModalProps {
	modalWidth: string;
	attachmentPos?: 'left' | 'right';
	alignPos?: 'center' | 'top' | 'down';
	style?: CSSProperties;
	className?: string;
	fullScreenModal?: boolean;
}
