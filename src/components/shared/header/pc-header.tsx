'use client';

import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import { useDropDown } from '@/shared/hooks/useDropDown';
import { useModal } from '@/shared/hooks/useModal';
import { ProfileImage } from '@/shared/ui/ProfileImage';
import { getPosition } from '@/shared/utils/getElementPosition';
import { getSize } from '@/shared/utils/getElementSize';
import clsx from 'clsx';
import { Gift, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { ProfileDropDown } from '../profile-drop-down';
import { PromoModal } from '../promo-modal';
import { SearchInput } from '../search';
import styles from './header.module.css';

export function PCHeader() {
	const [isSearch, setIsSearch] = useState(false);
	const { setDropDownPosition, setIsDropDown, isDropDown, setDropDownMenu } =
		useDropDown();
	const { showModal } = useModal();
	const profileButtonRef = useRef(null);

	const handleOnProfileClick = () => {
		if (!profileButtonRef?.current) return;
		setIsDropDown(!isDropDown);

		setDropDownMenu(<ProfileDropDown />);
		setDropDownPosition({
			top:
				getPosition(profileButtonRef.current).top +
				getSize(profileButtonRef.current).height / 2,
			left:
				getPosition(profileButtonRef.current).left +
				getSize(profileButtonRef.current).width,
		});
	};
	return (
		<header className={clsx(isSearch && styles.search, styles.header)}>
			<nav className={styles.navBar}>
				<Link href={SITE_ROUTES_BASE.HOME} className={styles.logo}>
					<div className={styles.logoImg}></div>
				</Link>

				{!isSearch ? (
					<ul className={styles.navButtons}>
						<li className={clsx(styles.navButton, 1 && styles.active)}>
							<Link href={SITE_ROUTES_BASE.HOME} className={styles.hover}>
								Главная
							</Link>
						</li>
						<li className={clsx(styles.navButton, 0 && styles.active)}>
							<Link
								href={`${SITE_ROUTES_BASE.CATALOG}`}
								className={styles.hover}
							>
								Каталог
							</Link>
						</li>
						<li className={clsx(styles.navButton, 0 && styles.active)}>
							<Link href={SITE_ROUTES_BASE.STORE} className={styles.hover}>
								Магазин
							</Link>
						</li>
						<li className={clsx(styles.navButton, 0 && styles.active)}>
							<Link href={SITE_ROUTES_BASE.MY_MOVIES} className={styles.hover}>
								Моё
							</Link>
						</li>
						<li className={clsx(styles.navButton, 0 && styles.active)}>
							<Link href={SITE_ROUTES_BASE.SPORT} className={styles.hover}>
								Спорт
							</Link>
						</li>
					</ul>
				) : (
					<SearchInput />
				)}
				<div style={{ flexGrow: '1' }}></div>
				<div className={styles.navButtons}>
					<button
						className={styles.navButton}
						onClick={() => setIsSearch(prev => !prev)}
					>
						{!isSearch ? (
							<Search color='rgba(255, 255, 255, 0.56)' />
						) : (
							<X color='rgba(255, 255, 255, 0.56)' />
						)}
					</button>

					<button
						className={clsx(styles.navButton)}
						onClick={() => showModal(<PromoModal />)}
					>
						<Gift color='rgba(255, 255, 255, 0.56)' />
						Ввести промокод
					</button>

					<button
						className={styles.navButton}
						ref={profileButtonRef}
						onClick={handleOnProfileClick}
					>
						<ProfileImage coverWidth={44} />
					</button>
				</div>
			</nav>
		</header>
	);
}
