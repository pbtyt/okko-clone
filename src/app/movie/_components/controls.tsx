'use client';

import { Button } from '@/components/base-components/button';
import { Ban, Bookmark, Eye, Play } from 'lucide-react';
import { useFavorite } from '../hooks/useFavorite';

export function Controls({ movieID }: { movieID: number }) {
	const { toggleFavorite, isFavorite, setIsFavorite } = useFavorite(movieID);

	const handleToggleFavorite = () => {
		toggleFavorite();
	};

	return (
		<>
			<Button buttonText='Смотреть'>
				<Play fill='currentColor' size={20} />
			</Button>
			<Button buttonText='Трейлер' buttonColor='gray' />
			<Button
				style={{ padding: '12px' }}
				buttonColor='dark'
				onClick={handleToggleFavorite}
			>
				<Bookmark
					color={!isFavorite ? 'currentColor' : '#5d0ef5'}
					fill={!isFavorite ? 'transparent' : '#5d0ef5'}
				/>
			</Button>
			<Button style={{ padding: '12px' }} buttonColor='dark'>
				<Eye color='currentColor' />
			</Button>
			<Button style={{ padding: '12px' }} buttonColor='dark'>
				<Ban color='currentColor' />
			</Button>
		</>
	);
}
