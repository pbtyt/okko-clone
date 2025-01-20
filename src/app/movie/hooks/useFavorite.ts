import { useProfiles } from '@/hooks/useProfiles';
import { useFavoriteStore } from '@/store/favorite.store';
import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useState,
} from 'react';

type TypeOut = {
	toggleFavorite: () => void;
	isFavorite: boolean;
	setIsFavorite: Dispatch<SetStateAction<boolean>>;
};

export const useFavorite = (movieID: number): TypeOut => {
	const { addNewMovie, removeMovie, movies } = useFavoriteStore();
	const { currentActiveProfile } = useProfiles();

	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		setIsFavorite(
			movies.findIndex(
				movie =>
					movie.id === movieID && movie.profileID === currentActiveProfile.id
			) !== -1
		);
	}, [movies, currentActiveProfile]);

	const toggleFavorite = useCallback(() => {
		if (
			movies.findIndex(
				movie =>
					movie.id === movieID && movie.profileID === currentActiveProfile.id
			) === -1
		) {
			console.log('adding');
			addNewMovie(movieID, currentActiveProfile.id);
		} else {
			removeMovie(movieID, currentActiveProfile.id);
		}
	}, [isFavorite, currentActiveProfile]);

	return { toggleFavorite, isFavorite, setIsFavorite };
};
