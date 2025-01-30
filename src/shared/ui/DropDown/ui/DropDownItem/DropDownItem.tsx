'use client';

import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { DropDownItemProps } from '../../model/types';
import styles from './DropDownItem.module.css';

export function DropDownItem({
	className,
	children,
	...props
}: PropsWithChildren<DropDownItemProps>) {
	return (
		<li className={clsx(styles.dropDownItem, className)} {...props}>
			{children}
		</li>
	);
}
