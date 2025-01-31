'use client';

import { getSize } from '@/shared/utils/getElementSize';
import clsx from 'clsx';
import {
	ButtonHTMLAttributes,
	CSSProperties,
	PropsWithChildren,
	useRef,
	useState,
} from 'react';
import { VariantType } from '../model/types';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	buttonColor?: VariantType;
	buttonText?: string;
	withoutBorder?: boolean;
	className?: string;
	style?: CSSProperties;
}

export function Button({
	buttonColor = 'primary',
	buttonText,
	withoutBorder = false,
	className,
	style,
	children,
	...rest
}: PropsWithChildren<ButtonProps>) {
	const [buttonSize, setButtonSize] = useState<number>(0);

	const buttonSizeStyle = buttonSize
		? { '--button-size': `${buttonSize + 10}px` }
		: {};

	const buttonRef = useRef(null);
	return (
		<button
			ref={buttonRef}
			className={clsx(className, styles.button, styles[`${buttonColor}`])}
			style={{
				// background: buttonColors[buttonColor],
				...buttonSizeStyle,
				...style,
			}}
			onMouseOver={() => {
				if (withoutBorder) return;
				if (!buttonRef.current) return;

				setButtonSize(getSize(buttonRef.current).width);
			}}
			{...rest}
		>
			{!withoutBorder && <div className={styles.buttonBorder}></div>}
			{children}
			{buttonText && <span>{buttonText}</span>}
		</button>
	);
}
