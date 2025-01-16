import { SETTINGS_ROUTES } from '@/config/page-url.config';

type SettingsTabDataType = Array<{ id: number; label: string; link: string }>;

export const SETTINGS_TAB_DATA: SettingsTabDataType = [
	{
		id: 1,
		label: 'Основные',
		link: SETTINGS_ROUTES.GENERAL,
	},
	{
		id: 2,
		label: 'Оплата услуг',
		link: SETTINGS_ROUTES.PAYMENTS,
	},
	{
		id: 3,
		label: 'Подписки',
		link: SETTINGS_ROUTES.SUBSCRIPTIONS,
	},
	{
		id: 4,
		label: 'Мои устройства',
		link: SETTINGS_ROUTES.DEVICES,
	},
	{
		id: 5,
		label: 'Предзаказы',
		link: SETTINGS_ROUTES.PREORDERS,
	},
	{
		id: 6,
		label: 'Защита детей',
		link: SETTINGS_ROUTES.PROTECTION,
	},
];
