'use client';

import { useDropDown } from '@/shared/hooks/useDropDown';
import { useOutside } from '@/shared/hooks/useOutside';
import { getSize } from '@/shared/utils/getElementSize';
import { clsx } from 'clsx';
import { PropsWithChildren, useEffect, useRef } from 'react';
import styles from './drop-down.module.css';

interface IDropDown {
	className?: string;
	chooseMenuClassName?: string;
	dropDownTitle?: string;
	isButton?: boolean;
}

export function DropDown({
	className,
	chooseMenuClassName,
	dropDownTitle,
	isButton = false,
	children,
}: PropsWithChildren<IDropDown>) {
	const { setDropDownMenuSize, setIsDropDown, isDropDown } = useDropDown();
	const chooseMenuRef = useRef(null);

	const { ref, isShow } = useOutside(true);

	useEffect(() => {
		if (!isShow) setIsDropDown(false);

		if (!chooseMenuRef?.current) {
			console.error('Cant Find Choose Menu Ref. Drop Down');
			return;
		}

		setDropDownMenuSize(getSize(chooseMenuRef.current));
	}, [isShow]);

	return (
		<div className={clsx(styles.dropDownWrapper, className)} ref={ref}>
			{isButton && (
				<button>
					<span>{dropDownTitle}</span>
				</button>
			)}

			<ul
				className={clsx(styles.dropDownChooseMenu, chooseMenuClassName)}
				ref={chooseMenuRef}
			>
				{children}
			</ul>
		</div>
	);
}
