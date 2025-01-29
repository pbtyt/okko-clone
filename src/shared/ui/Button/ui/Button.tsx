'use client';

import { getSize } from '@/shared/utils/getElementSize';
import clsx from 'clsx';
import { CSSProperties, PropsWithChildren, useRef, useState } from 'react';
import { buttonColors, IButton } from '../model/types';
import styles from './Button.module.css';

export function Button({
	buttonColor = 'primary',
	buttonText,
	className,
	style,
	children,
	...rest
}: PropsWithChildren<IButton>) {
	const [buttonSize, setButtonSize] = useState<number>(0);

	const buttonSizeStyle = {
		'--button-size': `${buttonSize + 10}px`,
	} as CSSProperties;

	const buttonRef = useRef(null);
	return (
		<button
			ref={buttonRef}
			className={clsx(className, styles.button)}
			style={{
				background: buttonColors[buttonColor],
				...buttonSizeStyle,
				...style,
			}}
			onMouseOver={() => {
				if (!buttonRef.current) return;
				setButtonSize(getSize(buttonRef.current).width);
			}}
			{...rest}
		>
			<div className={styles.buttonBorder}></div>
			{children}
			{buttonText && <span>{buttonText}</span>}
		</button>
	);
}
