import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { PopoverProps } from '../model/types';
import styles from './Popover.module.css';

export function Popover({
	id,
	position,
	poppingRef,
	className,
	style,
	children,
	...props
}: PropsWithChildren<PopoverProps>) {
	return (
		<div id={id}>
			<div
				ref={poppingRef}
				className={clsx(styles.popover, className)}
				style={{
					inset: `${position.top}px auto auto ${position.left}px`,
					...style,
				}}
				{...props}
			>
				{children}
			</div>
		</div>
	);
}
