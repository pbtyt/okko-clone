import { ButtonHTMLAttributes, CSSProperties } from 'react';

type VariantType = 'primary' | 'dark' | 'gray' | 'transparent';

export const buttonColors: Record<VariantType, string> = {
	primary: 'linear-gradient(26.57deg, #3c1a70 0%, rgba(93, 14, 245, 0.83))',
	dark: '#1b1a1d',
	gray: 'rgba(139,136,146,.32)',
	transparent: 'transparent',
};

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	buttonColor?: VariantType;
	buttonText?: string;
	className?: string;
	style?: CSSProperties;
}
