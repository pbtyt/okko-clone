'use client';

import clsx from 'clsx';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { ICheckbox } from '../model/types';
import styles from './Checkbox.module.css';

export function Checkbox({ isCheck = false, onClick = () => {} }: ICheckbox) {
	//TODO: WIP
	const [isChecked, setIsChecked] = useState(isCheck);
	return (
		<button
			className={clsx(styles.checkbox, isCheck && styles.active)}
			onClick={onClick}
		>
			{isCheck && (
				<Check color='rgba(255,255,255,0.96)' size={16} strokeWidth={3} />
			)}
		</button>
	);
}
