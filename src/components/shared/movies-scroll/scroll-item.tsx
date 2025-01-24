'use client';

import useCheckMobileScreen from '@/hooks/useCheckMobileScreen';
import { useModal } from '@/hooks/useModal';
import { usePreview } from '@/hooks/usePreview';
import { getPosition } from '@/utils/getElementPosition';
import { getSize } from '@/utils/getElementSize';
import { useRef } from 'react';
import { MoreModal } from '../more-modal';
import styles from './scroll-item.module.css';

export function ScrollItem() {
	const itemRef = useRef<HTMLDivElement>(null);
	const { isPreview, setIsPreview, setPreviewPosition } = usePreview();
	const isMobile = useCheckMobileScreen();
	const { showModal } = useModal();
	return (
		<div
			className={styles.scrollItemWrapper}
			ref={itemRef}
			onMouseOver={() => {
				if (isMobile) return;

				if (!itemRef?.current) {
					console.error('Cant find element');
					return;
				}

				setIsPreview(true);
				setPreviewPosition({
					left:
						getPosition(itemRef.current).left +
						getSize(itemRef.current).width / 2,
					top:
						getPosition(itemRef.current).top +
						getSize(itemRef.current).height / 2,
				});
			}}
			onClick={() => {
				if (!isMobile) return;
				showModal(<MoreModal />);
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
