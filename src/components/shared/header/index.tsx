'use client';

import { useMediaQuery } from 'react-responsive';
import { MobileHeader } from './mobile-header';
import { PCHeader } from './pc-header';

export function Header() {
	// const isMobile = useCheckMobileScreen();
	const isMobile = useMediaQuery({ maxWidth: 768 });
	return !isMobile ? <PCHeader /> : <MobileHeader />;
}
