//TODO: RENAME)))))))0
'use client';

import { useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { AddProfile } from './add-profile/add-profile';
import { BaseProfileEdit } from './base-profile-edit/base-profile-edit';
import { ProfileManagement } from './profile-management';

type EditParamType = 'base-edit' | 'child-edit' | 'add' | 'manage';

export function SelectView() {
	const param = useSearchParams();
	const editParam: EditParamType =
		(param.get('v') as EditParamType) || 'manage';
	const [component, setComponent] = useState<ReactNode>(null);
	useEffect(() => {
		switch (editParam) {
			case 'base-edit':
				setComponent(<BaseProfileEdit />);
				break;

			case 'child-edit':
				break;

			case 'add':
				setComponent(<AddProfile />);
				break;

			case 'manage':
				setComponent(<ProfileManagement />);
				break;
		}
	}, [editParam]);

	return <>{component}</>;
}
