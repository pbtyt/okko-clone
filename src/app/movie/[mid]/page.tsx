import { MOVIES_EXAMPLE_DATA } from '@/data/movies.data';
import MovieClientPage from './page-client';

export function generateStaticParams() {
	const movies = MOVIES_EXAMPLE_DATA;

	return movies.map(movie => ({
		mid: String(movie.id),
	}));
}

export default function MoviePage() {
	return <MovieClientPage />;
}
