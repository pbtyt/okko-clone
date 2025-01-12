'use client';

import { useDropDown } from '@/hooks/useDropDown';
import { getPosition } from '@/utils/getElementPosition';
import { Ellipsis } from 'lucide-react';
import { useRef } from 'react';
import styles from './continue.module.css';

export function Continue() {
	const { setDropDownPosition, setIsDropDown, isDropDown } = useDropDown();

	const ref = useRef(null);
	return (
		<div className={styles.scrollItemWrapper}>
			<div className={styles.scrollItemPosterWrapper}>
				<img
					src='https://static.okko.tv/images/v4/52c18c21-efc9-4c45-807f-476231a02cea?width=319&scale=1&quality=80&mediaType=webp'
					alt='cw poster'
					className={styles.scrollItemPoster}
				/>
				<div className={styles.progress}></div>
				<div className={styles.progressFill} style={{ width: '100px' }}></div>
			</div>
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
					<span
						style={{
							color: 'rgba(255, 255, 255, .78)',
							fontSize: '17px',
							lineHeight: '22px',
							fontWeight: '500',
						}}
					>
						Еретик
					</span>
					<span
						style={{
							color: 'rgba(255, 255, 255, .4)',
							fontSize: '13px',
							lineHeight: '18px',
							fontWeight: '500',
						}}
					>
						25 мин
					</span>
					<span
						style={{
							color: 'rgba(255, 255, 255, .56)',
							fontSize: '13px',
							lineHeight: '18px',
							fontWeight: '500',
						}}
					>
						1 час 30 мин
					</span>
				</div>
				<button
					ref={ref}
					style={{ alignSelf: 'center' }}
					onClick={() => {
						if (!ref?.current) return;

						setIsDropDown(!isDropDown);
						setDropDownPosition(getPosition(ref.current));
					}}
				>
					<Ellipsis
						fill='rgba(255, 255, 255, 0.96)'
						color='rgba(255, 255, 255, 0.96)'
					/>
				</button>
			</div>
		</div>
	);
}
