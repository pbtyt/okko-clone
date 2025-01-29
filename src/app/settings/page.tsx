import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import { Metadata } from 'next';
import { GeneralTab } from './_components/tabInfo/general-tab';

export const metadata: Metadata = {
	title: 'Настройки',
	...NO_INDEX_PAGE,
};
export default function SettingsPage() {
	return <GeneralTab />;
}
