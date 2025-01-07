import { Scroll } from '@/components/base-components/scroll';
import { RailButton } from './rail-button';
import styles from './rail-setout.module.css';
export function RailSetout() {
	return (
		<article className={styles.railSetoutWrapper}>
			<Scroll scrollStep={500}>
				<RailButton />
				<RailButton />
				<RailButton />
				<RailButton />
				<RailButton />
				<RailButton />
				<RailButton />
				<RailButton />
				<RailButton />
				<RailButton />
			</Scroll>
		</article>
	);
}
