'use client';

import useCheckMobileScreen from '@/hooks/useCheckMobileScreen';
import { MobileHeader } from './mobile-header';
import { PCHeader } from './pc-header';

export function Header() {
	const isMobile = useCheckMobileScreen();
	return !isMobile ? <PCHeader /> : <MobileHeader />;
}
