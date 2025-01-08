'use client';

import { usePreview } from '@/hooks/usePreview';
import { Ban, Bookmark, Eye, Play } from 'lucide-react';
import Link from 'next/link';
import styles from './preview.module.css';

export function Preview() {
	const { isPreview, setIsPreview, previewPosition } = usePreview();
	return (
		isPreview && (
			<div id='preview' inert>
				<div
					className={styles.cardHandle}
					style={{
						position: 'absolute',
						inset: `${previewPosition.top}px 0 0 ${previewPosition.left}px`,
						// transform: `translate(${previewPosition.left}px, ${
						// 	previewPosition.top
						// }px)`,
					}}
					onMouseLeave={() => {
						setIsPreview(false);
					}}
				>
					<div className={styles.cardWrapper}>
						<figure className={styles.cardContent}>
							<div
								style={{
									position: 'relative',
									width: '100%',
									margin: '0',
									padding: '0',
								}}
							>
								<div className={styles.cardContentPoster}>
									<img
										src='https://static.okko.tv/images/v4/52c18c21-efc9-4c45-807f-476231a02cea?width=331&scale=1&quality=80&mediaType=webp'
										alt=''
										className={styles.cardPoster}
									/>
									<div className={styles.cardOverlayWrapper}>
										<div className={styles.cardOverlay}>
											{/* video */}
											<div className={styles.cardOverlayControl}>
												<button>
													<Play
														fill='rgba(255, 255, 255, 0.96)'
														color='rgba(255, 255, 255, 0.96)'
														size={20}
													/>
												</button>
											</div>
										</div>
										<Link href='' className={styles.cardLink}></Link>
									</div>
								</div>
							</div>
							<div className={styles.cardFooter}>
								<div className={styles.innerContainer}>
									<div className={styles.cardInfoWrapper}>
										<div className={styles.cardInfo}>
											<div className={styles.cardRating}>
												<span style={{ fontSize: '12px', lineHeight: '20px' }}>
													6.5
												</span>
											</div>
											<span>2024</span>
											<span>Ужасы</span>
											<span>1 ч 47 мин</span>
										</div>
									</div>
									<div className={styles.cardFooterControls}>
										<button>
											<Play
												size={24}
												fill='rgba(255, 255, 255, .96)'
												color='rgba(255, 255, 255, .96)'
											/>
										</button>
										<button>
											<Bookmark size={20} color='rgba(255, 255, 255, .96)' />
										</button>
										<button>
											<Eye size={20} color='rgba(255, 255, 255, .96)' />
										</button>
										<button>
											<Ban size={20} color='rgba(255, 255, 255, .96)' />
										</button>
									</div>
								</div>
							</div>
						</figure>
					</div>
				</div>
			</div>
		)
	);
}
