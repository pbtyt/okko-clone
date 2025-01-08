import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IPreview {
	title: string;
	setTitle: (newTitle: string) => void;
}

export const usePreview = create<IPreview>()(
	persist(
		set => ({
			title: 'no-title',
			setTitle: (newTitle: string) => set(state => ({ title: newTitle })),
		}),
		{ name: 'preview' }
	)
);
