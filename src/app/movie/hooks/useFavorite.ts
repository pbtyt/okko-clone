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

	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		setIsFavorite(movies.findIndex(movie => movie.id === movieID) !== -1);
	}, [movies]);

	const toggleFavorite = useCallback(() => {
		if (movies.findIndex(movie => movie.id === movieID) === -1) {
			console.log('adding');
			addNewMovie(movieID);
		} else {
			removeMovie(movieID);
		}
	}, [isFavorite]);

	return { toggleFavorite, isFavorite, setIsFavorite };
};
