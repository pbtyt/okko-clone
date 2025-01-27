'use client';

import { DropDownContainer } from '@/components/shared/drop-down-container';
import { Footer } from '@/components/shared/footer';
import { Header } from '@/components/shared/header';
import { Preview } from '@/components/shared/preview';
import { PropsWithChildren } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Modals } from './modals';

export function ViewSelect({ children }: PropsWithChildren<unknown>) {
	// const isMobile = useCheckMobileScreen();
	const isMobile = useMediaQuery({ maxWidth: 768 });
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
