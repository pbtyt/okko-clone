import { DropDownItem } from '@/components/base-components/drop-down-item/drop-down-item';
import { DropDown } from '@/components/base-components/drop-down/drop-down';
import { BadgeInfo, Trash2 } from 'lucide-react';
import styles from './continue-drop-down.module.css';
export function ContinueDropDown() {
	return (
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
	);
}
