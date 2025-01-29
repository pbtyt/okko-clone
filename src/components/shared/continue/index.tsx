'use client';

import { useDropDown } from '@/shared/hooks/useDropDown';
import { getPosition } from '@/shared/utils/getElementPosition';
import { getSize } from '@/shared/utils/getElementSize';
import { Ellipsis } from 'lucide-react';
import { useRef } from 'react';
import { Card } from '../card';
import { ContinueDropDown } from '../continue-drop-down';
import styles from './continue.module.css';

export function Continue() {
	const { setDropDownPosition, setIsDropDown, isDropDown, setDropDownMenu } =
		useDropDown();

	const ref = useRef(null);

	const handleOnMoreOptions = () => {
		if (!ref?.current) return;

		setIsDropDown(!isDropDown);

		setDropDownPosition({
			top: getPosition(ref.current).top - getSize(ref.current).height / 2,
			left: getPosition(ref.current).left + getSize(ref.current).width,
		});
		setDropDownMenu(<ContinueDropDown />);
	};
	return (
		<Card
			style={{ flexDirection: 'column', background: 'none' }}
			footer={
				<div className={styles.footerWrapper}>
					<div className={styles.progress}></div>
					<div className={styles.progressFill} style={{ width: '100px' }}></div>
					<div
						style={{
							display: 'flex',
							width: '100%',
							justifyContent: 'space-between',
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '2px',
							}}
						>
							<span className={styles.title}>Еретик</span>
							<span className={styles.timePerEpisode}>25 мин</span>
							<span className={styles.time}>1 час 30 мин</span>
						</div>
						<button
							ref={ref}
							style={{ alignSelf: 'center' }}
							onClick={handleOnMoreOptions}
						>
							<Ellipsis
								fill='rgba(255, 255, 255, 0.96)'
								color='rgba(255, 255, 255, 0.96)'
							/>
						</button>
					</div>
				</div>
			}
		/>
		// <div className={styles.scrollItemWrapper}>
		// 	<div className={styles.scrollItemPosterWrapper}>
		// 		<img
		// 			src='https://static.okko.tv/images/v4/52c18c21-efc9-4c45-807f-476231a02cea?width=319&scale=1&quality=80&mediaType=webp'
		// 			alt='cw poster'
		// 			className={styles.scrollItemPoster}
		// 		/>

		// 	</div>

		// </div>
	);
}
