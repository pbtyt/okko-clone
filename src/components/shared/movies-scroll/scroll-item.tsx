'use client';

import { usePreview } from '@/hooks/usePreview';
import { getPosition } from '@/utils/getElementPosition';
import { useRef } from 'react';
import styles from './scroll-item.module.css';

export function ScrollItem() {
	const itemRef = useRef<HTMLDivElement>(null);
	const { setIsPreview, setPreviewPosition } = usePreview();
	return (
		<div
			className={styles.scrollItemWrapper}
			ref={itemRef}
			onMouseEnter={() => {
				if (!itemRef?.current) {
					console.error('Cant find element');
					return;
				}

				setIsPreview(true);
				setPreviewPosition(getPosition(itemRef.current));
			}}
		>
			<img
				src='https://static.okko.tv/images/v4/52c18c21-efc9-4c45-807f-476231a02cea?width=319&scale=1&quality=80&mediaType=webp'
				alt='cw poster'
				className={styles.scrollItemPoster}
			/>
		</div>
	);
}
