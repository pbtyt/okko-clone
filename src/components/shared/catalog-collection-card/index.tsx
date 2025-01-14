import Link from 'next/link';
import styles from './catalog-collection-card.module.css';
export function CatalogCollectionCard() {
	return (
		<Link href='' className={styles.collectionElement}>
			<figure className={styles.collectionElementContent}>
				<img
					src='https://static.okko.tv/images/v4/ed49cd31-e7c8-4cb2-ac6c-b20628384d15,553d804f-9de9-440a-9853-dc16c496576c,7a08d61b-4bd4-458b-bf38-7571eeb64da6?title=Фильмы&presetId=6000&width=268&scale=1&quality=80&mediaType=webp'
					alt=''
					style={{ borderRadius: 'calc(8px * 1.75)' }}
				/>
			</figure>
		</Link>
	);
}
