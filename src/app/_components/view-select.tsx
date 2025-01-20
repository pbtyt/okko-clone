'use client';

import { DropDownContainer } from '@/components/shared/drop-down-container';
import { Footer } from '@/components/shared/footer';
import { Header } from '@/components/shared/header';
import { Preview } from '@/components/shared/preview';
import useCheckMobileScreen from '@/hooks/useCheckMobileScreen';
import { PropsWithChildren } from 'react';
import { Modals } from './modals';

export function ViewSelect({ children }: PropsWithChildren<unknown>) {
	const isMobile = useCheckMobileScreen();
	return !isMobile ? (
		<>
			<Header />
			{children}
			<Preview />
			<DropDownContainer />
			<Modals />
			<Footer />
		</>
	) : (
		<>{children}</>
	);
}
