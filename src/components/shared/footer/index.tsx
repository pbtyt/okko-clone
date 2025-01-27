'use client';

import { useMediaQuery } from 'react-responsive';
import { MobileFooter } from './mobile-footer';
import { PCFooter } from './pc-footer';

export function Footer() {
	// const isMobile = useCheckMobileScreen();
	const isMobile = useMediaQuery({ maxWidth: 768 });
	return !isMobile ? <PCFooter /> : <MobileFooter />;
}
