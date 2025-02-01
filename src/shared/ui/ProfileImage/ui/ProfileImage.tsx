import clsx from 'clsx';
import styles from './ProfileImage.module.css';

interface ProfileImageProps {
	coverWidth?: number;
	border?: boolean;
	className?: string;
}

export function ProfileImage({
	coverWidth = 0,
	border = false,
	className,
}: ProfileImageProps) {
	return (
		<div
			style={coverWidth ? { width: `${coverWidth}px` } : {}}
			className={clsx(styles.coverWrapper, { [styles.border]: border })}
		>
			<img
				src={`//static.okko.tv/images/v4/a5c64021-ee8d-4b4a-8dae-65f2cb602845?width=${
					coverWidth || 85
				}&scale=1&quality=80&mediaType=webp`}
				alt='Profile Image'
				className={clsx(styles.cover, className)}
			/>
		</div>
	);
}
