import { MOVIE_FAVORITE_STORAGE_KEY } from '@/constants/localstorage.constants';
import { MOVIES_EXAMPLE_DATA } from '@/data/movies.data';
import { MovieMinimalType } from '@/types/movie.types';
import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';

interface IFavoriteStore {
	movies: MovieMinimalType[];
	addNewMovie: (movieId: number) => void;
	removeMovie: (movieId: number) => void;
}

export const useFavoriteStore = create<IFavoriteStore>()(
	persist(
		combine({ movies: [] as MovieMinimalType[] }, (set, get) => {
			return {
				addNewMovie: (movieId: number) => {
					set(state => {
						// Находим фильм по ID
						const movieToAdd = MOVIES_EXAMPLE_DATA.find(
							movieData => movieData.id === movieId
						);
						// Проверяем, если фильм уже в списке
						if (
							!movieToAdd ||
							state.movies.some(movie => movie.id === movieId)
						) {
							return state; // Ничего не меняем, если фильм уже добавлен или не найден
						}

						const minimalMovie: MovieMinimalType = {
							id: movieToAdd.id,
							link: movieToAdd.link,
							title: movieToAdd.title,
						};
						return {
							movies: [...state.movies, minimalMovie],
						};
					});
				},
				removeMovie: (movieId: number) => {
					set(state => ({
						movies: state.movies.filter(movie => movie.id !== movieId),
					}));
				},
			};
		}),
		{
			name: MOVIE_FAVORITE_STORAGE_KEY,
		}
	)
);
