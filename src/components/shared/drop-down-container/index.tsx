'use client';
import { DropDownItem } from '@/components/base-components/drop-down-item/drop-down-item';
import { DropDown } from '@/components/base-components/drop-down/drop-down';
import { Popping } from '@/components/base-components/popping';
import { useDropDown } from '@/hooks/useDropDown';
import { BadgeInfo, Trash2 } from 'lucide-react';
import styles from './drop-down-container.module.css';

export function DropDownContainer() {
	const { isDropDown, DropDownPosition, dropDownMenuSize } = useDropDown();
	return (
		isDropDown && (
			<Popping
				id='drop-down'
				position={{
					left: DropDownPosition.left + 24 - dropDownMenuSize.width,
					top: DropDownPosition.top - 12,
				}}
				className={styles.dropDownHandle}
			>
				<DropDown chooseMenuClassName={styles.chooseMenu}>
					<DropDownItem className={styles.dropDownItem}>
						<BadgeInfo color='currentColor' />
						<span>Подробнее</span>
					</DropDownItem>
					<DropDownItem className={styles.dropDownItem}>
						<Trash2 color='currentColor' />
						<span>Удалить из списка</span>
					</DropDownItem>
				</DropDown>
			</Popping>
		)
	);
}
