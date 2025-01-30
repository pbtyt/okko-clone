import { LiHTMLAttributes } from 'react';

export interface DropDownProps {
	className?: string;
	chooseMenuClassName?: string;
}

export interface DropDownItemProps extends LiHTMLAttributes<HTMLLIElement> {
	className?: string;
}
