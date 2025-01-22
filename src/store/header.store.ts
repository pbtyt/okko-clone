import { create } from 'zustand';
import { combine } from 'zustand/middleware';

interface IHeaderStore {
	currentHeaderTitle: string;
	setHeaderTitle: (newTitle: string) => void;
}
export const useHeaderStore = create<IHeaderStore>()(
	combine({ currentHeaderTitle: '' }, set => {
		return {
			setHeaderTitle(newTitle) {
				set(state => {
					return {
						currentHeaderTitle: newTitle,
					};
				});
			},
		};
	})
);
