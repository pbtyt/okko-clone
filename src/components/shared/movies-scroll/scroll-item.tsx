'use client';

import { useModal } from '@/hooks/useModal';
import { usePreview } from '@/hooks/usePreview';
import { getPosition } from '@/utils/getElementPosition';
import { getSize } from '@/utils/getElementSize';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Card } from '../card';
import { MoreModal } from '../more-modal';

export function ScrollItem() {
	const itemRef = useRef<HTMLDivElement>(null);
	const { isPreview, setIsPreview, setPreviewPosition } = usePreview();
	// const isMobile = useCheckMobileScreen();
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const { showModal } = useModal();
	return (
		<Card
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
		/>
	);
}
