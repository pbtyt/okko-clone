'use client';
import { Popping } from '@/components/base-components/popping';
import { useDropDown } from '@/hooks/useDropDown';
import { ContinueDropDown } from '../continue-drop-down';
import styles from './drop-down-container.module.css';

export function DropDownContainer() {
	const { isDropDown, DropDownPosition, dropDownMenuSize } = useDropDown();
	return (
		isDropDown && (
			<Popping
				id='drop-down'
				//for continue drop-down
				position={{
					left: DropDownPosition.left + 24 - dropDownMenuSize.width,
					top: DropDownPosition.top - 12,
				}}
				// for profile drop-down
				// position={{
				// 	left: DropDownPosition.left + 44 - dropDownMenuSize.width,
				// 	top: DropDownPosition.top + 24,
				// }}
				className={styles.dropDownHandle}
			>
				<ContinueDropDown />
				{/* <ProfileDropDown /> */}
			</Popping>
		)
	);
}
