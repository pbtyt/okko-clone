import { DropDownContainer } from '@/components/shared/drop-down-container';
import { Header } from '@/components/shared/header';
import { Preview } from '@/components/shared/preview';
import { SITE_NAME } from '@/constants/seo.constants';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './_components/providers';
import './global.css';
const zen = Inter({
	subsets: ['cyrillic', 'latin', 'cyrillic-ext'],
	weight: ['300', '400', '500', '500', '700', '800'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal'],
});

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `${SITE_NAME} | %s`,
	},
	description: '',
	// icons: {
	// 	icon: '/favicon32.png',
	// },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body id='body' className={zen.className} style={{}}>
				<Providers>
					<Header />
					{children}
					<Preview />
					<DropDownContainer />
				</Providers>
			</body>
		</html>
	);
}
