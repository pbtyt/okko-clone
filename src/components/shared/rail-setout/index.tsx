import { Scroll } from '@/components/base-components/scroll';
import { RailButton } from './rail-button';
import styles from './rail-setout.module.css';
import { BookOpenText, Candy, ChefHat, CirclePlay, Clapperboard, Film, HeartPulse, Music, Newspaper, Trees, TvMinimalPlay, Volleyball, Image, Smile, Box, Medal, Users } from 'lucide-react';
export function RailSetout() {
	return (
		<article className={styles.railSetoutWrapper}>
			<Scroll scrollStep={500}>
			<RailButton RailButtonIcon={<Clapperboard color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Фильмы'/>
			<RailButton RailButtonIcon={<TvMinimalPlay color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Сериалы'/>
			<RailButton RailButtonIcon={<Candy color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Мультфильмы'/>
			<RailButton RailButtonIcon={<Volleyball color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Спорт'/>
			<RailButton RailButtonIcon={<HeartPulse color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Фитнес'/>
			<RailButton RailButtonIcon={<Trees color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Природа'/>
			<RailButton RailButtonIcon={<BookOpenText color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Лекции'/>
			<RailButton RailButtonIcon={<ChefHat color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Кулинария'/>
			<RailButton RailButtonIcon={<Newspaper color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Программы'/>
			<RailButton RailButtonIcon={<Music color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Концерты'/>
			<RailButton RailButtonIcon={<CirclePlay color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Видеокурсы'/>
			<RailButton RailButtonIcon={<Image color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Искусство'/>
			<RailButton RailButtonIcon={<Smile color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Стендап'/>
			<RailButton RailButtonIcon={<Box color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Реалити-шоу'/>
			<RailButton RailButtonIcon={<Medal color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Балет'/>
			<RailButton RailButtonIcon={<Users color='rgba(255, 255, 255, 0.96)'/>} RailButtonText='Интервью'/>
			</Scroll>
		</article>
	);
}
