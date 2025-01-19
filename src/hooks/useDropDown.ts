import {
	DropDownContext,
	type DropDownContextType,
} from '@/providers/dropdown-provider';
import { useContext } from 'react';

export const useDropDown = (): DropDownContextType => {
	return useContext(DropDownContext);
};
