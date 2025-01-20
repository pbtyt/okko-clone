'use client';

import useCheckMobileScreen from '@/hooks/useCheckMobileScreen';
import { MobileFooter } from './mobile-footer';
import { PCFooter } from './pc-footer';

export function Footer() {
	const isMobile = useCheckMobileScreen();
	return !isMobile ? <PCFooter /> : <MobileFooter />;
}
