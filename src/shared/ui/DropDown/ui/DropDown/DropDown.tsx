import { useDropDown } from '@/shared/hooks/useDropDown';
import { useOutside } from '@/shared/hooks/useOutside';
import { getSize } from '@/shared/utils/getElementSize';
import clsx from 'clsx';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { DropDownProps } from '../../model/types';
import styles from './DropDown.module.css';

export function DropDown({
	className,
	chooseMenuClassName,
	children,
}: PropsWithChildren<DropDownProps>) {
	const { setDropDownMenuSize, setIsDropDown } = useDropDown();
	const chooseMenuRef = useRef(null);

	const { ref: dropDownRef, isShow } = useOutside(true);

	useEffect(() => {
		if (!isShow) setIsDropDown(false);

		if (!chooseMenuRef?.current) {
			console.error('Cant Find Choose Menu Ref. Drop Down');
			return;
		}

		setDropDownMenuSize(getSize(chooseMenuRef.current));
	}, [isShow]);

	return (
		<div className={clsx(styles.dropDownWrapper, className)} ref={dropDownRef}>
			<ul
				className={clsx(styles.dropDownChooseMenu, chooseMenuClassName)}
				ref={chooseMenuRef}
			>
				{children}
			</ul>
		</div>
	);
}
