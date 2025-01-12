'use client';

import { clsx } from 'clsx';
import { LiHTMLAttributes, PropsWithChildren } from 'react';
import styles from './drop-down-item.module.css';

interface IDropDownItem extends LiHTMLAttributes<HTMLLIElement> {
	className?: string;
}

export function DropDownItem({
	className,
	children,
	...rest
}: PropsWithChildren<IDropDownItem>) {
	return (
		<li className={clsx(styles.dropDownItem, className)} {...rest}>
			{children}
		</li>
	);
}
