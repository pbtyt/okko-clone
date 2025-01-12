import {
	PoppingContext,
	type PoppingContextType,
} from '@/providers/popping-provider';
import { useContext } from 'react';

export const usePopping = (): PoppingContextType => {
	const { isPopping, setIsPopping, poppingPosition, setPoppingPosition } =
		useContext(PoppingContext);

	return { isPopping, setIsPopping, poppingPosition, setPoppingPosition };
};
