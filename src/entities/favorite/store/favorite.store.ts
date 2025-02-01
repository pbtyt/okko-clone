import { MOVIES_EXAMPLE_DATA } from '@/data/movies.data';
import type { MovieMinimalType } from '@/shared/api/types';
import { MOVIE_FAVORITE_STORAGE_KEY } from '@/shared/constants/localstorage.constants';
import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';

type MovieStorageType = MovieMinimalType & { profileID: number };

interface IFavoriteStore {
	movies: MovieStorageType[];
	addNewMovie: (movieId: number, profileID: number) => void;
	removeMovie: (movieId: number, profileID: number) => void;
}

export const FavoriteStore = create<IFavoriteStore>()(
	persist(
		combine({ movies: [] as MovieStorageType[] }, (set, get) => {
			return {
				addNewMovie: (movieId: number, profileID: number) => {
					set(state => {
						// Находим фильм по ID
						const movieToAdd = MOVIES_EXAMPLE_DATA.find(
							movieData => movieData.id === movieId
						);
						// Проверяем, если фильм уже в списке
						if (
							!movieToAdd ||
							state.movies.some(
								movie => movie.id === movieId && movie.profileID === profileID
							)
						) {
							return state; // Ничего не меняем, если фильм уже добавлен или не найден
						}

						const minimalMovie: MovieStorageType = {
							id: movieToAdd.id,
							link: movieToAdd.link,
							title: movieToAdd.title,
							profileID: profileID,
						};
						return {
							movies: [...state.movies, minimalMovie],
						};
					});
				},
				removeMovie: (movieId: number, profileID: number) => {
					set(state => ({
						movies: state.movies.filter(
							movie => movie.id !== movieId || movie.profileID !== profileID
						),
					}));
				},
			};
		}),
		{
			name: MOVIE_FAVORITE_STORAGE_KEY,
		}
	)
);
