'use client';

import { ScrollItem } from '@/components/shared/movies-scroll/scroll-item';
import { useFavoriteStore } from '@/store/favorite.store';
import { MovieMinimalType } from '@/types/movie.types';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { type tabType } from './tabs/tabs';

export function SelectedTabContent() {
	const params = useSearchParams();
	const tabParam: tabType = (params.get('tab') as tabType) || 'stored';

	const [data, setData] = useState<MovieMinimalType[]>(
		[] as MovieMinimalType[]
	);
	const { movies } = useFavoriteStore();

	useEffect(() => {
		switch (tabParam) {
			case 'stored':
				setData(movies);
				break;
			case 'purchases':
				setData([]);
				break;
			case 'history':
				setData([]);
				break;
		}
	}, [tabParam, movies]);
	return (
		<>
			{data.map(movie => (
				<ScrollItem key={movie.id} />
			))}
		</>
	);
}
