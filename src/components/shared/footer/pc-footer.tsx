import { Button } from '@/shared/ui/Button';
import { Dribbble, Facebook, Instagram, Linkedin, Twitch } from 'lucide-react';
import Link from 'next/link';
import styles from './footer.module.css';

export function PCFooter() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerInfo}>
				<div className={styles.footerSocial}>
					<div className={styles.footerSocialLinks}>
						<Link href='' className={styles.footerSocialLink}>
							<Instagram
								color='rgba(255,255,255,0.96)'
								strokeWidth={2}
								size={20}
							/>
						</Link>
						<Link href='' className={styles.footerSocialLink}>
							<Facebook
								color='rgba(255,255,255,0.96)'
								strokeWidth={2}
								size={20}
							/>
						</Link>
						<Link href='' className={styles.footerSocialLink}>
							<Twitch
								color='rgba(255,255,255,0.96)'
								strokeWidth={2}
								size={20}
							/>
						</Link>
						<Link href='' className={styles.footerSocialLink}>
							<Dribbble
								color='rgba(255,255,255,0.96)'
								strokeWidth={2}
								size={20}
							/>
						</Link>
						<Link href='' className={styles.footerSocialLink}>
							<Linkedin
								color='rgba(255,255,255,0.96)'
								strokeWidth={2}
								size={20}
							/>
						</Link>
					</div>
					<Button buttonText='Нужна помощь?' className={styles.helpButton} />
					{/* <button className={styles.helpButton}>Нужна помощь?</button> */}
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexGrow: '1',
					}}
				>
					<div className={styles.column}>
						<h3>Site)</h3>
						<Link href='' className={styles.link}>
							О нас
						</Link>
						<Link href='' className={styles.link}>
							О нас
						</Link>
						<Link href='' className={styles.link}>
							О нас
						</Link>
						<Link href='' className={styles.link}>
							О нас
						</Link>
					</div>
					<div className={styles.column}>
						<h3>Помощь</h3>
						<Link href='' className={styles.link}>
							О нас
						</Link>
						<Link href='' className={styles.link}>
							О нас
						</Link>
						<Link href='' className={styles.link}>
							О нас
						</Link>
						<Link href='' className={styles.link}>
							О нас
						</Link>
					</div>
					<div className={styles.column}>
						<h3>Другое</h3>
						<Link href='' className={styles.link}>
							О нас
						</Link>
						<Link href='' className={styles.link}>
							О нас
						</Link>
						<Link href='' className={styles.link}>
							О нас
						</Link>
						<Link href='' className={styles.link}>
							О нас
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
