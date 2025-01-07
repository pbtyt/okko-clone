import styles from './scroll-item.module.css';

export function ScrollItem() {
	return (
		<div className={styles.scrollItemWrapper}>
			<img
				src='https://static.okko.tv/images/v4/52c18c21-efc9-4c45-807f-476231a02cea?width=319&scale=1&quality=80&mediaType=webp'
				alt='cw poster'
				className={styles.scrollItemPoster}
			/>
		</div>
	);
}
