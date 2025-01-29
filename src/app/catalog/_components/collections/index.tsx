'use client';

import { CatalogCollectionCard } from '@/components/shared/catalog-collection-card';
import { Button } from '@/shared/ui/Button';
import clsx from 'clsx';
import { useState } from 'react';
import styles from './collections.module.css';
export function Collections() {
	const [isCollapse, setIsCollapse] = useState<boolean>(true);

	return (
		<article style={{ marginBottom: '32px' }}>
			<div className={styles.collapse}>
				<div
					className={clsx(styles.catalogWrapper, !isCollapse && styles.full)}
				>
					<div className={styles.collectionWrapper}>
						<CatalogCollectionCard />
						<CatalogCollectionCard />
						<CatalogCollectionCard />
						<CatalogCollectionCard />
						<CatalogCollectionCard />
						<CatalogCollectionCard />
						<CatalogCollectionCard />
						<CatalogCollectionCard />
						<CatalogCollectionCard />
						<CatalogCollectionCard />
						<CatalogCollectionCard />
					</div>
				</div>
				{isCollapse && (
					<Button
						buttonText='Показать больше'
						className={styles.collapseButton}
						buttonColor='gray'
						onClick={() => setIsCollapse(false)}
					/>
					// <button onClick={() => setIsCollapse(false)}>Показать больше</button>
				)}
			</div>
		</article>
	);
}
