'use client';
import { Popping } from '@/components/base-components/popping';
import { useDropDown } from '@/hooks/useDropDown';
import styles from './drop-down-container.module.css';

export function DropDownContainer() {
	const { isDropDown, DropDownPosition, dropDownMenuSize, dropDownMenu } =
		useDropDown();

	return (
		isDropDown && (
			<Popping
				id='drop-down'
				//for continue drop-down
				position={{
					left: DropDownPosition.left - dropDownMenuSize.width,
					top: DropDownPosition.top,
				}}
				// for profile drop-down
				// position={{
				// 	left: DropDownPosition.left + 44 - dropDownMenuSize.width,
				// 	top: DropDownPosition.top + 24,
				// }}
				className={styles.dropDownHandle}
			>
				{dropDownMenu}
			</Popping>
		)
	);
}
